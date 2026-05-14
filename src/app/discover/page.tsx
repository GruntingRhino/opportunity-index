import { MapPinned, Search, SlidersHorizontal, Sparkles } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { OpportunityCard } from "@/components/opportunity-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { filters, opportunities } from "@/lib/mock-data";

export default function DiscoverPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Discovery feed"
        title="Search, filter, rank, and compare"
        description="The discovery surface supports powerful filtering, recommendation signals, map/list context, mobile-card ergonomics, and realistic deadline urgency."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <GlassPanel className="h-fit p-5">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/50 px-4 py-3">
            <Search className="size-4 text-muted-foreground" />
            <Input placeholder="Search opportunities" className="h-auto border-none bg-transparent p-0 shadow-none" />
          </div>
          <div className="mt-5 flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-primary" />
            <p className="font-medium">Filters</p>
          </div>
          <ScrollArea className="mt-4 h-[420px] pr-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Badge key={filter} variant="secondary" className="rounded-full px-3 py-2">
                  {filter}
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </GlassPanel>
        <div className="space-y-6">
          <GlassPanel className="grid gap-4 p-5 lg:grid-cols-[1fr_0.65fr]">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="size-4" />
                <span className="text-sm font-medium">AI recommendation panel</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold">High-fit cluster: product, civic tech, and research</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Your recent saves, GPA, GitHub activity, and leadership clubs are pushing nonprofit product fellowships, analyst roles, and public-interest hackathons higher.
              </p>
              <div className="flex flex-wrap gap-2">
                {["94% fit for remote fellowship roles", "Nearby events within 20 miles", "3 deadlines this week"].map((item) => (
                  <Badge key={item} className="rounded-full px-3 py-1.5">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-dashed border-white/10 bg-background/45 p-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinned className="size-4" />
                Map view
              </div>
              <div className="mt-4 grid h-48 place-items-center rounded-[20px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),transparent_45%),linear-gradient(135deg,rgba(99,102,241,0.18),transparent_50%)] text-center text-sm text-muted-foreground">
                Nearby internships, events, and volunteering nodes cluster here in the real product map surface.
              </div>
            </div>
          </GlassPanel>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-2xl">List view</Button>
            <Button variant="outline" className="rounded-2xl">Map view</Button>
            <Button variant="outline" className="rounded-2xl">Swipe mode</Button>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
