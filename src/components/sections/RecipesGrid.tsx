"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, Utensils } from "lucide-react";
import { recipes, Recipe } from "@/data/recipes";
import RecipeCard from "@/components/ui/RecipeCard";

export interface RecipesGridProps {
  className?: string;
}

export default function RecipesGrid({ className }: RecipesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = useMemo(() => {
    const list = ["Tous"];
    recipes.forEach((r) => {
      if (!list.includes(r.category)) list.push(r.category);
    });
    return list;
  }, []);

  const filteredRecipes = useMemo(() => {
    if (selectedCategory === "Tous") return recipes;
    return recipes.filter((r) => r.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className={`py-12 lg:py-16 bg-cream ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-cream border border-caramel-gold/25 shadow-sm min-w-max">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-caramel-gold ${
                    isSelected
                      ? "bg-caramel-900 text-cream shadow-md"
                      : "text-caramel-900/80 hover:text-caramel-900 hover:bg-caramel-100/70"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
