import { CopyPlus, Files, TrendingUp, Users2 } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { organizationMetrics } from "@/lib/mock-data";

const applicants = [
  ["Ava Chen", "94%", "Shortlisted", "Product + civic tech"],
  ["Marcus Lewis", "89%", "Interview", "Research + data"],
  ["Elena Torres", "85%", "Under review", "Design + community"],
];

export default function OrganizationsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Organization dashboard"
        title="Post opportunities and run a clean applicant pipeline"
        description="Profiles, analytics, opportunity creation, applicant review, conversion metrics, messaging, and export flows are all modeled for a modern recruiting workflow."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {organizationMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <GlassPanel className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <Files className="size-4" />
            <p className="text-sm font-medium">Opportunity creation</p>
          </div>
          <div className="mt-6 grid gap-4">
            <Input placeholder="Opportunity title" className="h-12 rounded-2xl" />
            <Input placeholder="Location / work mode" className="h-12 rounded-2xl" />
            <Input placeholder="Compensation" className="h-12 rounded-2xl" />
            <div className="rounded-[24px] border border-dashed border-white/10 p-5 text-sm text-muted-foreground">
              Rich text editor, skill tags, media uploads, visibility, scheduling, and draft persistence slot into this editor surface.
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl">Publish draft</Button>
              <Button variant="outline" className="rounded-2xl">
                <CopyPlus className="size-4" />
                Duplicate
              </Button>
            </div>
          </div>
        </GlassPanel>
        <GlassPanel className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <Users2 className="size-4" />
            <p className="text-sm font-medium">Applicant management</p>
          </div>
          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Skill match</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Signals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant[0]}>
                  <TableCell className="font-medium">{applicant[0]}</TableCell>
                  <TableCell>{applicant[1]}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-full">
                      {applicant[2]}
                    </Badge>
                  </TableCell>
                  <TableCell>{applicant[3]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Profile views", "18.4k"],
              ["Conversion rate", "11.2%"],
              ["Boost ROI", "+26%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-white/10 bg-background/45 p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-2 font-heading text-3xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="size-4 text-primary" />
            Boost, archive, export, and direct-message actions attach to individual opportunity records in the real workflow.
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
