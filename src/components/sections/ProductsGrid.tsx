"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import { products, productCategories, Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";

export interface ProductsGridProps {
  className?: string;
}

export default function ProductsGrid({ className }: ProductsGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  }, []);

  // Group products by category (excluding "tous")
  const categorizedProducts = useMemo(() => {
    const categoryOrder = productCategories
      .filter((c) => c.id !== "tous")
      .map((c) => c.id);

    return categoryOrder
      .map((catId) => {
        const catMeta = productCategories.find((c) => c.id === catId);
        const items = products.filter((p) => p.category === catId);
        return {
          id: catId,
          label: catMeta?.label || catId,
          products: items,
        };
      })
      .filter((group) => group.products.length > 0);
  }, []);

  return (
    <section className={`pb-16 lg:pb-24 bg-cream ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {categorizedProducts.map((group) => (
            <CategoryRow
              key={group.id}
              label={group.label}
              products={group.products}
              onSelectProduct={handleSelectProduct}
            />
          ))}
        </div>
      </div>

      {/* Modal Detailed Product View */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

/* ─── Category Row with horizontal scroll ────────────────────────── */

interface CategoryRowProps {
  label: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function CategoryRow({ label, products, onSelectProduct }: CategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const showArrow = products.length > 3;

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div>
      {/* Category Title */}
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl font-bold text-caramel-dark border-b border-caramel-gold/20 pb-4 font-display">
          {label}
        </h2>

        {showArrow && (
          <button
            type="button"
            onClick={scrollRight}
            aria-label={`Défiler ${label}`}
            className="w-10 h-10 rounded-full border border-caramel-gold/30 flex items-center justify-center text-caramel-dark hover:bg-caramel-gold/10 hover:border-caramel-gold/60 transition-colors mb-4 ml-4 flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-12 pb-8 hide-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] snap-start"
          >
            <ProductCard product={product} onSelect={onSelectProduct} />
          </div>
        ))}
      </div>
    </div>
  );
}
