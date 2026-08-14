"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  Droplet,
  Cookie,
  Sparkles,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import MobileMenu from "./MobileMenu";

export interface NavbarProps {
  currentPath?: string;
  transparent?: boolean;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "caramels-liquides": <Droplet className="w-4 h-4 text-caramel-gold" />,
  "pates-a-tartiner": <Cookie className="w-4 h-4 text-caramel-gold" />,
  nappages: <Sparkles className="w-4 h-4 text-caramel-gold" />,
  "gamme-pro": <ChefHat className="w-4 h-4 text-caramel-gold" />,
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-warm py-3 border-b border-caramel-gold/20"
            : transparent
            ? "bg-transparent py-5"
            : "bg-cream/80 backdrop-blur-sm py-5 border-b border-caramel-gold/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-caramel-gold rounded-xl p-1"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/CnlLogo.png"
                alt="Logo TOFFIA CNL Caramel"
                width={40}
                height={40}
                className="w-10 h-10 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wider text-caramel-900 group-hover:text-caramel-700 transition-colors">
                TOFFIA
              </span>
              <span className="text-[10px] text-caramel-700 font-medium uppercase tracking-[0.2em] -mt-1">
                CNL Caramel · 2011
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive || pathname.startsWith("/produits")
                          ? "text-caramel-900 font-semibold bg-caramel-gold/15"
                          : "text-caramel-900/80 hover:text-caramel-900 hover:bg-caramel-gold/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsDropdownOpen ? "rotate-180 text-caramel-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Framer Motion Dropdown */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1.5 w-72 bg-cream rounded-2xl shadow-warm-lg border border-caramel-gold/25 p-2 z-50 overflow-hidden"
                        >
                          <div className="px-3 py-2 border-b border-caramel-gold/15">
                            <span className="text-[11px] font-semibold text-caramel-700 uppercase tracking-wider">
                              Catégories de Produits
                            </span>
                          </div>

                          <div className="py-1 flex flex-col gap-0.5">
                            {siteConfig.productCategories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={cat.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-caramel-900 hover:bg-caramel-gold/15 hover:text-caramel-900 transition-colors group"
                              >
                                <span className="p-1.5 rounded-lg bg-caramel-100 group-hover:bg-caramel-gold/30 transition-colors">
                                  {categoryIcons[cat.id] || (
                                    <Sparkles className="w-4 h-4 text-caramel-gold" />
                                  )}
                                </span>
                                <span>{cat.name}</span>
                              </Link>
                            ))}
                          </div>

                          <div className="pt-2 mt-1 border-t border-caramel-gold/15">
                            <Link
                              href="/produits"
                              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-caramel-900 bg-caramel-50 hover:bg-caramel-gold/20 transition-colors"
                            >
                              <span>Voir tout le catalogue</span>
                              <ArrowRight className="w-3.5 h-3.5 text-caramel-gold" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-caramel-900 font-semibold bg-caramel-gold/15"
                      : "text-caramel-900/80 hover:text-caramel-900 hover:bg-caramel-gold/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-caramel-gold to-caramel-300 text-caramel-900 text-xs font-bold tracking-wide uppercase shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Découvrir</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-caramel-100 text-caramel-900 hover:bg-caramel-gold/20 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel-gold"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
