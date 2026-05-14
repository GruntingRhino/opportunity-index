import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const roles = ["User Account", "Organization Account"];

export default function SignupPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div className="space-y-6">
        <Badge className="rounded-full px-4 py-2">Multi-step onboarding</Badge>
        <SectionHeading
          title="Create a profile that improves your opportunity signal"
          description="Students and organizations enter through separate onboarding paths, with verification, profile completion, and role-specific dashboards."
        />
      </div>
      <GlassPanel className="p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input placeholder="First name" className="h-12 rounded-2xl" />
          <Input placeholder="Last name" className="h-12 rounded-2xl" />
          <Input placeholder="Email" type="email" className="h-12 rounded-2xl sm:col-span-2" />
          <Input placeholder="Password" type="password" className="h-12 rounded-2xl sm:col-span-2" />
          <Select>
            <SelectTrigger className="h-12 rounded-2xl sm:col-span-2">
              <SelectValue placeholder="Choose account type" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="h-12 rounded-2xl sm:col-span-2">Continue to verification</Button>
          <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
            {["Google", "Apple", "LinkedIn"].map((provider) => (
              <Button key={provider} variant="outline" className="rounded-2xl">
                {provider}
              </Button>
            ))}
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
