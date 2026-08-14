"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, ShieldCheck, HeartHandshake } from "lucide-react";

export interface FactoryProps {
  className?: string;
}

export default function Factory({ className }: FactoryProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 tracking-tight leading-[1.15] mb-4">
            L&apos;Art du Caramel d&apos;Exception
          </h2>

          <p className="text-base sm:text-lg text-caramel-900/75 leading-relaxed">
            De la confiserie d&apos;art aux préparations pour grands chefs, chaque pot TOFFIA
            célèbre la noblesse des saveurs pures et l&apos;onctuosité absolue.
          </p>
        </div>

        {/* ── Editorial Commercial Showcase Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Main Campaign Hero Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-2xl border-2 border-caramel-gold/30 bg-caramel-900/5 flex flex-col justify-end min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]"
          >
            <Image
              src="/ad-banner-1.jpg"
              alt="Campagne publicitaire TOFFIA — Gâteau gourmand et tourbillon de caramel doré"
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Ambient luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-caramel-950/85 via-caramel-950/20 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-royal-red text-cream text-xs font-bold uppercase tracking-wider shadow-md">
                Sélection Signature
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 text-cream">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-gold mb-1 block">
                Pure Onctuosité & Caramélisation Maîtrisée
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream leading-snug mb-2">
                Le Geste Parfait pour Vos Desserts
              </h3>
              <p className="text-sm text-caramel-100/90 leading-relaxed max-w-lg mb-6 line-clamp-2 sm:line-clamp-none">
                Élaboré avec du sucre pure canne caramélisé à cœur, du beurre doux et des arômes nobles pour sublimer tartes, entremets et pâtisseries fines.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/recettes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-caramel-gold text-caramel-900 font-bold text-xs sm:text-sm shadow-warm hover:bg-caramel-300 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Inspirations Recettes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/produits"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream/20 hover:bg-cream/30 text-cream backdrop-blur-md text-xs sm:text-sm font-semibold border border-cream/30 transition-all duration-200"
                >
                  <span>Voir la gamme</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Secondary Campaign Card & Quality Value Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between">

            {/* Second Advertising Visual */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden shadow-xl border-2 border-caramel-gold/30 bg-caramel-900/5 min-h-[240px] sm:min-h-[280px] flex-1 flex flex-col justify-end"
            >
              <Image
                src="/ad-banner-2.jpg"
                alt="Pots d'exception TOFFIA Caramel et Crème de Pistache"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-caramel-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 p-5 sm:p-6 text-cream">
                <span className="text-[11px] font-bold uppercase tracking-widest text-caramel-gold mb-1 block">
                  Pots Gourmands & Formats Professionnels
                </span>
                <h4 className="font-display font-bold text-xl text-cream">
                  Crème de Pistache & Caramel Salé
                </h4>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
