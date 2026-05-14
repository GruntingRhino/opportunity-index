import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "surface-glass mesh-border rounded-[28px] border border-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
