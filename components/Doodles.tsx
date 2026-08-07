"use client";

import { useEffect, useRef, useState } from "react";

export type DoodleProps = {
  className?: string;
};

function useDrawOnScroll() {
  const ref = useRef<SVGSVGElement>(null);
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

  return { ref, drawClassName: `draw-on-scroll${drawn ? " is-drawn" : ""}` };
}

export function Sparkle({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M12 2 L14 9 L21 11 L14 13 L12 21 L10 13 L3 11 L10 9 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Squiggle({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 280 20"
      className={`${drawClassName} ${className ?? ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 10 Q 40 2, 80 10 T 160 10 T 278 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M2 15 Q 40 7, 80 15 T 160 15 T 278 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Arrow({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      className={`${drawClassName} ${className ?? ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M8 88 C 22 92, 34 58, 52 46 C 64 38, 70 30, 78 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M66 15 L80 17 L74 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Circle({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 200 100"
      className={`${drawClassName} ${className ?? ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M100 8 C 150 5, 192 24, 189 50 C 186 78, 142 95, 96 92 C 46 90, 9 73, 11 48 C 13 21, 56 6, 100 8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Book({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 40 40"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M4 8 C 10 6, 15 6.5, 19 9 L19 32 C 15 29.5, 10 29, 4 31 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M36 8 C 30 6, 25 6.5, 21 9 L21 32 C 25 29.5, 30 29, 36 31 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M8 13 L15 14.5 M8 18 L15 19.5 M8 23 L14 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Lines({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 40 24"
      className={`${drawClassName} ${className ?? ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 4 Q 14 1.5, 24 4.5 T 36 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M2 12 Q 13 9.5, 23 12.5 T 33 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M4 20 Q 12 17.5, 19 20.5 T 29 18.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Lightbulb({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M16 4 C 10.5 4, 7 8, 7 13 C 7 16.5, 8.8 18.5, 11 20.5 C 12.2 21.6, 12.5 22.5, 12.5 24 L19.5 24 C 19.5 22.5, 19.8 21.6, 21 20.5 C 23.2 18.5, 25 16.5, 25 13 C 25 8, 21.5 4, 16 4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M12.5 27 L19.5 27 M13.5 30 L18.5 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M16 1.5 L16 -0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform="translate(0, 2)"
        pathLength={1}
      />
    </svg>
  );
}

export function Search({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M14 4 C 19.5 4, 24 8.5, 24 14 C 24 19.5, 19.5 24, 14 24 C 8.5 24, 4 19.5, 4 14 C 4 8.5, 8.5 4, 14 4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M21 21 L28.5 28.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Chat({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 8 C 5 6, 6.5 5, 8.5 5 L23.5 5 C 25.5 5, 27 6, 27 8 L27 18 C 27 20, 25.5 21, 23.5 21 L14 21 L8 26 L9 21 L8.5 21 C 6.5 21, 5 20, 5 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M10.5 11 L21.5 11 M10.5 15.5 L18 15.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Thought({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M9 14 C9 10.5, 12 8, 15.5 8 C16.5 6, 18.5 5, 20.5 6 C23 5.5, 25.5 7.5, 25 10.5 C27.5 11, 28 14.5, 25.5 16 C26 19, 22.5 21, 20 19.5 C18 21.5, 14 21, 13 18.5 C9.5 18.5, 7.5 15, 9 14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <circle
        cx="8"
        cy="23"
        r="1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength={1}
      />
      <circle
        cx="5.3"
        cy="26.5"
        r="0.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        pathLength={1}
      />
    </svg>
  );
}

export function Person({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M16 16 C 19.5 16, 22 13.3, 22 9.5 C 22 6.5, 19.5 4, 16 4 C 12.5 4, 10 6.5, 10 9.5 C 10 13.3, 12.5 16, 16 16 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M5 28 C 5 21.5, 9.8 18, 16 18 C 22.2 18, 27 21.5, 27 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Badge({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M16 3 C 20 5.5, 23.5 6, 27 5.5 L27 16 C 27 23, 21.5 27, 16 29.5 C 10.5 27, 5 23, 5 16 L5 5.5 C 8.5 6, 12 5.5, 16 3 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M11.5 16 L14.5 19 L20.5 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Heart({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M16 27 C 16 27, 4 19.5, 4 11.5 C 4 7, 7.3 4.5, 10.8 4.5 C 13.2 4.5, 15 5.8, 16 7.8 C 17 5.8, 18.8 4.5, 21.2 4.5 C 24.7 4.5, 28 7, 28 11.5 C 28 19.5, 16 27, 16 27 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Loop({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 64 64"
      className={`${drawClassName} ${className ?? ""}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M12 28 A 22 22 0 0 1 48 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M42 10 L51 15 L45 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M52 36 A 22 22 0 0 1 16 47"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M22 54 L13 49 L19 41"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Smiley({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M16 4 C 21.5 4, 26.5 9, 26.5 15.5 C 26.5 21.5, 21.5 27, 16 27 C 10.5 27, 5.5 21.5, 5.5 15.5 C 5.5 9, 10.5 4, 16 4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <circle cx="11.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
      <path
        d="M10.5 19 C 13 22, 19 22, 21.5 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Fish({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 20"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M4 10 C 7 4, 17 3.5, 23 10 C 17 16.5, 7 16, 4 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M23 10 L29.5 5 L28 10 L29.5 15 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <circle cx="9.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CoffeeCup({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M7 12 L23 12 L21.5 25.5 C 21.3 27, 20 28, 18.5 28 L11.5 28 C 10 28, 8.7 27, 8.5 25.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M23 14.5 C 27 14, 29.5 17, 28 20 C 27 22.3, 24.5 23, 22.7 22.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M12 3.5 C 12 5.5, 14 5.5, 14 7.5 M17.5 3.5 C 17.5 5.5, 19.5 5.5, 19.5 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function HandCircle({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 220 220"
      preserveAspectRatio="none"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M112 6 C 155 4, 202 30, 213 78 C 222 118, 210 162, 176 190 C 140 219, 84 218, 46 190 C 12 165, 2 118, 12 76 C 22 32, 69 8, 112 6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function Flower({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  const petal = "M16 16 C 13 14, 12 9, 16 5 C 20 9, 19 14, 16 16 Z";
  return (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d={petal}
        transform="rotate(0 16 16)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d={petal}
        transform="rotate(72 16 16)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d={petal}
        transform="rotate(144 16 16)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d={petal}
        transform="rotate(216 16 16)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d={petal}
        transform="rotate(288 16 16)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        pathLength={1}
      />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MusicNote({ className }: DoodleProps) {
  const { ref, drawClassName } = useDrawOnScroll();
  return (
    <svg
      ref={ref}
      viewBox="0 0 24 32"
      className={`${drawClassName} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M8.5 24 C 8.5 21.7, 10.7 19.8, 13.3 19.8 C 15.9 19.8, 18 21.5, 18 23.6 C 18 25.9, 15.8 27.8, 13.2 27.8 C 10.6 27.8, 8.5 26.1, 8.5 24 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M17.7 24 L17.7 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M17.7 4.5 C 20.5 5.5, 22 8, 21 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}
