import { MailCheck } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-3xl bg-primary/12 text-primary">
          <MailCheck className="size-7" />
        </div>
        <SectionHeading
          className="mt-6"
          eyebrow="Verification"
          title="Confirm your email"
          description="Verification links gate onboarding completion, reduce spam accounts, and unlock full messaging and application capabilities."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <Button className="rounded-2xl">Resend verification link</Button>
        </div>
      </GlassPanel>
    </div>
  );
}
