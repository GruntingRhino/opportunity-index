import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading eyebrow="Terms" title="Platform rules" description="Organizations must post legitimate opportunities, students must provide accurate application data, and administrators retain moderation authority over trust, abuse, and verification flows." />
      </GlassPanel>
    </div>
  );
}
