import Link from "next/link";
import { Bell, Menu, MessageSquareMore } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { topNavigation } from "@/lib/mock-data";

const secondaryLinks = [
  { href: "/login", label: "Log in" },
  { href: "/signup", label: "Create account" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {topNavigation.map((item) => (
            <Button key={item.href} asChild variant="ghost" className="rounded-2xl">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="icon" className="rounded-2xl">
            <Bell className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-2xl">
            <MessageSquareMore className="size-4" />
          </Button>
          <ThemeToggle />
          {secondaryLinks.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={item.href === "/signup" ? "default" : "outline"}
              className="rounded-2xl"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-2xl lg:hidden">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="surface-glass border-white/10">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex flex-col gap-3">
              {topNavigation.concat(secondaryLinks).map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  className="justify-start rounded-2xl text-base"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <div className="pt-3">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
