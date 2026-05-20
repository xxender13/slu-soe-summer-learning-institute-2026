import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl animate-fade-up", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "font-label text-eyebrow font-semibold uppercase",
          tone === "light" ? "text-accent" : "text-primary"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-heading text-section-title font-bold",
          tone === "light" ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 font-body text-lead",
            tone === "light" ? "text-primary-foreground/85" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
