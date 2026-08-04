"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-canvas">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          aria-label="Emma H. Tandle — Home"
          className="inline-flex min-h-11 items-center font-display text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Emma H. Tandle
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 min-w-11 items-center justify-center px-3 font-sans text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
