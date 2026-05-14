import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <GlassPanel className="p-8">
        <SectionHeading
          eyebrow="Recovery"
          title="Reset password"
          description="Email-based recovery flow with verification token, session invalidation, and security event logging."
        />
        <div className="mt-8 space-y-4">
          <Input placeholder="Email address" type="email" className="h-12 rounded-2xl" />
          <Button className="h-12 rounded-2xl">Send reset link</Button>
        </div>
      </GlassPanel>
    </div>
  );
}
