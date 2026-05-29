import {
  ArrowRight,
  CalendarDays,
  Compass,
  Handshake,
  MapPin,
  PenTool,
  Scale,
  Sparkles,
  Users
} from "lucide-react";

import { AgendaTimeline } from "@/components/experience/agenda-timeline";
import { Countdown } from "@/components/experience/countdown";
import { EventNavigation } from "@/components/experience/event-navigation";
import { FAQAccordion } from "@/components/experience/faq-accordion";
import { MotionReveal } from "@/components/experience/motion-reveal";
import { SpeakerShowcase } from "@/components/experience/speaker-showcase";
import { VideoPreview } from "@/components/experience/video-preview";
import { BrandLogo } from "@/components/branding/brand-logo";
import { Button } from "@/components/ui/button";
import {
  agendaDays,
  communityOutcomes,
  event2026,
  eventFaqs,
  eventHighlights,
  focusAreas
} from "@/data/event-2026";
import { eventSpeakers2026 } from "@/data/speakers-2026";

const iconMap = {
  Scale,
  Compass,
  PenTool,
  Sparkles
};

const accentClasses = {
  gold: "from-slu-gold/12 to-transparent text-primary",
  teal: "from-slu-teal/12 to-transparent text-primary",
  fountain: "from-slu-fountain/12 to-transparent text-primary",
  blue: "from-primary/10 to-transparent text-primary"
};

export default function Event2026Home() {
  return (
    <>
      <EventNavigation />
      <main id="top" className="overflow-hidden" suppressHydrationWarning>
        <section className="relative min-h-screen bg-slu-hero pt-20 text-primary-foreground">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,36,77,0.05),rgba(0,36,77,0.45))]" />
          <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <MotionReveal>
              <div className="inline-flex rounded-md bg-white p-4">
                <BrandLogo orientation="primary" className="h-24 w-36 sm:h-28 sm:w-40" priority />
              </div>
              <p className="mt-10 font-label text-eyebrow font-semibold uppercase text-accent">Save the Date · {event2026.dates}</p>
              <h1 className="mt-6 max-w-5xl font-heading text-display font-bold">
                {event2026.name}
              </h1>
              <p className="mt-7 max-w-2xl font-body text-xl leading-9 text-primary-foreground/86 sm:text-2xl sm:leading-10">
                A flagship SLU School of Education experience for justice-centered learning, instructional leadership,
                resource development, and community collaboration.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="accent">
                  <a href="#registration">
                    Get updates <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10">
                  <a href="#speakers">Explore speakers</a>
                </Button>
              </div>
            </MotionReveal>
            <MotionReveal className="space-y-6">
              <Countdown targetDate={event2026.startsAt} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur">
                  <CalendarDays className="h-6 w-6 text-accent" aria-hidden="true" />
                  <p className="mt-5 font-label text-eyebrow font-semibold uppercase text-white/70">When</p>
                  <p className="mt-2 font-heading text-2xl font-bold">{event2026.dates}</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur">
                  <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
                  <p className="mt-5 font-label text-eyebrow font-semibold uppercase text-white/70">Where</p>
                  <p className="mt-2 font-heading text-2xl font-bold">{event2026.location}</p>
                </div>
              </div>
            </MotionReveal>
          </div>
          <a
            href="#why"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/20 px-4 py-3 font-label text-xs font-semibold uppercase tracking-[0.18em] text-white/70 md:block"
          >
            Scroll
          </a>
        </section>

        <section id="why" className="bg-background py-section-sm lg:py-section">
          <div className="container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <MotionReveal>
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">Why this institute matters</p>
              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Educators are leading through a changing world. The Summer Learning Institute helps them build stronger, more just learning communities.
              </h2>
            </MotionReveal>
            <MotionReveal>
              <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-card sm:p-10">
                <div className="space-y-6 text-foreground">
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                    The Summer Learning Institute exists to bring educators together around the shared work of creating stronger, more just, and more responsive learning communities for all students.
                  </p>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                    As schools continue to navigate changing educational, social, and technological landscapes, professional learning remains essential to growth, innovation, and meaningful systems change.
                  </p>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                    The Saint Louis University School of Education recognizes that educators today serve learners with increasingly diverse strengths, identities, experiences, and needs. In a region shaped by a wide range of educational contexts and student experiences, collaboration across roles, schools, and sectors matters more than ever.
                  </p>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                    Through the Summer Learning Institute, SLU seeks to impact the St. Louis community by creating opportunities that encourage reflection, instructional growth, innovation, cross-sector collaboration, and justice-centered practice.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="highlights" className="bg-slu-subtle py-section-sm">
          <div className="container">
            <MotionReveal className="mx-auto max-w-3xl text-center">
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">Event highlights</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">Everything attendees need to understand the experience at a glance.</h2>
            </MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {eventHighlights.map((item) => (
                <MotionReveal key={item.label} className="rounded-xl border bg-card p-7 shadow-card">
                  <p className="font-label text-eyebrow font-semibold uppercase text-primary">{item.label}</p>
                  <h3 className="mt-5 font-heading text-3xl font-bold">{item.value}</h3>
                  <p className="mt-3 font-body text-base leading-7 text-muted-foreground">{item.detail}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="focus" className="bg-background py-section-sm lg:py-section">
          <div className="container">
            <MotionReveal className="max-w-3xl">
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">Focus areas</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">Four pathways into justice-centered educational leadership.</h2>
            </MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {focusAreas.map((area) => {
                const Icon = iconMap[area.icon as keyof typeof iconMap];
                return (
                  <MotionReveal key={area.title} className="group relative overflow-hidden rounded-xl border bg-card p-7 shadow-card transition hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${accentClasses[area.accent]}`} />
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-soft">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 font-heading text-3xl font-bold">{area.title}</h3>
                      <p className="mt-5 font-body text-lg leading-8 text-muted-foreground">{area.description}</p>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="speakers" className="bg-background py-section">
          <div className="container">
            <MotionReveal className="max-w-4xl">
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">Featured speakers</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">A complete speaker showcase with room to breathe.</h2>
              <p className="mt-6 max-w-3xl font-body text-xl leading-9 text-muted-foreground">
                Explore a curated visual deck, then browse the full 31-speaker roster through compact cards that open detailed session panels.
              </p>
            </MotionReveal>
            <div className="mt-12">
              <SpeakerShowcase speakers={eventSpeakers2026} />
            </div>
          </div>
        </section>

        <section id="agenda" className="bg-slu-subtle py-section">
          <div className="container">
            <MotionReveal className="max-w-3xl">
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">Agenda preview</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">A three-day rhythm for learning, connection, and implementation.</h2>
            </MotionReveal>
            <div className="mt-12">
              <AgendaTimeline days={agendaDays} />
            </div>
          </div>
        </section>

        <section className="bg-background py-section">
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <MotionReveal>
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">Networking and community</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">The institute is designed to make professional connection feel intentional.</h2>
              <p className="mt-6 font-body text-xl leading-9 text-muted-foreground">
                Educators, leaders, grant writers, faculty, and community partners move through shared sessions,
                curated table conversations, and planning labs that convert inspiration into relationships and next steps.
              </p>
            </MotionReveal>
            <MotionReveal className="grid gap-4 sm:grid-cols-2">
              {["Educator connections", "Leadership community", "Professional growth", "Community collaboration"].map((item) => (
                <div key={item} className="rounded-xl border bg-card p-7 shadow-card">
                  <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-heading text-2xl font-bold">{item}</h3>
                </div>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="bg-slu-grand py-section-sm text-white lg:py-section">
          <div className="container">
            <MotionReveal className="mx-auto max-w-4xl text-center">
              <p className="font-label text-eyebrow font-semibold uppercase text-accent">Recap video</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">See the energy behind the Summer Learning Institute.</h2>
              <p className="mt-6 font-body text-xl leading-9 text-white/78">{event2026.recapVideoLabel}</p>
            </MotionReveal>
            <MotionReveal className="mx-auto mt-12 max-w-5xl">
              <VideoPreview
                title={event2026.recapVideoLabel}
                embedUrl={event2026.recapVideoEmbedUrl}
              />
              <p className="mt-4 text-center font-body text-sm text-white/70">
                Having trouble viewing the video?{" "}
                <a
                  href={event2026.recapVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-heading font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Open it on YouTube
                </a>
                .
              </p>
            </MotionReveal>
          </div>
        </section>

        <section id="registration" className="bg-primary py-section-sm text-primary-foreground lg:py-section">
          <div className="container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <MotionReveal className="max-w-4xl">
              <p className="font-label text-eyebrow font-semibold uppercase text-accent">Registration</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">Registration opens soon. Save the date and join the update list.</h2>
              <p className="mt-6 font-body text-xl leading-9 text-primary-foreground/84">
                Future registration can connect here. For now, the CTA routes attendees to request updates from the institute team.
              </p>
            </MotionReveal>
            <MotionReveal className="rounded-xl border border-white/20 bg-white/[0.08] p-7 backdrop-blur">
              <Button asChild size="lg" variant="accent">
                <a href={event2026.registrationUrl}>
                  Email for updates <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <p className="mt-5 font-body text-sm leading-6 text-primary-foreground/78">
                Questions? Contact {event2026.contactEmail}
              </p>
            </MotionReveal>
          </div>
        </section>

        <section id="faq" className="bg-background py-section-sm lg:py-section">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <p className="font-label text-eyebrow font-semibold uppercase text-primary">FAQ</p>
              <h2 className="mt-5 font-heading text-section-title font-bold">Clear answers for attendees, partners, and planning teams.</h2>
            </MotionReveal>
            <MotionReveal>
              <FAQAccordion items={eventFaqs} />
            </MotionReveal>
          </div>
        </section>
      </main>
    </>
  );
}
