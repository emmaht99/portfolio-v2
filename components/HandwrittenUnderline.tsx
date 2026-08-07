import type { CSSProperties, ReactNode } from "react";

type HandwrittenUnderlineProps = {
  children: ReactNode;
};

// A gently uneven, mostly-straight stroke, tiled behind the text as a
// background rather than a text-decoration, so it wraps correctly across
// multiple lines instead of only underlining the last line of a span.
const strokeTile =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='8'%3E%3Cpath d='M0 4.5 Q 22 3, 45 4.5 T 90 4' stroke='%23c11374' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E";

const underlineStyle: CSSProperties = {
  backgroundImage: `url("${strokeTile}")`,
  backgroundPosition: "0 100%",
  backgroundSize: "90px 8px",
  backgroundRepeat: "repeat-x",
};

export default function HandwrittenUnderline({
  children,
}: HandwrittenUnderlineProps) {
  return (
    <span className="bg-no-repeat pb-[2px]" style={underlineStyle}>
      {children}
    </span>
  );
}
