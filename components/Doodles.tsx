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

export function Squiggle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 280 20"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 10 Q 40 2, 80 10 T 160 10 T 278 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M2 15 Q 40 7, 80 15 T 160 15 T 278 13"
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
