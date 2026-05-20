import Image from "next/image";

import { cn } from "@/lib/utils";
import { sluBrand } from "@/constants/branding";

type BrandLogoProps = {
  tone?: "light" | "dark";
  orientation?: "primary" | "horizontal";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({
  tone = "dark",
  orientation = "horizontal",
  priority = false,
  className,
  imageClassName
}: BrandLogoProps) {
  const src =
    orientation === "primary"
      ? tone === "light"
        ? sluBrand.logos.primaryWhite
        : sluBrand.logos.primaryBlue
      : tone === "light"
        ? sluBrand.logos.horizontalWhite
        : sluBrand.logos.horizontalBlue;

  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <Image
        src={src}
        alt={sluBrand.name}
        width={360}
        height={252}
        priority={priority}
        sizes={orientation === "primary" ? "180px" : "220px"}
        className={cn(
          "block h-auto max-h-full w-auto max-w-full object-contain",
          imageClassName
        )}
      />
    </span>
  );
}
