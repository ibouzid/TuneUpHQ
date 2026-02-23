import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export function Icon({ icon: Icon, className, size = 20 }: IconProps) {
  return (
    <Icon
      size={size}
      className={clsx("shrink-0", className)}
    />
  );
}
