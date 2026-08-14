"use client";

import React, { useState, useCallback, useRef } from "react";
import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/ui/RecipeCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 9;

export interface RecipesGridProps {
  className?: string;
}

export default function RecipesGrid({ className }: RecipesGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);
  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const scrollToGrid = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      // Small delay so the DOM re-renders before scrolling
      setTimeout(scrollToGrid, 80);
    },
    [scrollToGrid]
  );

  return (
    <section
      ref={gridRef}
      className={`bg-cream pb-16 scroll-mt-24 ${className || ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {paginatedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Pagination — only visible when more than ITEMS_PER_PAGE recipes */}
        {recipes.length > ITEMS_PER_PAGE && (
          <nav
            aria-label="Pagination des recettes"
            className="mt-16 flex items-center justify-center gap-2"
          >
            {/* Previous Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-caramel-dark border border-caramel-gold/30 rounded-lg hover:bg-caramel-gold/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Précédent</span>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`min-w-[40px] h-10 rounded-lg text-sm font-semibold transition-colors ${
                    page === currentPage
                      ? "bg-caramel-gold text-white shadow-sm"
                      : "text-caramel-dark border border-caramel-gold/30 hover:bg-caramel-gold/10"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-caramel-dark border border-caramel-gold/30 rounded-lg hover:bg-caramel-gold/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
