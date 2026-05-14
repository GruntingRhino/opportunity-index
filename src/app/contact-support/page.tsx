import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSupportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading eyebrow="Support" title="Contact the team" description="Escalate verification issues, reporting concerns, application bugs, or organization moderation questions." />
        <div className="mt-8 grid gap-4">
          <Input placeholder="Subject" className="h-12 rounded-2xl" />
          <Textarea placeholder="Describe the issue" className="min-h-32 rounded-2xl" />
          <Button className="rounded-2xl">Submit ticket</Button>
        </div>
      </GlassPanel>
    </div>
  );
}
