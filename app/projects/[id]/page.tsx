import Link from "next/link";
import { notFound } from "next/navigation";
import GenreLabel from "@/components/GenreLabel";
import MediaCarousel from "@/components/MediaCarousel";
import { PROJECTS, getProject } from "@/lib/projects";

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Not found — SACHIE" };
  return {
    title: `${project.title} — SACHIE`,
    description: project.about,
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div className="detail" data-screen-label={`project-${project.id}`}>
      <Link className="back-link" href="/">
        ← Back to Projects
      </Link>

      <MediaCarousel project={project} />

      <dl className="detail-meta">
        <dt>Title</dt>
        <dd style={{ fontSize: 20, letterSpacing: "0.01em" }}>{project.title}</dd>

        <dt>Date</dt>
        <dd>{project.date}</dd>

        <dt>Genre</dt>
        <dd>
          <GenreLabel genre={project.genre} />
        </dd>

        <dt>Tools</dt>
        <dd>
          {project.software.map((s, i) => (
            <span key={s}>
              {s}
              {i < project.software.length - 1 ? " / " : ""}
            </span>
          ))}
        </dd>

        <dt>About</dt>
        <dd className="abouttxt">{project.about}</dd>
      </dl>

      <div style={{ marginTop: 56, color: "var(--sub)", fontSize: 13 }}>
        <Link className="back-link" href="/" style={{ margin: 0 }}>
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
