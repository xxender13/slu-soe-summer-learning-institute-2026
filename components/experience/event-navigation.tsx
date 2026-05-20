"use client";

import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/branding/brand-logo";
import { eventNavigation } from "@/data/event-2026";

export function EventNavigation() {
  const [active, setActive] = useState<string>(eventNavigation[0].href);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const sections = eventNavigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsPastHero(window.scrollY > window.innerHeight * 0.72);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isPastHero
          ? "border-border bg-background/95 text-foreground shadow-soft"
          : "border-white/10 bg-slu-grand/80 text-white"
      }`}
    >
      <div className="container flex h-20 items-center justify-between gap-5">
        <a href="#top" className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <BrandLogo
            tone={isPastHero ? "dark" : "light"}
            orientation="horizontal"
            className="h-11 w-[11.5rem] sm:w-[13rem]"
            priority
          />
        </a>
        <nav
          className={`hidden items-center gap-1 rounded-full border p-1 md:flex ${
            isPastHero ? "border-border bg-muted/70" : "border-white/15 bg-white/[0.08]"
          }`}
          aria-label="Event navigation"
        >
          {eventNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.14em] transition ${
                active === item.href
                  ? isPastHero
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-primary"
                  : isPastHero
                    ? "text-muted-foreground hover:bg-background hover:text-primary"
                    : "text-white/78 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#registration"
          className={`rounded-full px-5 py-3 font-label text-xs font-bold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 ${
            isPastHero
              ? "bg-primary text-primary-foreground shadow-soft"
              : "bg-accent text-accent-foreground"
          }`}
        >
          Save Date
        </a>
      </div>
    </header>
  );
}
