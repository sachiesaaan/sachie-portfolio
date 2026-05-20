"use client";

import { useEffect, useState } from "react";
import type { MediaItem, Project } from "@/lib/projects";

function MediaItemView({ item, project }: { item: MediaItem; project: Project }) {
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setVideoFailed(false);
  }, [item]);

  if (item.kind === "youtube") {
    return (
      <iframe
        className="media-el"
        src={`https://www.youtube-nocookie.com/embed/${item.id}?rel=0&modestbranding=1`}
        title={item.title || project.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  if (item.kind === "video" && !videoFailed) {
    return (
      <video
        className="media-el"
        src={item.url}
        poster={item.poster}
        controls
        playsInline
        preload="metadata"
        onError={() => setVideoFailed(true)}
      />
    );
  }
  if (item.kind === "video" && videoFailed && item.poster) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="media-el" src={item.poster} alt={project.title} />;
  }
  if (item.kind === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="media-el" src={item.url} alt={project.title} />;
  }
  return null;
}

export default function MediaCarousel({ project }: { project: Project }) {
  const items = project.media ?? [];
  const n = items.length;
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [project.id]);

  useEffect(() => {
    if (n <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setI((p) => (p - 1 + n) % n);
      if (e.key === "ArrowRight") setI((p) => (p + 1) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  if (n === 0) return null;

  const prev = () => setI((p) => (p - 1 + n) % n);
  const next = () => setI((p) => (p + 1) % n);

  return (
    <div className="carousel">
      <div className="carousel-stage">
        <MediaItemView item={items[i]} project={project} />

        {n > 1 && (
          <>
            <button className="carousel-nav prev" onClick={prev} aria-label="previous">
              ‹
            </button>
            <button className="carousel-nav next" onClick={next} aria-label="next">
              ›
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="carousel-meta">
          <div className="carousel-dots">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === i ? "is-active" : ""}`}
                onClick={() => setI(idx)}
                aria-label={`go to media ${idx + 1}`}
              />
            ))}
          </div>
          <div className="carousel-counter">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </div>
        </div>
      )}
    </div>
  );
}
