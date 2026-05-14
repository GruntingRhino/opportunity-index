import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Settings" title="Profile, notifications, privacy, and connected accounts" />
      <GlassPanel className="mt-8 p-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid h-auto grid-cols-3 rounded-2xl bg-muted/50 p-1">
            <TabsTrigger value="profile" className="rounded-2xl">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-2xl">Notifications</TabsTrigger>
            <TabsTrigger value="privacy" className="rounded-2xl">Privacy</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Display name" className="h-12 rounded-2xl" />
            <Input placeholder="School or organization" className="h-12 rounded-2xl" />
            <Input placeholder="LinkedIn URL" className="h-12 rounded-2xl sm:col-span-2" />
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            {["Deadline reminders", "New recommendations", "Unread messages"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/45 px-4 py-3">
                <span>{item}</span>
                <Switch defaultChecked />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="privacy" className="space-y-4">
            {["Hide GPA from public profile", "Require approval before direct messaging", "Enable discoverability for recruiters"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/45 px-4 py-3">
                <span>{item}</span>
                <Switch defaultChecked />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </GlassPanel>
    </div>
  );
}
