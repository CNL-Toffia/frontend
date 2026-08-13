"use client";

import React from "react";
import { Recipe } from "@/data/recipes";

export interface RecipesCarouselProps {
  recipes?: Recipe[];
  className?: string;
}

export default function RecipesCarousel({
  recipes,
  className,
}: RecipesCarouselProps) {
  return (
    <section className={className}>
      {/* RecipesCarousel section scaffolded stub */}
    </section>
  );
}
