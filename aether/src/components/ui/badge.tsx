import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary/10 text-primary",
        secondary:
          "border-secondary/20 bg-secondary/10 text-secondary",
        outline: "border-outline-variant text-on-surface-variant",
        synced: "border-primary/20 bg-primary/10 text-primary",
        offline: "border-secondary/20 bg-secondary/10 text-secondary",
        pending: "border-secondary/20 bg-secondary-container/10 text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
