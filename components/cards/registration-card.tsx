import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { RegistrationLink } from "@/types/site";

export function RegistrationCard({ link }: { link: RegistrationLink }) {
  return (
    <article className="rounded-lg border bg-card p-7 shadow-card">
      <h3 className="font-heading text-2xl font-bold text-card-foreground">{link.label}</h3>
      <p className="mt-4 font-body text-base leading-7 text-muted-foreground">{link.description}</p>
      <Button asChild className="mt-6" variant={link.isPrimary ? "default" : "outline"}>
        <a href={link.href}>
          {link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
    </article>
  );
}
