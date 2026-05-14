import Link from "next/link";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <GlassPanel className="p-10 text-center">
        <SectionHeading
          eyebrow="404"
          title="This route does not exist"
          description="The page may have moved, been deleted, or never existed in the first place."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-2xl">
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </GlassPanel>
    </div>
  );
}
