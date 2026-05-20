import Link from "next/link";

export default function NotFound() {
  return (
    <div data-screen-label="not-found">
      <div className="page-title">404 — Not Found</div>
      <p style={{ color: "var(--sub)" }}>
        お探しのページは見つかりませんでした。
      </p>
      <p>
        <Link href="/" className="glink" style={{ color: "var(--music)" }}>
          ← Back to Projects
        </Link>
      </p>
    </div>
  );
}
