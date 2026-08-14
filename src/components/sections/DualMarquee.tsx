"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Utensils } from "lucide-react";

export interface DualMarqueeProps {
  className?: string;
}

// Bare cut-out product assets without background boxes
const productItems = [
  { id: "p1", src: "/product1.png", alt: "Crème Caramel TOFFIA" },
  { id: "p2", src: "/product2.png", alt: "Pâte à Tartiner TOFFIA" },
  { id: "p3", src: "/product3.png", alt: "Gamme Professionnelle TOFFIA" },
  { id: "p4", src: "/caramel2.png", alt: "Spécialité Gourmande TOFFIA" },
  { id: "p5", src: "/caramel4.png", alt: "Crème de Pistache TOFFIA" },
];

// Repeat 4 times for a seamless continuous flow
const topTrack = [...productItems, ...productItems, ...productItems, ...productItems];
const bottomTrack = [...productItems.slice().reverse(), ...productItems.slice().reverse(), ...productItems.slice().reverse(), ...productItems.slice().reverse()];

export default function DualMarquee({ className }: DualMarqueeProps) {
  const [isTopPaused, setIsTopPaused] = useState(false);
  const [isBottomPaused, setIsBottomPaused] = useState(false);

  return (
    <section
      className={`py-20 lg:py-28 bg-cream border-t border-caramel-gold/15 relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100/90 border border-caramel-gold/25 text-[11px] font-bold uppercase tracking-widest text-caramel-900 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
          <span>Sélection Signature</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 tracking-tight mb-4 leading-tight">
          Nos Créations & Spécialités
        </h2>

        <p className="text-base sm:text-lg text-caramel-900/65 max-w-xl mx-auto leading-relaxed">
          Découvrez nos saveurs artisanales créées avec passion et minutie
          à Blida depuis 2011.
        </p>
      </div>

      {/* Track 1: Left to Right — Sparse & Large (3 items visible on desktop), Bare Images Only */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsTopPaused(true)}
        onMouseLeave={() => setIsTopPaused(false)}
      >
        <motion.div
          className="flex items-center w-max gap-12 sm:gap-16 lg:gap-24"
          animate={{
            x: isTopPaused ? undefined : ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {topTrack.map((item, idx) => (
            <div
              key={`top-${item.id}-${idx}`}
              className="relative flex-shrink-0 w-[70vw] sm:w-[45vw] lg:w-[28vw] h-64 sm:h-80 lg:h-96 flex items-center justify-center cursor-pointer group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, 30vw"
                  className="object-contain drop-shadow-xl transition-transform duration-400 ease-out group-hover:scale-120 group-hover:drop-shadow-2xl"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Spacing between rows */}
      <div className="h-6 sm:h-10" />

      {/* Track 2: Right to Left — Sparse & Large, Bare Images Only */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsBottomPaused(true)}
        onMouseLeave={() => setIsBottomPaused(false)}
      >
        <motion.div
          className="flex items-center w-max gap-12 sm:gap-16 lg:gap-24"
          animate={{
            x: isBottomPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
        >
          {bottomTrack.map((item, idx) => (
            <div
              key={`bottom-${item.id}-${idx}`}
              className="relative flex-shrink-0 w-[70vw] sm:w-[45vw] lg:w-[28vw] h-64 sm:h-80 lg:h-96 flex items-center justify-center cursor-pointer group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, 30vw"
                  className="object-contain drop-shadow-xl transition-transform duration-400 ease-out group-hover:scale-120 group-hover:drop-shadow-2xl"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dual Call-to-Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="/produits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-caramel-900 text-cream font-bold text-sm sm:text-base shadow-warm hover:bg-caramel-700 hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Voir tous nos produits</span>
            <ArrowRight className="w-4 h-4 text-caramel-gold" />
          </Link>

          <Link
            href="/recettes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent text-caramel-900 font-semibold text-sm sm:text-base border border-caramel-900/25 hover:border-caramel-900/50 hover:bg-caramel-100/60 transition-all duration-200"
          >
            <Utensils className="w-4 h-4 text-caramel-gold" />
            <span>Découvrir nos recettes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
