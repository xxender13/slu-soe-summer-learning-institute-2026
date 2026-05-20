import { cn } from "@/lib/utils";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageBanner({ eyebrow, title, description, className }: PageBannerProps) {
  return (
    <div className={cn("bg-slu-hero text-primary-foreground", className)}>
      <div className="container py-section-sm">
        <p className="font-label text-eyebrow font-semibold uppercase text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-heading text-display font-bold">{title}</h1>
        <p className="mt-6 max-w-2xl font-body text-lead text-primary-foreground/85">{description}</p>
      </div>
    </div>
  );
}
