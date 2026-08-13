import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "royal" | "gold" | "caramel" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "royal",
  className,
}: BadgeProps) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}
