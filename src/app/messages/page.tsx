import { Paperclip, SendHorizonal } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { messages } from "@/lib/mock-data";

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Messaging"
        title="Student-to-organization conversations without context switching"
        description="Unread state, archived chats, attachments, notifications, and recruiter response flows are modeled here."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-[360px_1fr]">
        <GlassPanel className="p-4">
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={message.sender} className="rounded-[24px] border border-white/10 bg-background/45 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{message.sender}</p>
                  {message.unread ? <Badge className="rounded-full">Unread</Badge> : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{message.preview}</p>
                <p className="mt-3 text-xs text-muted-foreground">{message.time}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="flex min-h-[540px] flex-col p-6">
          <div className="border-b border-white/10 pb-4">
            <p className="font-heading text-2xl font-semibold">CivicForge</p>
            <p className="text-sm text-muted-foreground">Hackathon organizers • typing indicator active</p>
          </div>
          <div className="flex-1 space-y-4 py-6">
            <div className="max-w-xl rounded-[24px] bg-background/55 p-4 text-sm leading-7 text-muted-foreground">
              We liked your submission for the transit accessibility track. Are you available for a follow-up interview next week?
            </div>
            <div className="ml-auto max-w-xl rounded-[24px] bg-primary px-4 py-3 text-sm text-primary-foreground">
              Yes. Tuesday or Wednesday afternoon works for me. I can also share the prototype repo and deck.
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 pt-4">
            <Button variant="outline" size="icon" className="rounded-2xl">
              <Paperclip className="size-4" />
            </Button>
            <Input placeholder="Write a message" className="h-12 rounded-2xl" />
            <Button className="rounded-2xl">
              <SendHorizonal className="size-4" />
              Send
            </Button>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
