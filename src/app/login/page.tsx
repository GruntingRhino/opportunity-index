import Link from "next/link";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div className="space-y-6">
        <Badge className="rounded-full px-4 py-2">Login</Badge>
        <SectionHeading
          title="Pick up where your applications left off"
          description="Access discovery, saved opportunities, organization messages, and application status updates from one account."
        />
      </div>
      <GlassPanel className="p-8">
        <div className="space-y-5">
          <Input placeholder="Email address" type="email" className="h-12 rounded-2xl" />
          <Input placeholder="Password" type="password" className="h-12 rounded-2xl" />
          <Button className="h-12 w-full rounded-2xl">Log in</Button>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Continue with Google", "Continue with Apple", "Continue with LinkedIn"].map((label) => (
              <Button key={label} variant="outline" className="rounded-2xl text-xs sm:text-sm">
                {label}
              </Button>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <Link href="/forgot-password" className="hover:text-foreground">
              Forgot password?
            </Link>
            <Link href="/signup" className="hover:text-foreground">
              Need an account?
            </Link>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
