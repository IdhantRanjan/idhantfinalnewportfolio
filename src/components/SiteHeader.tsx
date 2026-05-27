"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/work", label: "Work" },
  { href: "/recognition", label: "Recognition" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/extra", label: "Extra" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <p className="site-title">
        <Link href="/">/i</Link>
      </p>
      <nav className="nav" aria-label="Primary">
        {navItems.map((item, i) => (
          <Fragment key={item.href}>
            {i === 3 && (
              <span className="nav-sep" aria-hidden="true">
                |
              </span>
            )}
            <Link
              href={item.href}
              className={isActive(item.href) ? "nav-active" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {isActive(item.href) && (
                <span className="nav-active-indicator" aria-hidden="true">
                  &gt;{" "}
                </span>
              )}
              {item.label}
            </Link>
          </Fragment>
        ))}
      </nav>
    </header>
  );
}
