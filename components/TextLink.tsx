import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export default function TextLink({
  href,
  external = false,
  className,
  children,
}: TextLinkProps) {
  const classes = `text-accent underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
