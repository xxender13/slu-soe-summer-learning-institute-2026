import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import XLSX from "xlsx";
import type { AdditionalPresenter, GeneratedSpeaker, SpeakerSyncSummary } from "../types/speaker.types";

const ROOT = process.cwd();
const RESPONSE_FILE = path.join(ROOT, "assets", "SLU School of Education SLI Call for Proposals  (Responses).xlsx");
const HEADSHOT_SRC = path.join(ROOT, "assets", "SLI_2026_Headshots_20260529_143840");
const SPEAKER_DIR = path.join(ROOT, "public", "speakers");
const OUTPUT_FILE = path.join(ROOT, "data", "generated", "speakers.json");
const FALLBACK_HEADSHOT = "/speakers/fallback.svg";

type RowValue = string | number | undefined | null;
type SheetRow = Record<string, RowValue>;
type HeadshotEntry = {
  sessionKey: string;
  fileName: string;
  filePath: string;
  normalizedName: string;
};

const HEADER_ALIASES = {
  nameAndTitle: ["name and title", "presenter name and title", "name/title", "name"],
  organization: ["organization/school", "organization", "school", "district/school", "institution"],
  role: ["role", "position", "job title"],
  bio: ["short bio", "bio", "biography"],
  presentationExperience: ["presentation experience", "presenting experience"],
  sessionTitle: ["session title", "presentation title"],
  shortDescription: ["short description", "session short description", "description"],
  extendedDescription: ["extended description", "session extended description", "full description"],
  takeaways: ["key takeaways", "takeaways", "learning outcomes"],
  focusAreas: ["focus area", "focus areas"],
  audience: ["audience", "intended audience"],
  experienceLevel: ["experience level", "level"],
  sessionFormat: ["session format", "format"],
  headshot: ["presenter photo (headshot)", "presenter photo", "headshot", "photo"],
  additionalPresenters: ["first and last names and emails of any additional presenters", "additional presenters"]
} as const;

function normalizeHeader(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .trim()
    .toLowerCase();
}

function normalizeValue(value: RowValue) {
  if (value === undefined || value === null) return "";
  return String(value).replace(/\r\n/g, "\n").trim();
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalizeText(value).split(" ").filter(Boolean);
}

function splitList(value: string) {
  return value
    .split(/\n|;|,(?=\s*[A-Z])|,\s*/)
    .map((item) => item.replace(/^[-*•\d.)\s]+/, "").trim())
    .filter(Boolean);
}

function slugify(value: string, fallback: string) {
  const slug = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  return slug || fallback;
}

function stableId(name: string, sessionTitle: string, index: number) {
  const hash = createHash("sha1").update(`${name}|${sessionTitle}`).digest("hex").slice(0, 8);
  return `${slugify(name, `speaker-${index + 1}`)}-${hash}`;
}

function findValue(row: SheetRow, aliases: readonly string[]) {
  for (const key of Object.keys(row)) {
    const normalized = normalizeHeader(key);
    for (const alias of aliases) {
      const target = normalizeHeader(alias);
      if (
        normalized === target ||
        normalized.includes(target) ||
        target.includes(normalized)
      ) {
        return normalizeValue(row[key]);
      }
    }
  }
  return "";
}

function parseNameAndTitle(value: string, role: string) {
  const normalized = value.trim();
  
  // Strip common title prefixes from the beginning
  const titlePrefixes = [
    "State Representative",
    "Representative",
    "Senator",
    "Dr.",
    "Dr",
    "Prof.",
    "Prof",
    "Ms.",
    "Mr.",
    "Mrs.",
    "Principal",
    "Coach"
  ];
  
  let text = normalized;
  for (const prefix of titlePrefixes) {
    const regex = new RegExp(`^${prefix}\\s*`, "i");
    if (regex.test(text)) {
      text = text.replace(regex, "").trim();
      break;
    }
  }
  
  const segments = text
    .split(/\n|\s+\|\s+|\s+-\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (segments.length > 1) {
    return {
      name: segments[0],
      title: segments.slice(1).join(" - ") || role
    };
  }

  const commaParts = text.split(",").map((part) => part.trim()).filter(Boolean);

  if (commaParts.length > 1 && commaParts[0].split(/\s+/).length >= 2) {
    return {
      name: commaParts[0],
      title: commaParts.slice(1).join(", ") || role
    };
  }

  return {
    name: text,
    title: role
  };
}

function parseAdditionalPresenters(value: string): AdditionalPresenter[] {
  if (!value || /^n\/?a$|^none$/i.test(value.trim())) return [];

  return value
    .replace(/\s+and\s+/gi, "\n")
    .replace(/,\s*(?=[^,\n;]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi, "\n")
    .split(/\n|;/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .slice(0, 2)
    .map((entry) => {
      const email = entry.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
      const name = entry
        .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "")
        .replace(/[(),<>]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      return email ? { name, email } : { name };
    })
    .filter((presenter) => presenter.name || presenter.email);
}

function buildSummary(speakers: GeneratedSpeaker[], missingPhotos: string[]): SpeakerSyncSummary {
  const seen = new Map<string, string[]>();

  speakers.forEach((speaker) => {
    const key = speaker.name.trim().toLowerCase();
    if (!key) return;
    seen.set(key, [...(seen.get(key) ?? []), speaker.id]);
  });

  return {
    totalSpeakers: speakers.length,
    missingPhotos,
    missingBios: speakers.filter((speaker) => !speaker.bio).map((speaker) => speaker.name || speaker.id),
    missingSessionTitles: speakers.filter((speaker) => !speaker.sessionTitle).map((speaker) => speaker.name || speaker.id),
    duplicateEntries: Array.from(seen.entries())
      .filter(([, ids]) => ids.length > 1)
      .map(([name]) => name)
  };
}

function normalizeSessionKey(sessionTitle: string) {
  return normalizeText(sessionTitle).replace(/\s+/g, " ");
}

function normalizeFileName(fileName: string) {
  return normalizeText(fileName.replace(/\.[^.]+$/, ""));
}

function bestMatchIndex(nameTokens: string[], candidates: HeadshotEntry[]) {
  let bestScore = 0;
  let bestIndex = -1;

  for (let index = 0; index < candidates.length; index += 1) {
    const candidate = candidates[index];
    const candidateTokens = tokenize(candidate.normalizedName);
    const score = nameTokens.reduce((score, token) => (candidateTokens.includes(token) ? score + 1 : score), 0);

    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }

  return bestIndex;
}

async function buildHeadshotIndex() {
  const entries: HeadshotEntry[] = [];
  const sessionFolders = await readdir(HEADSHOT_SRC);

  for (const folder of sessionFolders) {
    const sessionPath = path.join(HEADSHOT_SRC, folder);
    if (!(await stat(sessionPath)).isDirectory()) continue;
    const sessionKey = normalizeSessionKey(folder);
    const files = await readdir(sessionPath);

    for (const fileName of files) {
      const filePath = path.join(sessionPath, fileName);
      if ((await stat(filePath)).isFile()) {
        entries.push({
          sessionKey,
          fileName,
          filePath,
          normalizedName: normalizeFileName(fileName)
        });
      }
    }
  }

  return entries;
}

function findHeadshot(entries: HeadshotEntry[], speakerName: string, sessionTitle: string) {
  const nameTokens = tokenize(speakerName);
  const sessionKey = normalizeSessionKey(sessionTitle);

  const folderCandidates = entries.filter((entry) => entry.sessionKey === sessionKey);
  if (folderCandidates.length) {
    const exactIndex = bestMatchIndex(nameTokens, folderCandidates);
    if (exactIndex !== -1 && tokenize(folderCandidates[exactIndex].normalizedName).some((token) => nameTokens.includes(token))) {
      return folderCandidates[exactIndex];
    }
    if (folderCandidates.length === 1) return folderCandidates[0];
  }

  const globalIndex = bestMatchIndex(nameTokens, entries);
  if (globalIndex !== -1 && tokenize(entries[globalIndex].normalizedName).some((token) => nameTokens.includes(token))) {
    return entries[globalIndex];
  }

  return null;
}

async function parseSheetRows() {
  const workbook = XLSX.readFile(RESPONSE_FILE, { cellDates: true });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const raw = XLSX.utils.sheet_to_json<Record<string, RowValue>>(sheet, { defval: "" });
  return raw as SheetRow[];
}

async function copyHeadshot(entry: HeadshotEntry, speakerId: string) {
  const extension = path.extname(entry.fileName).toLowerCase() || ".jpg";
  const destinationName = `${speakerId}${extension}`;
  const destinationPath = path.join(SPEAKER_DIR, destinationName);
  await copyFile(entry.filePath, destinationPath);
  return `/speakers/${destinationName}`;
}

async function main() {
  await mkdir(SPEAKER_DIR, { recursive: true });
  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });

  const rows = await parseSheetRows();
  const headshotEntries = await buildHeadshotIndex();
  const missingPhotos: string[] = [];
  const allSpeakers: GeneratedSpeaker[] = [];

  for (const [index, row] of rows.entries()) {
    const nameAndTitle = findValue(row, HEADER_ALIASES.nameAndTitle);
    const role = findValue(row, HEADER_ALIASES.role);
    const parsedName = parseNameAndTitle(nameAndTitle, role);
    const sessionTitle = findValue(row, HEADER_ALIASES.sessionTitle);
    const id = stableId(parsedName.name, sessionTitle, index);
    const entry = findHeadshot(headshotEntries, parsedName.name, sessionTitle);
    const headshotPath = entry ? await copyHeadshot(entry, id) : FALLBACK_HEADSHOT;

    if (!entry) missingPhotos.push(parsedName.name || id);

    const bio = findValue(row, HEADER_ALIASES.bio);
    allSpeakers.push({
      id,
      name: parsedName.name,
      title: parsedName.title,
      organization: findValue(row, HEADER_ALIASES.organization),
      role,
      ...(bio ? { bio } : {}),
      presentationExperience: findValue(row, HEADER_ALIASES.presentationExperience),
      sessionTitle,
      shortDescription: findValue(row, HEADER_ALIASES.shortDescription),
      extendedDescription: findValue(row, HEADER_ALIASES.extendedDescription),
      takeaways: splitList(findValue(row, HEADER_ALIASES.takeaways)),
      focusAreas: splitList(findValue(row, HEADER_ALIASES.focusAreas)),
      audience: splitList(findValue(row, HEADER_ALIASES.audience)),
      experienceLevel: findValue(row, HEADER_ALIASES.experienceLevel),
      sessionFormat: findValue(row, HEADER_ALIASES.sessionFormat),
      headshot: headshotPath,
      additionalPresenters: parseAdditionalPresenters(findValue(row, HEADER_ALIASES.additionalPresenters))
    });
  }
  // Deduplicate speakers: for same name, prefer entry with specific session title match if multiple exist
  const speakersByName = new Map<string, GeneratedSpeaker[]>();
  allSpeakers.forEach((speaker) => {
    const key = speaker.name.trim().toLowerCase();
    if (!speakersByName.has(key)) speakersByName.set(key, []);
    speakersByName.get(key)!.push(speaker);
  });

  const speakers: GeneratedSpeaker[] = [];
  const seenIds = new Set<string>();

  allSpeakers.forEach((speaker) => {
    if (seenIds.has(speaker.id)) return;
    const key = speaker.name.trim().toLowerCase();
    const duplicates = speakersByName.get(key) ?? [];

    if (duplicates.length > 1) {
      // For duplicates, prefer the one with most complete/relevant session info
      const sorted = duplicates.sort((a, b) => {
        const getScore = (speaker: GeneratedSpeaker) => {
          const sessionTitle = speaker.sessionTitle?.trim() || "";
          const bio = speaker.bio?.trim() || "";
          const hasContent = bio.length > 0 ? 1 : 0;
          const isCurricular = /research|reading|literacy|math|science|language|stem/i.test(sessionTitle) ? 2 : 1;
          const wordCount = sessionTitle.split(/\\s+/).length;
          return (hasContent * 100) + (isCurricular * 50) + wordCount;
        };
        return getScore(b) - getScore(a); // Prefer higher score
      });
      speakers.push(sorted[0]);
      sorted.forEach((s) => seenIds.add(s.id));
    } else {
      speakers.push(speaker);
      seenIds.add(speaker.id);
    }
  });
  const summary = buildSummary(speakers, missingPhotos);
  await writeFile(OUTPUT_FILE, `${JSON.stringify(speakers, null, 2)}\n`);

  console.log("Speaker sync complete");
  console.log(`Total speakers: ${summary.totalSpeakers}`);
  console.log(`Missing photos: ${summary.missingPhotos.length}`);
  console.log(`Missing bios: ${summary.missingBios.length}`);
  console.log(`Missing session titles: ${summary.missingSessionTitles.length}`);
  console.log(`Duplicate entries: ${summary.duplicateEntries.length}`);

  for (const [label, values] of [
    ["missing bio", summary.missingBios],
    ["missing headshot", summary.missingPhotos],
    ["missing session title", summary.missingSessionTitles],
    ["duplicate speaker", summary.duplicateEntries]
  ] as const) {
    values.forEach((value) => console.warn(`Warning: ${label}: ${value}`));
  }

  try {
    await readFile(path.join(SPEAKER_DIR, "fallback.svg"), "utf8");
  } catch {
    console.warn("Warning: public/speakers/fallback.svg is missing.");
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
