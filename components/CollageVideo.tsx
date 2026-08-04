"use client";

import { useEffect, useRef } from "react";

type CollageVideoProps = {
  src: string;
  className?: string;
};

export default function CollageVideo({ src, className }: CollageVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      video.play().catch(() => {
        // Autoplay can be blocked by the browser; the poster frame stays visible.
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      width={1080}
      height={1920}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
