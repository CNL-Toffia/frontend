"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, productCategories, Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export interface ProductsGridProps {
  className?: string;
}

export default function ProductsGrid({ className }: ProductsGridProps) {
  const t = useTranslations("categories");

  // Group products by category (excluding "tous")
  const categorizedProducts = useMemo(() => {
    const categoryOrder = productCategories
      .filter((c) => c.id !== "tous")
      .map((c) => c.id);

    return categoryOrder
      .map((catId) => {
        const items = products.filter((p) => p.category === catId);
        return {
          id: catId,
          products: items,
        };
      })
      .filter((group) => group.products.length > 0);
  }, []);

  // Smooth scroll handler for both hash (#category-id) and query (?categorie=...)
  useEffect(() => {
    const scrollToTarget = () => {
      const hash = window.location.hash.replace("#", "");
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("categorie");
      const targetId = hash || catParam;

      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Execute on initial render
    const timer = setTimeout(scrollToTarget, 150);
    window.addEventListener("hashchange", scrollToTarget);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, []);

  return (
    <section className={`pb-16 lg:pb-24 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {categorizedProducts.map((group) => (
            <CategoryRow
              key={group.id}
              id={group.id}
              label={t(group.id as any)}
              products={group.products}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Category Row with horizontal scroll ────────────────────────── */

interface CategoryRowProps {
  id: string;
  label: string;
  products: Product[];
}

function CategoryRow({ id, label, products }: CategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const showArrow = products.length > 3;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div id={id} className="scroll-mt-28 sm:scroll-mt-36">
      {/* Category Title & Navigation Buttons */}
      <div className="flex items-end justify-between mb-8 border-b border-caramel-gold/20 pb-4">
        <h2 className="text-3xl font-bold text-caramel-dark font-display">
          {label}
        </h2>

        {showArrow && (
          <div className="flex items-center gap-2 mb-0 ml-4 rtl:ml-0 rtl:mr-4 flex-shrink-0">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label={`Précédent ${label}`}
              className="w-10 h-10 rounded-full border border-caramel-gold/30 flex items-center justify-center text-caramel-dark hover:bg-caramel-gold/15 hover:border-caramel-gold/70 transition-colors shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label={`Suivant ${label}`}
              className="w-10 h-10 rounded-full border border-caramel-gold/30 flex items-center justify-center text-caramel-dark hover:bg-caramel-gold/15 hover:border-caramel-gold/70 transition-colors shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
