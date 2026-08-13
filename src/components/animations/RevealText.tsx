"use client";

import React from "react";

export interface RevealTextProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  byWord?: boolean;
}

export default function RevealText({
  children,
  className,
  tag = "h1",
  delay = 0,
  byWord = true,
}: RevealTextProps) {
  const Tag = tag;
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}
