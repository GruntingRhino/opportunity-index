import Link from "next/link";

import { Logo } from "@/components/logo";
import { footerColumns } from "@/lib/mock-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Launchboard centralizes internships, scholarships, research,
            hackathons, jobs, and community programs into one high-signal
            discovery and application workflow.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-[0.2em] uppercase">
              {column.title}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
