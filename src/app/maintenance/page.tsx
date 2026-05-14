import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export default function MaintenancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <Badge className="rounded-full">Status page</Badge>
        <SectionHeading className="mt-4" title="Scheduled maintenance window" description="Platform updates, search reindexing, recommendation model refreshes, and admin tooling migrations can be communicated here." />
      </GlassPanel>
    </div>
  );
}
