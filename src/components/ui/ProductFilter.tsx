"use client";

import React from "react";
import { ProductCategory } from "@/data/products";

export interface ProductFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  categories?: { id: ProductCategory; label: string }[];
}

export default function ProductFilter({
  selectedCategory,
  onSelectCategory,
  categories,
}: ProductFilterProps) {
  return (
    <nav className="product-filter-nav">
      {/* ProductFilter scaffolded stub */}
    </nav>
  );
}
