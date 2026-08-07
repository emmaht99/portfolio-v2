"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

type StickerProps = {
  children: ReactNode;
  className?: string;
};

export default function Sticker({ children, className }: StickerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 });

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Ignore browsers/environments that reject capture for this pointer.
    }
    drag.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    setDragging(true);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setPosition({
      x: drag.current.originX + (event.clientX - drag.current.startX),
      y: drag.current.originY + (event.clientY - drag.current.startY),
    });
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Ignore if capture was never established.
    }
    setDragging(false);
  }

  return (
    <div
      className={`${className ?? ""} ${dragging ? "z-30 cursor-grabbing" : "z-0 cursor-grab"} touch-none select-none`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${dragging ? 1.05 : 1})`,
        filter: dragging
          ? "drop-shadow(0 12px 20px rgb(22 35 58 / 0.25))"
          : "none",
        transition: dragging
          ? "none"
          : "transform 0.25s ease-out, filter 0.25s ease-out",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {children}
    </div>
  );
}
