import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GlassPanel } from "@/components/glass-panel";

type MetricCardProps = {
  label: string;
  value: string;
  change: string;
  detail: string;
};

export function MetricCard({ label, value, change, detail }: MetricCardProps) {
  return (
    <GlassPanel className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-heading text-3xl font-semibold">{value}</p>
        </div>
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          <ArrowUpRight className="mr-1 size-3.5" />
          {change}
        </Badge>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{detail}</p>
    </GlassPanel>
  );
}
