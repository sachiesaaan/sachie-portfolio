import { GENRES, type GenreKey } from "@/lib/genres";

type Props = {
  genre: GenreKey;
  large?: boolean;
};

export default function GenreMark({ genre, large }: Props) {
  const g = GENRES[genre];
  if (!g) return null;
  const cls = `gm ${large ? "gm-lg " : ""}${g.shape}`;
  const style: React.CSSProperties = { background: g.color };
  return <span className={cls} style={style} aria-label={g.label} />;
}
