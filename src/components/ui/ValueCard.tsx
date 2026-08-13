import React from "react";
import { LucideIcon } from "lucide-react";

export interface ValueCardProps {
  title: string;
  description: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  index?: number;
  className?: string;
}

export default function ValueCard({
  title,
  description,
  icon: Icon,
  index,
  className,
}: ValueCardProps) {
  return (
    <div className={className}>
      {/* ValueCard scaffolded stub */}
    </div>
  );
}
