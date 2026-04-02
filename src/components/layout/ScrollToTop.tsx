"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import { Button } from "@/components/ui";

const SCROLL_THRESHOLD_PX = 300;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="glass-card border-stroke shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2"
    >
      <ChevronUp className="size-5" aria-hidden />
    </Button>
  );
}
