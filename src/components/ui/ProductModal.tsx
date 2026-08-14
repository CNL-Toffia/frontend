"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Package, Utensils, ShieldCheck, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

export interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-caramel-900/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-cream rounded-3xl shadow-2xl border-2 border-caramel-gold/30 p-6 sm:p-8 overflow-hidden z-10 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-caramel-100 hover:bg-caramel-gold hover:text-caramel-900 text-caramel-900 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-caramel-gold z-20"
              aria-label="Fermer la fiche produit"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Product Visual Showcase (5 cols) */}
              <div className="md:col-span-5 relative">
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-caramel-900/5 border border-caramel-gold/20 shadow-inner">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover object-center"
                    priority
                  />

                  {product.tag && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-royal-500 text-cream text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{product.tag}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-caramel-700">
                    {product.categoryLabel}
                  </span>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-caramel-900 mt-1">
                    {product.name}
                  </h2>

                  <p className="text-sm text-caramel-900/80 leading-relaxed mt-3">
                    {product.description}
                  </p>

                  {/* Attributes Grid */}
                  <div className="grid grid-cols-1 gap-3 mt-5 pt-4 border-t border-caramel-gold/20 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Package className="w-4 h-4 text-caramel-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-caramel-900">
                          Formats & Conditionnements :{" "}
                        </span>
                        <span className="text-caramel-700">
                          {product.sizes.join(", ")}
                        </span>
                      </div>
                    </div>

                    {product.ingredients && (
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-caramel-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-caramel-900">
                            Ingrédients :{" "}
                          </span>
                          <span className="text-caramel-700">
                            {product.ingredients}
                          </span>
                        </div>
                      </div>
                    )}

                    {product.usage && (
                      <div className="flex items-start gap-2.5">
                        <Utensils className="w-4 h-4 text-caramel-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-caramel-900">
                            Conseils d'usage :{" "}
                          </span>
                          <span className="text-caramel-700">
                            {product.usage}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="mt-6 pt-4 border-t border-caramel-gold/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={`/contact?produit=${encodeURIComponent(product.name)}`}
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-caramel-900 text-cream text-xs font-bold hover:bg-caramel-700 hover:text-caramel-gold transition-colors shadow-warm"
                  >
                    <span>Commander / Nous contacter</span>
                    <ArrowRight className="w-4 h-4 text-caramel-gold" />
                  </Link>

                  <button
                    type="button"
                    onClick={onClose}
                    className="py-3 px-5 rounded-full bg-caramel-100 hover:bg-caramel-200/80 text-caramel-900 text-xs font-bold transition-colors text-center"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
