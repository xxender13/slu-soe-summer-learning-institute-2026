import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = ComponentProps<typeof Button>;

export function CTAButton({ className, size = "lg", ...props }: CTAButtonProps) {
  return <Button size={size} className={cn("shadow-institutional", className)} {...props} />;
}
