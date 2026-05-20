import { RegistrationCard } from "@/components/cards/registration-card";
import { registrationLinks } from "@/data/registration";

export function RegistrationSection() {
  return (
    <section id="registration" className="bg-primary py-section-sm text-primary-foreground">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="font-label text-eyebrow font-semibold uppercase text-accent">Registration</p>
          <h2 className="mt-4 font-heading text-section-title font-bold">Prepare for the Summer Learning Institute.</h2>
          <p className="mt-5 font-body text-lead text-primary-foreground/85">
            The registration area is ready for form integration, event details, attendance policies, and accessible support content.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {registrationLinks.map((link) => (
            <RegistrationCard key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
