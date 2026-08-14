"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Utensils } from "lucide-react";

export interface DualMarqueeProps {
  className?: string;
}

// Gamme 1: Crèmes et Spécialités
const gamme1Products = [
  { id: "g1-1", src: "/product1.png", alt: "Crème Caramel TOFFIA" },
  { id: "g1-2", src: "/product2.png", alt: "Pâte de Noisette TOFFIA" },
  { id: "g1-3", src: "/caramel2.png", alt: "Spécialité Gourmande TOFFIA" },
];

// Gamme 2: Gamme Pro et Nappages
const gamme2Products = [
  { id: "g2-1", src: "/product3.png", alt: "Gamme Professionnelle TOFFIA" },
  { id: "g2-2", src: "/caramel4.png", alt: "Crème de Pistache TOFFIA" },
  { id: "g2-3", src: "/caramel1.png", alt: "Caramel Liquide Pâtissier TOFFIA" },
];

// Replicate for seamless infinite marquee loop
const track1 = [...gamme1Products, ...gamme1Products, ...gamme1Products, ...gamme1Products];
const track2 = [...gamme2Products, ...gamme2Products, ...gamme2Products, ...gamme2Products];

export default function DualMarquee({ className }: DualMarqueeProps) {
  const [isTopPaused, setIsTopPaused] = useState(false);
  const [isBottomPaused, setIsBottomPaused] = useState(false);

  return (
    <section
      className={`pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-cream relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Heavily Constrained Centered Container (max-w-4xl) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100/90 border border-caramel-gold/25 text-[11px] font-bold uppercase tracking-widest text-caramel-900 mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
            <span>Sélection Signature</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-caramel-900 tracking-tight mb-3">
            Nos Créations & Spécialités
          </h2>

          <p className="text-sm sm:text-base text-caramel-900/65 max-w-md mx-auto leading-relaxed">
            Découvrez nos saveurs artisanales créées avec passion et minutie
            à Blida depuis 2011.
          </p>
        </div>

        {/* Marquee Row 1: Gamme 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-14 sm:mb-18 lg:mb-20 py-2">
          {/* Elegant Badge for Gamme 1 */}
          <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-center flex-shrink-0 sm:w-28 sm:pr-3 sm:border-r sm:border-caramel-gold/25">
            <span className="text-[10px] font-black uppercase tracking-widest text-caramel-gold">
              Gamme 1
            </span>
            <span className="font-display font-bold text-xs sm:text-sm text-caramel-900 leading-tight">
              Crèmes & Pâtes
            </span>
          </div>

          {/* Marquee 1 (Left to Right) */}
          <div
            className="relative flex-1 overflow-hidden py-2"
            onMouseEnter={() => setIsTopPaused(true)}
            onMouseLeave={() => setIsTopPaused(false)}
          >
            {/* Edge fades */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-center w-max gap-8 sm:gap-14"
              animate={{
                x: isTopPaused ? undefined : ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 24,
                  ease: "linear",
                },
              }}
            >
              {track1.map((item, idx) => (
                <div
                  key={`t1-${item.id}-${idx}`}
                  className="relative flex-shrink-0 w-36 sm:w-44 lg:w-48 h-36 sm:h-44 lg:h-48 flex items-center justify-center cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-contain drop-shadow-md transition-all duration-500 ease-in-out group-hover:scale-115 group-hover:drop-shadow-xl"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee Row 2: Gamme 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-14 sm:mb-18 lg:mb-20 py-2">
          {/* Elegant Badge for Gamme 2 */}
          <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-center flex-shrink-0 sm:w-28 sm:pr-3 sm:border-r sm:border-caramel-gold/25">
            <span className="text-[10px] font-black uppercase tracking-widest text-caramel-gold">
              Gamme 2
            </span>
            <span className="font-display font-bold text-xs sm:text-sm text-caramel-900 leading-tight">
              Nappages & Pro
            </span>
          </div>

          {/* Marquee 2 (Right to Left) */}
          <div
            className="relative flex-1 overflow-hidden py-2"
            onMouseEnter={() => setIsBottomPaused(true)}
            onMouseLeave={() => setIsBottomPaused(false)}
          >
            {/* Edge fades */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-center w-max gap-8 sm:gap-14"
              animate={{
                x: isBottomPaused ? undefined : ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 22,
                  ease: "linear",
                },
              }}
            >
              {track2.map((item, idx) => (
                <div
                  key={`t2-${item.id}-${idx}`}
                  className="relative flex-shrink-0 w-36 sm:w-44 lg:w-48 h-36 sm:h-44 lg:h-48 flex items-center justify-center cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-contain drop-shadow-md transition-all duration-500 ease-in-out group-hover:scale-115 group-hover:drop-shadow-xl"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Corporate Narrative Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 px-4">
          <p className="text-base sm:text-lg text-caramel-dark/85 font-normal leading-relaxed">
            Guidés par la passion et l'exigence, nous sélectionnons les meilleurs
            ingrédients pour vous offrir un caramel d'exception. Une texture
            parfaite, un goût authentique : l'allié incontournable de vos plus
            belles créations.
          </p>
        </div>

        {/* Centered Dual Call-to-Action with Generous Gap */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-center pt-2">
          <Link
            href="/produits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-caramel-900 text-cream font-bold text-sm shadow-warm hover:bg-caramel-700 hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Voir tous nos produits</span>
            <ArrowRight className="w-4 h-4 text-caramel-gold" />
          </Link>

          <Link
            href="/recettes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-transparent text-caramel-900 font-semibold text-sm border border-caramel-900/25 hover:border-caramel-900/50 hover:bg-caramel-100/60 transition-all duration-200"
          >
            <Utensils className="w-4 h-4 text-caramel-gold" />
            <span>Découvrir nos recettes</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
