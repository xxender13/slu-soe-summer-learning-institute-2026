import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  spacing?: "xs" | "sm" | "md";
};

export function SectionContainer({
  id,
  children,
  className,
  innerClassName,
  spacing = "md"
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "xs" && "py-section-xs",
        spacing === "sm" && "py-section-sm",
        spacing === "md" && "py-section",
        className
      )}
    >
      <div className={cn("container", innerClassName)}>{children}</div>
    </section>
  );
}
