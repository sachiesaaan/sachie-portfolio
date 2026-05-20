export type GenreKey = "music" | "dj" | "vj" | "movie" | "design";

export type Genre = {
  label: string;
  color: string;
  shape: "circle";
};

export const GENRES: Record<GenreKey, Genre> = {
  music: { label: "Music", color: "#FA6800", shape: "circle" },
  dj: { label: "DJ", color: "#36AF31", shape: "circle" },
  vj: { label: "VJ", color: "#30F141", shape: "circle" },
  movie: { label: "Movie", color: "#3C97E7", shape: "circle" },
  design: { label: "Design", color: "#FBBF24", shape: "circle" },
};

export const GENRE_KEYS: GenreKey[] = ["music", "dj", "vj", "movie", "design"];
