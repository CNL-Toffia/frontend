"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  Droplet,
  Cookie,
  ChefHat,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "caramels-liquides": <Droplet className="w-4 h-4 text-caramel-gold" />,
  "pates-a-tartiner": <Cookie className="w-4 h-4 text-caramel-gold" />,
  nappages: <Sparkles className="w-4 h-4 text-caramel-gold" />,
  "gamme-pro": <ChefHat className="w-4 h-4 text-caramel-gold" />,
};

const containerVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [productsExpanded, setProductsExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-caramel-900 text-cream z-50 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Header with Brand & Close Button */}
            <div className="p-6 border-b border-caramel-700/50 flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-9 h-9 flex-shrink-0">
                  <Image
                    src="/CnlLogo.png"
                    alt="Logo TOFFIA"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-wider text-cream">
                    TOFFIA
                  </span>
                  <span className="text-[10px] text-caramel-300 uppercase tracking-widest -mt-1">
                    CNL Caramel
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-caramel-700/60 hover:bg-caramel-700 flex items-center justify-center text-cream hover:text-caramel-gold transition-colors focus:outline-none focus:ring-2 focus:ring-caramel-gold"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="p-6 flex-1 flex flex-col gap-2">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;

                if (item.dropdown) {
                  return (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      className="flex flex-col"
                    >
                      <button
                        type="button"
                        onClick={() => setProductsExpanded(!productsExpanded)}
                        className={`flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-base font-medium transition-all ${
                          isActive || productsExpanded
                            ? "bg-caramel-700/60 text-caramel-gold"
                            : "text-cream hover:bg-caramel-700/40 hover:text-caramel-gold"
                        }`}
                      >
                        <span className="font-display text-lg tracking-wide">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            productsExpanded ? "rotate-180 text-caramel-gold" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown items accordion */}
                      <AnimatePresence>
                        {productsExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-1"
                          >
                            {siteConfig.productCategories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={cat.href}
                                onClick={onClose}
                                className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-caramel-100 hover:text-cream hover:bg-caramel-700/30 transition-colors"
                              >
                                <span className="p-1.5 rounded-md bg-caramel-700/40">
                                  {categoryIcons[cat.id] || (
                                    <Sparkles className="w-4 h-4 text-caramel-gold" />
                                  )}
                                </span>
                                <span>{cat.name}</span>
                              </Link>
                            ))}
                            <Link
                              href="/produits"
                              onClick={onClose}
                              className="flex items-center justify-between py-2.5 px-3 mt-1 rounded-lg text-xs font-semibold text-caramel-gold hover:bg-caramel-700/40 transition-colors"
                            >
                              <span>Voir tout le catalogue</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block py-3.5 px-4 rounded-xl text-lg font-display tracking-wide transition-all ${
                        isActive
                          ? "bg-caramel-700/60 text-caramel-gold font-semibold"
                          : "text-cream hover:bg-caramel-700/40 hover:text-caramel-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div variants={itemVariants} className="mt-4 pt-4 border-t border-caramel-700/40">
                <Link
                  href="/produits"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-caramel-gold to-caramel-300 text-caramel-900 font-semibold shadow-warm hover:brightness-105 transition-all text-sm"
                >
                  <span>Explorer nos produits</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            {/* Quick Contact & Info footer */}
            <div className="p-6 bg-caramel-950/40 border-t border-caramel-700/40 flex flex-col gap-3 text-xs text-caramel-100">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2.5 hover:text-caramel-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-caramel-gold flex-shrink-0" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-caramel-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-caramel-gold flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-caramel-300/80 pt-1">
                <MapPin className="w-4 h-4 text-caramel-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
