"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col items-center bg-transparent ${className}`}
    >
      {/* Product Name — ABOVE Image */}
      <h3 className="text-xl font-bold text-caramel-dark mb-4 text-center font-display leading-snug">
        {product.name}
      </h3>

      {/* Product Image — floating clean, no background */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
          className="object-contain object-center hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Subtle Short Description */}
      <p className="text-sm text-caramel-dark/65 leading-relaxed mt-4 text-center line-clamp-2 max-w-[260px]">
        {product.shortDescription}
      </p>

      {/* Sizes */}
      <span className="text-xs text-caramel-gold font-semibold mt-2 tracking-wide">
        {product.sizes.join(" · ")}
      </span>
    </motion.article>
  );
}
