"use client";

import React from "react";
import { Product } from "@/data/products";

export interface BentoProductsProps {
  products?: Product[];
  onSelectProduct?: (product: Product) => void;
  className?: string;
}

export default function BentoProducts({
  products,
  onSelectProduct,
  className,
}: BentoProductsProps) {
  return (
    <section className={className}>
      {/* BentoProducts section scaffolded stub */}
    </section>
  );
}
