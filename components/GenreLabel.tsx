import { GENRES, type GenreKey } from "@/lib/genres";
import GenreMark from "./GenreMark";

type Props = {
  genre: GenreKey;
  large?: boolean;
};

export default function GenreLabel({ genre, large }: Props) {
  const g = GENRES[genre];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", color: g.color }}>
      <GenreMark genre={genre} large={large} />
      {g.label}
    </span>
  );
}
