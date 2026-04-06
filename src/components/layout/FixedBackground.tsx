"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed background layer for the entire page.
 * This div stays pinned behind all scrolling content.
 * Swap the inner markup for any image, gradient, or animated effect you like.
 */
export default function FixedBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      {/* Base background color */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle radial glow – primary accent, top-right */}
      <div className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-primary/[.07] blur-[140px]" />

      {/* Secondary glow – bottom-left */}
      <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary-light/6 blur-[120px]" />

      {/* Base dot grid – always visible at low opacity */}
      <div className="fixed-bg-dot-grid absolute inset-0 opacity-[.04] dark:opacity-[.06]" />

      {/* Mouse spotlight – primary-colored dots revealed near cursor */}
      <div
        ref={spotlightRef}
        className="fixed-bg-spotlight absolute inset-0 opacity-50 dark:opacity-60"
      />
    </div>
  );
}
