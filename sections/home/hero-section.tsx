import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { BrandLogo } from "@/components/branding/brand-logo";
import { StatCard } from "@/components/cards/stat-card";
import { Button } from "@/components/ui/button";
import { sluBrand } from "@/constants/branding";
import { eventStatistics } from "@/data/statistics";

export function HeroSection() {
  return (
    <section className="bg-slu-hero text-primary-foreground">
      <div className="container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-section-sm lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-10 inline-flex rounded-lg bg-primary-foreground p-4">
            <BrandLogo orientation="primary" priority className="h-28" />
          </div>
          <p className="font-label text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {sluBrand.year} Summer Learning Institute
          </p>
          <h1 className="mt-6 font-heading text-display font-bold">
            Saint Louis University School of Education
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lead text-primary-foreground/86">
            A premium academic platform for educators, partners, and communities gathered around learning,
            leadership, and mission-centered practice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#registration">
                Start planning <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#agenda">View agenda</a>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 shadow-institutional backdrop-blur">
          <div className="flex items-start gap-4 rounded-lg bg-primary-foreground p-5 text-foreground">
            <CalendarDays className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-heading text-xl font-bold">Official Brand Foundation</h2>
              <p className="mt-2 font-body text-base leading-7 text-muted-foreground">
                SLU Blue and white lead the experience, with accents reserved for orientation and emphasis.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg bg-primary-foreground p-5 text-foreground">
            <MapPin className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-heading text-xl font-bold">Protected Redesign Workflow</h2>
              <p className="mt-2 font-body text-base leading-7 text-muted-foreground">
                The next-generation site evolves independently while the preserved legacy site remains stable.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {eventStatistics.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
