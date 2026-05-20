"use client";

import { useState } from "react";
import { GENRES, GENRE_KEYS, type GenreKey } from "@/lib/genres";
import type { Project } from "@/lib/projects";
import GenreMark from "./GenreMark";
import ThumbCard from "./ThumbCard";

type Filter = "all" | GenreKey;

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.genre === filter);

  return (
    <>
      <div className="filters" role="tablist" aria-label="genre filter">
        <button
          className={`filter-btn ${filter === "all" ? "is-active" : ""}`}
          onClick={() => setFilter("all")}
          style={{ "--genre-color": "var(--text)" } as React.CSSProperties}
        >
          All
        </button>
        {GENRE_KEYS.map((k) => {
          const g = GENRES[k];
          return (
            <button
              key={k}
              className={`filter-btn ${filter === k ? "is-active" : ""}`}
              onClick={() => setFilter(k)}
              style={{ "--genre-color": g.color } as React.CSSProperties}
            >
              <GenreMark genre={k} />
              {g.label}
            </button>
          );
        })}
      </div>

      <div className="projects-grid hover-color grid-borderless">
        {shown.map((p) => (
          <ThumbCard key={p.id} project={p} />
        ))}
      </div>

      {shown.length === 0 && (
        <div style={{ color: "var(--sub)", padding: "40px 0", fontSize: 13 }}>
          このジャンルのプロジェクトはまだありません。
        </div>
      )}
    </>
  );
}
