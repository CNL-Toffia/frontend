"use client";

import React from "react";
import { ProductCategory, productCategories } from "@/data/products";

export interface ProductFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  productCounts?: Record<ProductCategory, number>;
}

export default function ProductFilter({
  selectedCategory,
  onSelectCategory,
  productCounts,
}: ProductFilterProps) {
  return (
    <div className="w-full flex items-center justify-start lg:justify-center overflow-x-auto pb-4 pt-1 scrollbar-none">
      <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-cream border border-caramel-gold/25 shadow-sm min-w-max">
        {productCategories.map((category) => {
          const isSelected = selectedCategory === category.id;
          const count = productCounts ? productCounts[category.id] : null;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id as ProductCategory)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-caramel-gold ${
                isSelected
                  ? "bg-caramel-900 text-cream shadow-md"
                  : "text-caramel-900/80 hover:text-caramel-900 hover:bg-caramel-100/70"
              }`}
            >
              <span>{category.label}</span>
              {count !== null && count !== undefined && count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? "bg-caramel-gold text-caramel-900"
                      : "bg-caramel-100 text-caramel-700"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
