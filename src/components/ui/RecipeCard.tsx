"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Recipe } from "@/data/recipes";

export interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export default function RecipeCard({
  recipe,
  className = "",
}: RecipeCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${className}`}
    >
      {/* Image Container: Clean Flat Editorial Frame */}
      <div className="overflow-hidden rounded-xl aspect-[4/5] relative mb-6 bg-caramel-900/5">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Recipe Title below Image */}
      <h3 className="text-2xl font-bold text-caramel-dark leading-snug font-display">
        {recipe.title}
      </h3>

      {/* Subtle Editorial Description */}
      {recipe.description && (
        <p className="text-sm text-caramel-dark/70 leading-relaxed mt-2">
          {recipe.description}
        </p>
      )}
    </motion.article>
  );
}
