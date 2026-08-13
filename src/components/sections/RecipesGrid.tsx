"use client";

import React from "react";
import { Recipe } from "@/data/recipes";

export interface RecipesGridProps {
  recipes?: Recipe[];
  onSelectRecipe?: (recipe: Recipe) => void;
  className?: string;
}

export default function RecipesGrid({
  recipes,
  onSelectRecipe,
  className,
}: RecipesGridProps) {
  return (
    <section className={className}>
      {/* RecipesGrid section scaffolded stub */}
    </section>
  );
}
