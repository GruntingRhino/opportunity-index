import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading eyebrow="Privacy" title="Data use summary" description="Profiles, resumes, application activity, messaging events, and recommendation signals are stored with role-based access boundaries and audit-friendly moderation events." />
      </GlassPanel>
    </div>
  );
}
