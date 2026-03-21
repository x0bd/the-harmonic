export interface Track {
  title: string;
  duration: string;
}

export interface Release {
  id: string;
  slug: string;
  artist: string;
  title: string;
  label: string;
  year: string;
  genre: string;
  cover: string;
  url: string;
  tracks?: Track[];
}
