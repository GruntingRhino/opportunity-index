import { CalendarClock, Trophy, Zap } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { MetricCard } from "@/components/metric-card";
import { OpportunityCard } from "@/components/opportunity-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { dashboardMetrics, applicationPipeline, leaderboard, notifications, opportunities } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Student dashboard"
        title="One place for recommendations, deadlines, and application momentum"
        description="Saved listings, recent views, nearby opportunities, notifications, progress states, gamification, and application pipeline visibility all live here."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <GlassPanel className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <CalendarClock className="size-4" />
            <p className="text-sm font-medium">Application tracker</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {applicationPipeline.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-background/45 p-4">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-2 font-heading text-3xl font-semibold">{item.count}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {["Draft resume refinement", "Interview prep in progress", "Scholarship essay submitted"].map((item, index) => (
              <div key={item} className="rounded-[24px] border border-dashed border-white/10 p-4">
                <p className="text-sm text-muted-foreground">Timeline event 0{index + 1}</p>
                <p className="mt-3 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <Zap className="size-4" />
            <p className="text-sm font-medium">Reputation and streaks</p>
          </div>
          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Profile completion</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-3 rounded-full" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Application quality score</span>
                <span>86%</span>
              </div>
              <Progress value={86} className="h-3 rounded-full" />
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {leaderboard.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/45 px-4 py-3">
                <div>
                  <p className="font-medium">{entry.name}</p>
                  <p className="text-sm text-muted-foreground">{entry.badge}</p>
                </div>
                <Badge variant="secondary" className="rounded-full">
                  <Trophy className="mr-1 size-3.5" />
                  {entry.xp}
                </Badge>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {opportunities.slice(0, 2).map((opportunity) => (
            <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
          ))}
        </div>
        <GlassPanel className="p-6">
          <h3 className="font-heading text-2xl font-semibold">Notification center</h3>
          <div className="mt-6 space-y-3">
            {notifications.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-background/45 p-4 text-sm leading-6 text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
