import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-primary to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-primary/25">
        OI
        <span className="absolute inset-0 rounded-2xl border border-white/20" />
      </span>
      <span className="flex flex-col">
        <span className="font-heading text-sm font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          Launchboard
        </span>
        <span className="text-sm text-foreground/80">Where ambitious people find momentum</span>
      </span>
    </Link>
  );
}
