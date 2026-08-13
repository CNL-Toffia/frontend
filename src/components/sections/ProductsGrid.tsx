"use client";

import React from "react";
import { Product } from "@/data/products";

export interface ProductsGridProps {
  products?: Product[];
  onSelectProduct?: (product: Product) => void;
  className?: string;
}

export default function ProductsGrid({
  products,
  onSelectProduct,
  className,
}: ProductsGridProps) {
  return (
    <section className={className}>
      {/* ProductsGrid section scaffolded stub */}
    </section>
  );
}
