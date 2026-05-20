"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { EventSpeaker } from "@/types/event-2026";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function buildFilters(speakers: EventSpeaker[]) {
  const counts = new Map<string, number>();
  speakers.forEach((speaker) => {
    speaker.focusAreas.forEach((area) => counts.set(area, (counts.get(area) ?? 0) + 1));
  });

  return ["All", ...Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([area]) => area)];
}

export function SpeakerShowcase({ speakers }: { speakers: EventSpeaker[] }) {
  const [selected, setSelected] = useState<EventSpeaker | null>(null);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(() => speakers.slice(0, 3), [speakers]);
  const filters = useMemo(() => buildFilters(speakers), [speakers]);

  const filteredSpeakers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return speakers.filter((speaker) => {
      const matchesFilter = activeFilter === "All" || speaker.focusAreas.includes(activeFilter);
      const haystack = [
        speaker.name,
        speaker.role,
        speaker.organization,
        speaker.sessionTitle,
        speaker.sessionDescription,
        ...speaker.focusAreas,
        ...speaker.audience
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeFilter, query, speakers]);

  const visibleRoster = showAll ? filteredSpeakers : filteredSpeakers.slice(0, 12);

  useEffect(() => {
    setShowAll(false);
  }, [activeFilter, query]);

  useEffect(() => {
    if (!selected) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3" aria-label="Featured speaker cards">
        {featured.map((speaker) => (
          <motion.button
            key={speaker.id}
            type="button"
            className="group rounded-xl border bg-card p-7 text-left shadow-card transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            whileHover={{ y: -4 }}
            onClick={() => setSelected(speaker)}
          >
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-heading text-xl font-bold">{initials(speaker.name)}</span>
              </div>
              <div className="min-w-0">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {speaker.role || "Presenter"}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-card-foreground">{speaker.name}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">{speaker.organization}</p>
              </div>
            </div>
            <div className="my-7 h-px bg-border" />
            <p className="font-heading text-lg font-bold text-card-foreground">{speaker.sessionTitle}</p>
            <p className="mt-3 line-clamp-3 font-body text-base leading-7 text-muted-foreground">
              {speaker.sessionDescription || speaker.bio}
            </p>
          </motion.button>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border bg-card p-5 shadow-card md:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <p className="font-label text-eyebrow font-semibold uppercase text-primary">Complete roster</p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-card-foreground">
              All {speakers.length} presenters, designed for scanning.
            </h3>
            <p className="mt-3 max-w-2xl font-body text-base leading-7 text-muted-foreground">
              Filter by focus area or search by name, organization, audience, or session topic. Select any speaker for details.
            </p>
          </div>
          <label className="relative block">
            <span className="sr-only">Search speakers</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search speakers or topics"
              className="h-12 w-full rounded-full border bg-background pl-11 pr-4 font-body text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </label>
        </div>

        <div className="mt-7 flex gap-2 overflow-x-auto pb-1" aria-label="Speaker focus filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`shrink-0 rounded-full border px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                activeFilter === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3" aria-label="All speaker roster">
          {visibleRoster.map((speaker) => (
            <button
              key={speaker.id}
              type="button"
              className="rounded-lg border bg-background p-4 text-left transition hover:-translate-y-0.5 hover:border-primary hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setSelected(speaker)}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="font-heading text-sm font-bold">{initials(speaker.name)}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="truncate font-heading text-base font-bold text-foreground">{speaker.name}</h4>
                  <p className="mt-1 truncate font-body text-sm text-muted-foreground">{speaker.organization || speaker.role}</p>
                </div>
              </div>
              <p className="mt-4 line-clamp-2 font-heading text-sm font-semibold leading-6 text-foreground">
                {speaker.sessionTitle || "Session details coming soon"}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-7 flex flex-col items-start gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-muted-foreground">
            Showing {visibleRoster.length} of {filteredSpeakers.length} matching presenters.
          </p>
          {filteredSpeakers.length > 12 ? (
            <button
              type="button"
              className="rounded-full border px-5 py-3 font-label text-xs font-semibold uppercase tracking-[0.14em] text-primary transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show fewer" : `View all ${filteredSpeakers.length}`}
            </button>
          ) : null}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-slu-grand/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="speaker-dialog-title"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-background p-6 shadow-glass md:p-9"
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-label text-eyebrow font-semibold uppercase text-primary">{selected.role || "Presenter"}</p>
                  <h2 id="speaker-dialog-title" className="mt-3 font-heading text-4xl font-bold text-foreground">
                    {selected.name}
                  </h2>
                  <p className="mt-2 font-heading text-lg font-semibold text-muted-foreground">{selected.organization}</p>
                </div>
                <button
                  type="button"
                  className="rounded-full border p-3 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Close speaker details"
                  onClick={() => setSelected(null)}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-lg bg-muted p-6">
                  <h3 className="font-heading text-2xl font-bold">Expertise</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[...selected.focusAreas, ...selected.audience].slice(0, 8).map((tag) => (
                      <span key={tag} className="rounded-full bg-primary px-3 py-1 font-label text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {selected.takeaways.length ? (
                    <>
                      <h3 className="mt-8 font-heading text-2xl font-bold">Takeaways</h3>
                      <ul className="mt-4 grid gap-3 font-body text-base leading-7 text-muted-foreground">
                        {selected.takeaways.slice(0, 5).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
                <div>
                  <p className="font-label text-eyebrow font-semibold uppercase text-primary">Session Topic</p>
                  <h3 className="mt-3 font-heading text-3xl font-bold">{selected.sessionTitle}</h3>
                  <p className="mt-5 font-body text-lg leading-8 text-muted-foreground">
                    {selected.sessionDescription || selected.bio}
                  </p>
                  <div className="mt-8 rounded-lg border p-5">
                    <p className="font-label text-eyebrow font-semibold uppercase text-primary">Speaker Mission</p>
                    <p className="mt-3 font-body text-base leading-7 text-muted-foreground">{selected.mission || selected.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
