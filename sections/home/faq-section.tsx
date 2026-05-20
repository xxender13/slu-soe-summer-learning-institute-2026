import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <SectionContainer id="faq" className="bg-muted">
        <SectionHeading
          eyebrow="FAQ"
          title="Accessible answers for launch planning."
          description="The FAQ structure uses semantic disclosure-ready content blocks and generous line height for readability."
        />
        <div className="mt-12 grid gap-5">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-lg border bg-card p-7 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-card-foreground">{item.question}</h3>
              <p className="mt-4 font-body text-base leading-7 text-muted-foreground">{item.answer}</p>
            </article>
          ))}
        </div>
    </SectionContainer>
  );
}
