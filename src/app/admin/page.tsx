import { Ban, ShieldCheck, TriangleAlert } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { adminMetrics } from "@/lib/mock-data";

const moderationQueue = [
  ["Flagged scholarship listing", "High", "Review copy and payout claims"],
  ["Organization verification request", "Medium", "Check nonprofit EIN and domain"],
  ["User report for spam outreach", "Medium", "Validate messaging abuse"],
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Admin"
        title="Trust, moderation, verification, and system-level visibility"
        description="Enterprise-grade admin surfaces control bans, approvals, analytics, reports, and platform health."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {adminMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassPanel className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck className="size-4" />
            <p className="text-sm font-medium">Moderation queue</p>
          </div>
          <div className="mt-6 space-y-4">
            {moderationQueue.map((item) => (
              <div key={item[0]} className="flex items-start justify-between gap-4 rounded-[24px] border border-white/10 bg-background/45 p-4">
                <div>
                  <p className="font-medium">{item[0]}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item[2]}</p>
                </div>
                <Badge className="rounded-full">{item[1]}</Badge>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-6">
          <div className="space-y-4">
            <div className="rounded-[24px] border border-white/10 bg-background/45 p-4">
              <div className="flex items-center gap-2">
                <TriangleAlert className="size-4 text-primary" />
                <p className="font-medium">Flag review workflow</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Admins can approve, reject, suspend, request edits, or escalate listings and accounts based on policy and trust rules.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-background/45 p-4">
              <div className="flex items-center gap-2">
                <Ban className="size-4 text-primary" />
                <p className="font-medium">Ban and suspension controls</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Soft-delete, temporary suspension, messaging lock, and organization-level restrictions are modeled as explicit moderation actions.
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
