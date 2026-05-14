import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";

export default function TutorialsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading eyebrow="Tutorials" title="Onboarding tutorials" description="Step-by-step guided content for students, organizations, and moderators is represented here as a reusable learning surface." />
      </GlassPanel>
    </div>
  );
}
