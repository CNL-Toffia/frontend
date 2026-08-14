"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export interface BentoProductsProps {
  className?: string;
}

export default function BentoProducts({ className }: BentoProductsProps) {
  return (
    <section
      className={`py-20 lg:py-28 bg-cream relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
            <span>Sélection Signature</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 leading-tight mb-4">
            Nos incontournables
          </h2>

          <p className="text-base sm:text-lg text-caramel-900/75 leading-relaxed">
            Plébiscitées par les foyers gourmands et les artisans pâtissiers,
            découvrez les trois créations emblématiques de la maison TOFFIA.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Featured Main Card (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group rounded-3xl bg-gradient-to-br from-caramel-50 to-caramel-100/60 border-2 border-caramel-gold/30 shadow-warm hover:shadow-warm-lg p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden relative"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-caramel-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-royal-500 text-cream text-xs font-bold uppercase tracking-wider mb-2">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Best-Seller N°1</span>
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-caramel-900">
                  Crème Caramel
                </h3>
                <p className="text-xs font-semibold text-caramel-700 mt-0.5">
                  Formats disponibles : 400g / 2kg
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-cream border border-caramel-gold/30 flex items-center justify-center text-caramel-900 shadow-sm flex-shrink-0">
                <Sparkles className="w-6 h-6 text-caramel-gold" />
              </div>
            </div>

            {/* Visual showcase */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-caramel-900/5 my-2">
              <Image
                src="/caramel2.png"
                alt="Crème Caramel TOFFIA pot 400g et 2kg"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-caramel-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <p className="text-sm text-caramel-900/80 max-w-sm">
                La référence absolue : texture onctueuse, dorée et fondante,
                idéale pour napper crêpes, tartines et entremets.
              </p>

              <Link
                href="/produits"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-caramel-900 text-cream text-xs font-bold hover:bg-caramel-700 hover:text-caramel-gold transition-colors flex-shrink-0 shadow-sm"
              >
                <span>Voir la fiche</span>
                <ArrowRight className="w-3.5 h-3.5 text-caramel-gold" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Stack: Cards 2 & 3 (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Card 2: Crème de Pistache */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl bg-cream border-2 border-caramel-gold/30 shadow-warm hover:shadow-warm-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-md bg-caramel-100 text-caramel-900 text-[11px] font-bold uppercase tracking-wider">
                    Coup de Cœur
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-caramel-900 mt-1">
                    Crème de Pistache
                  </h3>
                  <p className="text-xs text-caramel-700">Pot gourmand 200g</p>
                </div>

                <Link
                  href="/produits"
                  className="w-9 h-9 rounded-full bg-caramel-100 group-hover:bg-caramel-gold group-hover:text-caramel-900 text-caramel-900 flex items-center justify-center transition-colors"
                  aria-label="Voir Crème de Pistache"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative h-40 w-full rounded-xl overflow-hidden bg-caramel-900/5 mb-3">
                <Image
                  src="/caramel4.png"
                  alt="Crème de Pistache gourmande TOFFIA"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <p className="text-xs text-caramel-900/80 leading-relaxed">
                Une pâte d'exception alliant la douceur lactée à la puissance
                aromatique des pistaches nobles torréfiées.
              </p>
            </motion.div>

            {/* Card 3: Caramel Mou aux Amandes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl bg-cream border-2 border-caramel-gold/30 shadow-warm hover:shadow-warm-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-md bg-caramel-100 text-caramel-900 text-[11px] font-bold uppercase tracking-wider">
                    Tradition
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-caramel-900 mt-1">
                    Caramel Mou aux Amandes
                  </h3>
                  <p className="text-xs text-caramel-700">Confiserie fine & pots</p>
                </div>

                <Link
                  href="/produits"
                  className="w-9 h-9 rounded-full bg-caramel-100 group-hover:bg-caramel-gold group-hover:text-caramel-900 text-caramel-900 flex items-center justify-center transition-colors"
                  aria-label="Voir Caramel Mou aux Amandes"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative h-40 w-full rounded-xl overflow-hidden bg-caramel-900/5 mb-3">
                <Image
                  src="/caramel3.png"
                  alt="Caramel mou aux amandes torréfiées TOFFIA"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <p className="text-xs text-caramel-900/80 leading-relaxed">
                L'équilibre parfait entre le fondant du caramel au beurre doux
                et le croquant généreux d'amandes entières dorées.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Catalog Discovery Banner */}
        <div className="text-center">
          <Link
            href="/produits"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-caramel-900 text-cream font-bold text-sm shadow-warm hover:bg-caramel-700 hover:text-caramel-gold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Explorer l'ensemble du catalogue (8 créations)</span>
            <ArrowRight className="w-4 h-4 text-caramel-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
