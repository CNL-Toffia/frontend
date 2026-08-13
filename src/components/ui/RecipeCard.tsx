"use client";

import React from "react";
import { Recipe } from "@/data/recipes";

export interface RecipeCardProps {
  recipe: Recipe;
  variant?: "grid" | "carousel";
  className?: string;
  onSelect?: (recipe: Recipe) => void;
}

export default function RecipeCard({
  recipe,
  variant = "grid",
  className,
  onSelect,
}: RecipeCardProps) {
  return (
    <article className={className}>
      {/* RecipeCard scaffolded stub */}
    </article>
  );
}
