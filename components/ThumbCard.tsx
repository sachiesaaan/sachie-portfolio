import Link from "next/link";
import { GENRES } from "@/lib/genres";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ThumbCard({ project }: Props) {
  const g = GENRES[project.genre];
  const styleVars = { "--genre-color": g.color } as React.CSSProperties;

  return (
    <div className="thumb-cell" style={styleVars}>
      <Link href={`/projects/${project.id}`} className="thumb" prefetch={false}>
        <div
          className="thumb-bg"
          style={{
            position: "absolute",
            inset: 0,
            background: "#fff",
            backgroundImage: project.thumb ? `url(${project.thumb})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="thumb-inner">
          {!project.thumb && <div className="thumb-title">{project.title}</div>}
        </div>

        <div className="thumb-overlay">
          <div className="ov-title">{project.title}</div>
          <div className="ov-meta">
            <span>{project.date}</span>
            <span>{g.label}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
