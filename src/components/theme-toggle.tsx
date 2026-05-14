"use client";

import { MoonStar, Sparkles, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="surface-glass mesh-border rounded-2xl border-white/10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color mode"
    >
      {isDark ? (
        <SunMedium className="size-4" />
      ) : (
        <MoonStar className="size-4" />
      )}
      <Sparkles className="absolute -right-1 -top-1 size-3 text-primary" />
    </Button>
  );
}
