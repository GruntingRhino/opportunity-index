import { notFound } from "next/navigation";
import { Clock3, Download, Flag, MessageSquareMore, Share2 } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { opportunities } from "@/lib/mock-data";

type OpportunityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpportunityDetailPage({
  params,
}: OpportunityDetailPageProps) {
  const { slug } = await params;
  const opportunity = opportunities.find((item) => item.slug === slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <GlassPanel className="p-8">
            <Badge className="rounded-full">{opportunity.type}</Badge>
            <SectionHeading
              className="mt-4"
              title={opportunity.title}
              description={`${opportunity.organization} • ${opportunity.location} • ${opportunity.compensation}`}
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {opportunity.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">{opportunity.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-lg font-semibold">Responsibilities</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {opportunity.responsibilities.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">Qualifications</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {opportunity.qualifications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8">
            <h3 className="font-heading text-2xl font-semibold">Application flow</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Upload resume", "Answer custom questions", "Track status updates"].map((item, index) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-background/45 p-5">
                  <p className="text-sm text-muted-foreground">Step 0{index + 1}</p>
                  <p className="mt-3 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {opportunity.questions.map((question) => (
                <div key={question}>
                  <p className="mb-2 text-sm font-medium">{question}</p>
                  <Textarea className="min-h-24 rounded-2xl" placeholder="Draft an answer..." />
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
        <div className="space-y-6">
          <GlassPanel className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Deadline</p>
                <p className="mt-2 inline-flex items-center gap-2 font-medium">
                  <Clock3 className="size-4 text-primary" />
                  {opportunity.deadline}
                </p>
              </div>
              <Badge className="rounded-full">{opportunity.matchScore}% match</Badge>
            </div>
            <div className="mt-6 grid gap-3">
              <Button className="rounded-2xl">Apply now</Button>
              <Button variant="outline" className="rounded-2xl">Save opportunity</Button>
              <Button variant="outline" className="rounded-2xl">
                <Share2 className="size-4" />
                Share
              </Button>
              <Button variant="outline" className="rounded-2xl">
                <MessageSquareMore className="size-4" />
                Contact organization
              </Button>
              <Button variant="ghost" className="rounded-2xl justify-start">
                <Download className="size-4" />
                Download attachments
              </Button>
              <Button variant="ghost" className="rounded-2xl justify-start text-destructive">
                <Flag className="size-4" />
                Report listing
              </Button>
            </div>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="font-heading text-lg font-semibold">Required skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {opportunity.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>Time commitment: {opportunity.commitment}</p>
              <p>Estimated acceptance rate: {opportunity.acceptanceRate}</p>
              <p>Verification badge: organization identity verified</p>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
