import Link from "next/link";

import { BrandLogo } from "@/components/branding/brand-logo";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-header items-center justify-between gap-6">
        <Link href="/" className="-ml-3 block shrink-0 sm:-ml-6" aria-label="Saint Louis University School of Education home">
          <BrandLogo priority className="h-16 sm:h-20" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#registration">Register</a>
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
