import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/glass-panel";
import type { Opportunity } from "@/lib/mock-data";

type OpportunityCardProps = {
  opportunity: Opportunity;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <GlassPanel className="group p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/90 via-sky-400 to-cyan-300 text-lg font-semibold text-primary-foreground">
              {opportunity.organization.slice(0, 1)}
            </span>
            <div>
              <p className="font-medium text-foreground/85">{opportunity.organization}</p>
              <p className="text-sm text-muted-foreground">{opportunity.type}</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold">{opportunity.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {opportunity.summary}
            </p>
          </div>
        </div>
        <Badge className="rounded-full px-3 py-1">{opportunity.matchScore}% match</Badge>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {opportunity.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <MapPin className="size-4" />
          {opportunity.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 className="size-4" />
          {opportunity.deadline}
        </span>
        <span className="inline-flex items-center gap-2">
          <Sparkles className="size-4" />
          {opportunity.compensation}
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Acceptance estimate {opportunity.acceptanceRate}
        </p>
        <Button asChild className="rounded-2xl">
          <Link href={`/opportunities/${opportunity.slug}`}>
            View details
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </GlassPanel>
  );
}
