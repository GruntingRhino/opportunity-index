import Link from "next/link";
import { ArrowRight, Check, CirclePlay, Compass, Sparkles, Stars } from "lucide-react";

import { GlassPanel } from "@/components/glass-panel";
import { MetricCard } from "@/components/metric-card";
import { MotionReveal } from "@/components/motion-reveal";
import { OpportunityCard } from "@/components/opportunity-card";
import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingTiers, faqs, landingStats, opportunities, testimonials } from "@/lib/mock-data";

const featurePillars = [
  "Unified discovery across internships, scholarships, research, and events",
  "Profile-driven recommendations and application tracking",
  "Organization-grade applicant management and analytics",
  "Moderation, verification, and trust tooling for administrators",
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <MotionReveal className="space-y-8">
            <Badge className="rounded-full px-4 py-2 text-sm">
              <Stars className="mr-2 size-4" />
              Gen Z-native opportunity discovery infrastructure
            </Badge>
            <div className="space-y-6">
              <h1 className="font-heading max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Stop treating student opportunity discovery like a spreadsheet graveyard.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Opportunity Index is a unified marketplace for internships, scholarships,
                fellowships, research, jobs, hackathons, volunteering, mentorship, and
                community programs. Students get clarity. Organizations get signal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="/signup">
                  Start free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-6">
                <Link href="/discover">
                  <Compass className="size-4" />
                  Explore opportunities
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-2xl px-6">
                <Link href="/organizations">
                  <CirclePlay className="size-4" />
                  View organization tools
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featurePillars.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 rounded-full bg-primary/15 p-1 text-primary">
                    <Check className="size-4" />
                  </span>
                  <p className="text-sm text-foreground/85">{item}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <GlassPanel className="relative overflow-hidden p-6">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Student dashboard preview</p>
                    <h2 className="font-heading text-2xl font-semibold">Find better-fit opportunities faster</h2>
                  </div>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    <Sparkles className="mr-1 size-3.5" />
                    AI-ranked
                  </Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {landingStats.map((stat) => (
                    <div key={stat.label} className="rounded-[24px] border border-white/10 bg-background/50 p-4">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 font-heading text-3xl font-semibold">{stat.value}</p>
                      <p className="mt-2 text-sm text-primary">{stat.change}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[28px] border border-white/10 bg-background/60 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Trending this week</p>
                      <h3 className="font-heading text-xl font-semibold">AI Product Fellowship</h3>
                    </div>
                    <Badge className="rounded-full">96% match</Badge>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Remote", "Paid", "5 days left"].map((item) => (
                      <div key={item} className="rounded-2xl bg-muted/60 px-4 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {landingStats.map((metric, index) => (
            <MotionReveal key={metric.label} delay={index * 0.06}>
              <MetricCard {...metric} />
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Marketplace"
          title="Discovery feels curated, not chaotic"
          description="Students can filter by work mode, compensation, category, skill level, date, location, difficulty, and estimated acceptance rate without losing the signal."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <MotionReveal key={opportunity.slug} delay={index * 0.06}>
              <OpportunityCard opportunity={opportunity} />
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social proof"
          title="Built for students and organizations that are tired of fragmented systems"
          align="center"
          description="The product combines job-board discovery, ATS pipeline visibility, lightweight community layers, and modern SaaS ergonomics."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.author} delay={index * 0.05}>
              <GlassPanel className="h-full p-6">
                <p className="text-base leading-7 text-foreground/85">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback>{testimonial.author.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </GlassPanel>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple packaging while the platform is still in launch mode"
          description="The current implementation is web-first and intentionally optimized for fast iteration. Mobile can layer on later without redoing the core model."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <MotionReveal key={tier.name} delay={index * 0.05}>
              <GlassPanel className="h-full p-6">
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl font-semibold">{tier.name}</h3>
                  <p className="font-heading text-4xl font-semibold">{tier.price}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{tier.description}</p>
                </div>
                <div className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Direct answers" align="center" />
        <Accordion type="single" collapsible className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <GlassPanel key={faq.question} className="px-6">
              <AccordionItem value={faq.question} className="border-none">
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </GlassPanel>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
