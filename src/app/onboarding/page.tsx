import { CheckCircle2 } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const steps = [
  "Role selection",
  "Profile basics",
  "Education and skills",
  "Resume and links",
  "Notifications and recommendations",
];

export default function OnboardingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassPanel className="p-6">
          <SectionHeading eyebrow="Step 3 of 5" title="Student onboarding" description="Progressive completion keeps the initial form short while still collecting real recommendation signals." />
          <Progress value={62} className="mt-6 h-3 rounded-full" />
          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <CheckCircle2 className={`size-5 ${index < 3 ? "text-primary" : "text-muted-foreground"}`} />
                <span className={index < 3 ? "text-foreground" : "text-muted-foreground"}>{step}</span>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="School" className="h-12 rounded-2xl" />
            <Input placeholder="Graduation year" className="h-12 rounded-2xl" />
            <Input placeholder="GPA" className="h-12 rounded-2xl" />
            <Input placeholder="Volunteer hours" className="h-12 rounded-2xl" />
            <Input placeholder="LinkedIn URL" className="h-12 rounded-2xl sm:col-span-2" />
            <Input placeholder="GitHub or portfolio URL" className="h-12 rounded-2xl sm:col-span-2" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Machine Learning", "Community", "Finance", "Design Systems", "Public Policy"].map((item) => (
              <Badge key={item} variant="secondary" className="rounded-full px-4 py-2">
                {item}
              </Badge>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
