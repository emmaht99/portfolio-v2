"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function getFocusable(): HTMLElement[] {
      const toggle = toggleRef.current;
      const panel = panelRef.current;
      if (!toggle) return [];
      const panelLinks = panel
        ? Array.from(panel.querySelectorAll<HTMLElement>("a[href]"))
        : [];
      return [toggle, ...panelLinks];
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const workActive = isActive(pathname, "/work");
  const linkClasses = (active: boolean) =>
    `hidden min-h-11 items-center justify-center px-3 font-sans text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex ${
      active ? "text-accent" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-canvas">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 md:justify-center">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-2 md:gap-10">
            <li>
              <Link
                href="/work"
                aria-current={workActive ? "page" : undefined}
                className={linkClasses(workActive)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Emma H. Tandle — Home"
                className="inline-flex min-h-11 items-center font-display text-lg text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-h3"
              >
                Emma H. Tandle
              </Link>
            </li>
            {navLinks
              .filter((link) => link.href !== "/work")
              .map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={linkClasses(active)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          ref={panelRef}
          className="md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-11 w-full items-center px-4 font-sans text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
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
      )}
    </header>
  );
}
