import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";

export default function HelpCenterPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading eyebrow="Help center" title="Support documentation" description="Guides cover profile building, discovering opportunities, tracking applications, organization posting, moderation, and verification operations." />
      </GlassPanel>
    </div>
  );
}
