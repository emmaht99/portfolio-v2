import type { ReactNode } from "react";

type HandwrittenUnderlineProps = {
  children: ReactNode;
};

export default function HandwrittenUnderline({
  children,
}: HandwrittenUnderlineProps) {
  return (
    <span className="underline decoration-highlight decoration-wavy decoration-2 underline-offset-4">
      {children}
    </span>
  );
}
