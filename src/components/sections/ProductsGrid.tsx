"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search } from "lucide-react";
import { products, ProductCategory, Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import ProductFilter from "@/components/ui/ProductFilter";
import ProductModal from "@/components/ui/ProductModal";

export interface ProductsGridProps {
  className?: string;
}

export default function ProductsGrid({ className }: ProductsGridProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("categorie") as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    categoryParam && ["caramels-liquides", "pates-a-tartiner", "nappages", "gamme-pro"].includes(categoryParam)
      ? categoryParam
      : "tous"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Compute category counts
  const productCounts = useMemo(() => {
    const counts: Record<ProductCategory, number> = {
      tous: products.length,
      "caramels-liquides": 0,
      "pates-a-tartiner": 0,
      nappages: 0,
      "gamme-pro": 0,
    };

    products.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "tous" || product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <section className={`py-12 lg:py-20 bg-cream ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar: Category Filters & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Filter Pills */}
          <ProductFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            productCounts={productCounts}
          />

          {/* Quick Search */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-caramel-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une création..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-cream border border-caramel-gold/30 text-xs sm:text-sm text-caramel-900 placeholder:text-caramel-900/50 focus:outline-none focus:ring-2 focus:ring-caramel-gold focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Results Counter / Category Status */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-caramel-gold/15 text-xs text-caramel-700 font-semibold">
          <span>
            Affichage de {filteredProducts.length} produit
            {filteredProducts.length > 1 ? "s" : ""}
          </span>

          <span className="flex items-center gap-1.5 text-caramel-900">
            <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
            <span>Fabrication 100% Algérienne à Blida</span>
          </span>
        </div>

        {/* Animated Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleSelectProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search / Filter State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-caramel-100 flex items-center justify-center text-caramel-700 mb-4">
              <Search className="w-8 h-8 text-caramel-gold" />
            </div>
            <h3 className="font-display font-bold text-xl text-caramel-900 mb-2">
              Aucun produit ne correspond à votre recherche
            </h3>
            <p className="text-sm text-caramel-700 max-w-md mb-6">
              Essayez de modifier votre mot-clé ou sélectionnez une autre
              catégorie de produits.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("tous");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-caramel-900 text-cream text-xs font-bold hover:bg-caramel-700 hover:text-caramel-gold transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Modal Detailed Product View */}
        <ProductModal
          product={selectedProduct}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </section>
  );
}
