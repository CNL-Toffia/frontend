"use client";

import React from "react";

export interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export default function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
}: FadeInWhenVisibleProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
