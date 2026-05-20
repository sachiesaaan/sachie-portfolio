"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavKey = "about" | "projects" | "contact";

const navLinks: { key: NavKey; label: string; href: string }[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Projects", href: "/" },
  { key: "contact", label: "Contact", href: "/contact" },
];

function activeKey(pathname: string): NavKey | null {
  if (pathname === "/about") return "about";
  if (pathname === "/contact") return "contact";
  if (pathname === "/" || pathname.startsWith("/projects")) return "projects";
  return null;
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const active = activeKey(pathname);

  return (
    <header className="header">
      <Link href="/" className="brand">
        SACHIE
      </Link>
      <nav>
        {navLinks.map(({ key, label, href }) => {
          const isActive = active === key;
          return (
            <Link
              key={key}
              href={href}
              className={`nav-link ${isActive ? "is-active" : ""}`}
              style={{ color: isActive ? "var(--text)" : "var(--sub)" }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
