import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";

export default function WalkthroughsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading eyebrow="Walkthroughs" title="Interactive product walkthroughs" description="These surfaces explain discovery, messaging, application pipeline tracking, and moderation actions with contextual in-product teaching." />
      </GlassPanel>
    </div>
  );
}
