export type AdditionalPresenter = {
  name: string;
  email?: string;
};

export type GeneratedSpeaker = {
  id: string;
  name: string;
  title: string;
  organization: string;
  role: string;
  bio?: string;
  presentationExperience: string;
  sessionTitle: string;
  shortDescription: string;
  extendedDescription: string;
  takeaways: string[];
  focusAreas: string[];
  audience: string[];
  experienceLevel: string;
  sessionFormat: string;
  headshot: string;
  additionalPresenters: AdditionalPresenter[];
};

export type SpeakerSyncSummary = {
  totalSpeakers: number;
  missingPhotos: string[];
  missingBios: string[];
  missingSessionTitles: string[];
  duplicateEntries: string[];
};
