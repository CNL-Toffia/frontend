"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Droplet,
  Cookie,
  Sparkles,
  ChefHat,
  Globe,
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

// A slightly darker than cream hover token that reads clearly against bg-cream
const NAV_HOVER = "hover:bg-[#EBE3D5]";
const NAV_ACTIVE = "bg-[#EBE3D5] border-caramel-gold/30";
const NAV_BASE = "bg-transparent border-transparent";

export default function Navbar({ transparent = false }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand — Far Left */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-gold rounded-xl p-1 flex-shrink-0"
          >
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/CnlLogo.png"
                alt="Logo TOFFIA CNL Caramel"
                width={80}
                height={80}
                className="w-20 h-20 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation — Centered, transparent by default */}
          <nav className="hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isActive || pathname.startsWith("/produits")
                          ? `text-caramel-900 ${NAV_ACTIVE}`
                          : `text-caramel-900/75 ${NAV_BASE} ${NAV_HOVER} hover:text-caramel-900 hover:border-caramel-gold/20`
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`text-[11px] font-black text-caramel-gold inline-block transition-transform duration-200 leading-none ${
                          productsDropdownOpen ? "rotate-90" : ""
                        }`}
                      >
                        &rsaquo;
                      </span>
                    </Link>

                    {/* Floating Dropdown — categories only */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-68 bg-cream/98 backdrop-blur-xl rounded-2xl shadow-xl shadow-caramel-900/8 border border-caramel-gold/20 p-2 z-50 overflow-hidden"
                        >
                          <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-caramel-gold/35 to-transparent" />

                          <div className="px-3 pt-2.5 pb-2">
                            <span className="text-[10px] font-bold text-caramel-700/80 uppercase tracking-widest">
                              Explorer par catégorie
                            </span>
                          </div>

                          <div className="flex flex-col gap-0.5">
                            {siteConfig.productCategories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={cat.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-caramel-900/85 hover:bg-[#EBE3D5] hover:text-caramel-900 transition-all duration-150 group/item"
                              >
                                <span className="w-7 h-7 rounded-lg bg-caramel-100 group-hover/item:bg-caramel-gold/25 flex items-center justify-center transition-colors duration-150 text-caramel-gold">
                                  {categoryIcons[cat.id] || (
                                    <Sparkles className="w-3.5 h-3.5" />
                                  )}
                                </span>
                                <span>{cat.name}</span>
                              </Link>
                            ))}
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
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? `text-caramel-900 ${NAV_ACTIVE}`
                      : `text-caramel-900/75 ${NAV_BASE} ${NAV_HOVER} hover:text-caramel-900 hover:border-caramel-gold/20`
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: Language Switcher — refined pill design */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-transparent border border-caramel-900/15 text-xs font-bold text-caramel-900/75 hover:bg-[#EBE3D5] hover:text-caramel-900 hover:border-caramel-gold/25 transition-all duration-200"
              aria-label="Changer de langue — actuellement Français"
            >
              <Globe className="w-3.5 h-3.5 text-caramel-gold" />
              <span className="tracking-wider">FR</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-[#EBE3D5] text-caramel-900 hover:bg-caramel-100 border border-caramel-gold/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-gold"
              aria-label="Ouvrir le menu de navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
