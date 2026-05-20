import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <SectionContainer className="bg-slu-subtle">
      <SectionHeading
        eyebrow="Testimonials"
        title="Designed around the professional wisdom educators bring."
        description="The final site can feature participant reflections, partner quotes, and post-event outcomes without changing presentation code."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="rounded-lg border bg-card p-8 shadow-card">
            <blockquote className="font-body text-2xl leading-10 text-card-foreground">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-8">
              <p className="font-heading text-lg font-bold text-card-foreground">{testimonial.name}</p>
              <p className="mt-1 font-label text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionContainer>
  );
}
