import { BrandLogo } from "@/components/branding/brand-logo";
import { event2026, eventNavigation } from "@/data/event-2026";
import { socialLinks } from "@/data/social";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <BrandLogo tone="light" orientation="primary" className="h-28 w-40" />
          <p className="mt-8 max-w-md font-body text-lg leading-8 text-secondary-foreground/82">
            {event2026.name} is hosted by the {event2026.hostedBy.join(" and ")} at {event2026.location}.
          </p>
          <p className="mt-5 font-label text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {event2026.dates}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="font-label text-sm font-semibold uppercase tracking-[0.18em] text-accent">Experience</h2>
            <nav className="mt-5 grid gap-3" aria-label="Footer event navigation">
              {eventNavigation.map((item) => (
                <a key={item.href} href={item.href} className="font-heading text-lg font-semibold text-secondary-foreground/85 hover:text-secondary-foreground">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-label text-sm font-semibold uppercase tracking-[0.18em] text-accent">Connect</h2>
            <nav className="mt-5 grid gap-3" aria-label="Event contact links">
              <a href={`mailto:${event2026.contactEmail}`} className="font-heading text-lg font-semibold text-secondary-foreground/85 hover:text-secondary-foreground">
                Email
              </a>
              
              
              <a href="#faq" className="font-heading text-lg font-semibold text-secondary-foreground/85 hover:text-secondary-foreground">
                Accessibility
              </a>
            </nav>
          </div>
          <div>
            <h2 className="font-label text-sm font-semibold uppercase tracking-[0.18em] text-accent">Social</h2>
            <nav className="mt-5 grid gap-3" aria-label="Social links">
              {socialLinks.map((item) => (
                <a key={item.href} href={item.href} className="font-heading text-lg font-semibold text-secondary-foreground/85 hover:text-secondary-foreground">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/15">
        <div className="container py-5 font-label text-sm uppercase tracking-[0.12em] text-secondary-foreground/70">
          Saint Louis University School of Education
        </div>
      </div>
    </footer>
  );
}
