"use client";

import React from "react";
import { Product } from "@/data/products";

export interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
  featured?: boolean;
  className?: string;
}

export default function ProductCard({
  product,
  onSelect,
  featured = false,
  className,
}: ProductCardProps) {
  return (
    <article className={className}>
      {/* ProductCard scaffolded stub */}
    </article>
  );
}
