import React from "react";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {/* SectionHeading scaffolded stub */}
    </div>
  );
}
