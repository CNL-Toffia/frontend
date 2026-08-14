"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Eye, Package } from "lucide-react";
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
  className = "",
}: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`group relative rounded-3xl bg-cream border-2 border-caramel-gold/25 shadow-warm hover:shadow-warm-lg hover:border-caramel-gold/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden cursor-pointer ${className}`}
      onClick={() => onSelect?.(product)}
    >
      {/* Top badges bar */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <span className="px-3 py-1 rounded-full bg-caramel-100/90 text-caramel-900 text-[11px] font-bold uppercase tracking-wider">
          {product.categoryLabel}
        </span>

        {product.tag && (
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              product.tag.toLowerCase().includes("best")
                ? "bg-royal-500 text-cream"
                : "bg-gradient-to-r from-caramel-gold to-caramel-700 text-caramel-900"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{product.tag}</span>
          </span>
        )}
      </div>

      {/* Product Image Frame */}
      <div className="relative h-52 sm:h-56 w-full rounded-2xl overflow-hidden bg-caramel-900/5 my-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-caramel-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-caramel-900 font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-caramel-gold" />
            <span>Voir la fiche</span>
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-caramel-900 leading-snug group-hover:text-caramel-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-caramel-900/75 leading-relaxed mt-1.5 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Formats & Action */}
        <div className="mt-4 pt-4 border-t border-caramel-gold/15 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-caramel-700 font-semibold">
            <Package className="w-3.5 h-3.5 text-caramel-gold flex-shrink-0" />
            <span className="truncate">{product.sizes.join(" · ")}</span>
          </div>

          <button
            type="button"
            className="w-8 h-8 rounded-full bg-caramel-100 group-hover:bg-caramel-gold group-hover:text-caramel-900 text-caramel-900 flex items-center justify-center transition-colors flex-shrink-0"
            aria-label={`Détails ${product.name}`}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
