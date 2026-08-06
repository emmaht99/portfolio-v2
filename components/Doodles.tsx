type DoodleProps = {
  className?: string;
};

export function Sparkle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2 L14 9 L21 11 L14 13 L12 21 L10 13 L3 11 L10 9 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SquiggleProps = DoodleProps & {
  variant?: 1 | 2 | 3;
};

const squigglePaths: Record<1 | 2 | 3, [string, string]> = {
  1: [
    "M2 10 Q 40 2, 80 10 T 160 10 T 278 8",
    "M2 15 Q 40 7, 80 15 T 160 15 T 278 13",
  ],
  2: [
    "M2 12 Q 28 3, 58 12 Q 92 21, 128 10 Q 160 1, 196 11 Q 232 20, 278 9",
    "M2 17 Q 28 8, 58 17 Q 92 26, 128 15 Q 160 6, 196 16 Q 232 25, 278 14",
  ],
  3: [
    "M2 8 Q 45 18, 90 7 Q 130 -2, 170 9 Q 205 18, 240 8 Q 258 3, 278 11",
    "M2 13 Q 45 23, 90 12 Q 130 3, 170 14 Q 205 23, 240 13 Q 258 8, 278 16",
  ],
};

export function Squiggle({ className, variant = 1 }: SquiggleProps) {
  const [top, bottom] = squigglePaths[variant];
  return (
    <svg
      viewBox="0 0 280 20"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={top}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d={bottom}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M8 88 C 22 92, 34 58, 52 46 C 64 38, 70 30, 78 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M66 15 L80 17 L74 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Circle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M100 8 C 150 5, 192 24, 189 50 C 186 78, 142 95, 96 92 C 46 90, 9 73, 11 48 C 13 21, 56 6, 100 8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Book({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M4 8 C 10 6, 15 6.5, 19 9 L19 32 C 15 29.5, 10 29, 4 31 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M36 8 C 30 6, 25 6.5, 21 9 L21 32 C 25 29.5, 30 29, 36 31 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 13 L15 14.5 M8 18 L15 19.5 M8 23 L14 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Lightbulb({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 4 C 10.5 4, 7 8, 7 13 C 7 16.5, 8.8 18.5, 11 20.5 C 12.2 21.6, 12.5 22.5, 12.5 24 L19.5 24 C 19.5 22.5, 19.8 21.6, 21 20.5 C 23.2 18.5, 25 16.5, 25 13 C 25 8, 21.5 4, 16 4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 27 L19.5 27 M13.5 30 L18.5 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 1.5 L16 -0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform="translate(0, 2)"
      />
    </svg>
  );
}

export function Loop({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M12 28 A 22 22 0 0 1 48 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M42 10 L51 15 L45 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 36 A 22 22 0 0 1 16 47"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 54 L13 49 L19 41"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
