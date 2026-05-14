import { Award, BriefcaseBusiness, Code2, Globe, GraduationCap, School } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = ["TypeScript", "Product Strategy", "Civic Tech", "Data Analysis", "Design Systems"];
const achievements = ["Dean's List", "Hackathon Winner", "Research Assistant", "120 Volunteer Hours"];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <GlassPanel className="p-6">
          <div className="h-28 rounded-[28px] bg-[linear-gradient(135deg,rgba(56,189,248,0.35),rgba(99,102,241,0.5),rgba(34,197,94,0.18))]" />
          <div className="-mt-12 flex items-end gap-4">
            <Avatar className="size-24 border-4 border-background">
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="pb-2">
              <h1 className="font-heading text-3xl font-semibold">Ava Chen</h1>
              <p className="text-sm text-muted-foreground">Product-minded computer science student focused on public-interest technology.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3"><School className="size-4 text-primary" /> Northwestern University</div>
            <div className="flex items-center gap-3"><GraduationCap className="size-4 text-primary" /> Class of 2027 • GPA 3.86</div>
            <div className="flex items-center gap-3"><BriefcaseBusiness className="size-4 text-primary" /> linkedin.com/in/avachen</div>
            <div className="flex items-center gap-3"><Code2 className="size-4 text-primary" /> github.com/avachen</div>
            <div className="flex items-center gap-3"><Globe className="size-4 text-primary" /> avachen.dev</div>
          </div>
          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Profile strength</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-3 rounded-full" />
          </div>
        </GlassPanel>
        <div className="space-y-8">
          <GlassPanel className="p-6">
            <SectionHeading eyebrow="About" title="Profile signal" description="Resume upload, portfolio links, clubs, extracurriculars, badges, certifications, and public-facing endorsements all live in this profile model." />
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} className="rounded-full px-3 py-1.5">{skill}</Badge>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel className="p-6">
            <div className="flex items-center gap-2 text-primary">
              <Award className="size-4" />
              <p className="text-sm font-medium">Badges and achievements</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {achievements.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-background/45 p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
