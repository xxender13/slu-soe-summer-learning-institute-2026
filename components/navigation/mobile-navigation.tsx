"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandLogo } from "@/components/branding/brand-logo";
import { Button } from "@/components/ui/button";
import { primaryNavigation, utilityNavigation } from "@/data/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </Button>

      {isOpen ? (
        <div id="mobile-navigation" className="absolute inset-x-0 top-header border-b bg-background shadow-card">
          <div className="container py-6">
            <Link href="/" className="inline-flex" onClick={() => setIsOpen(false)}>
              <BrandLogo className="h-12" />
            </Link>
            <nav className="mt-8 grid gap-2" aria-label="Mobile navigation">
              {[...primaryNavigation, ...utilityNavigation].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-3 font-heading text-xl font-bold text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
