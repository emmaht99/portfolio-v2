"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScribbleProps = {
  children: ReactNode;
  className?: string;
};

export default function Scribble({ children, className }: ScribbleProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} className={className}>
      <span className={`scribble-in ${drawn ? "is-drawn" : ""}`}>
        {children}
      </span>
    </p>
  );
}
