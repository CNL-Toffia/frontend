"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface SignatureProps {
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

// 4× duplication for a seamless infinite loop
const track1 = [
  ...gamme1Products,
  ...gamme1Products,
  ...gamme1Products,
  ...gamme1Products,
];
const track2 = [
  ...gamme2Products,
  ...gamme2Products,
  ...gamme2Products,
  ...gamme2Products,
];

/* ─────────────────────────────────────────────
   ProductImage
   • Self-contained slot with "product-img-slot" sentinel class
   • Scales smoothly on group-hover without clipping
   • Pauses track when hovered via [&:has(.product-img-slot:hover)]
   ───────────────────────────────────────────── */
function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="product-img-slot group relative flex-shrink-0 w-36 sm:w-44 lg:w-48 h-36 sm:h-44 lg:h-48 flex items-center justify-center overflow-visible cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.25] group-hover:z-50 group-hover:drop-shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 150px, 200px"
          className="object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function Signature({ className }: SignatureProps) {
  return (
    <section
      className={`pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-cream relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* ── Section Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-caramel-900 tracking-tight mb-3">
            Nos Créations & Spécialités
          </h2>

          <p className="text-sm sm:text-base text-caramel-900/65 max-w-md mx-auto leading-relaxed">
            Découvrez nos saveurs artisanales créées avec passion et minutie
            à Blida depuis 2011.
          </p>
        </div>

        {/* ── Gammes container — gap-32 forces massive visual separation ── */}
        <div className="flex flex-col gap-32 w-full">

          {/* ── Gamme 1 row ── */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-2">
            <div className="flex flex-col items-start justify-center flex-shrink-0 sm:w-44 md:w-52 sm:pr-4 sm:border-r sm:border-caramel-gold/25">
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-caramel-gold font-display">
                Gamme 1
              </span>
              <span className="font-display font-medium text-xs sm:text-sm text-caramel-900/70 tracking-wide mt-1">
                Crèmes & Pâtes
              </span>
            </div>

            {/* Marquee 1 (Left to Right, 40s duration, generous py-12 to prevent zoom clipping) */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

              <div className="flex items-center w-max gap-8 sm:gap-14 py-12 will-change-transform animate-marquee-ltr [&:has(.product-img-slot:hover)]:[animation-play-state:paused]">
                {track1.map((item, idx) => (
                  <ProductImage
                    key={`t1-${item.id}-${idx}`}
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Gamme 2 row ── */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-2">
            <div className="flex flex-col items-start justify-center flex-shrink-0 sm:w-44 md:w-52 sm:pr-4 sm:border-r sm:border-caramel-gold/25">
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-caramel-gold font-display">
                Gamme 2
              </span>
              <span className="font-display font-medium text-xs sm:text-sm text-caramel-900/70 tracking-wide mt-1">
                Nappages & Pro
              </span>
            </div>

            {/* Marquee 2 (Unified Left to Right flow, 40s duration, py-12, hover-pause) */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

              <div className="flex items-center w-max gap-8 sm:gap-14 py-12 will-change-transform animate-marquee-ltr [&:has(.product-img-slot:hover)]:[animation-play-state:paused]">
                {track2.map((item, idx) => (
                  <ProductImage
                    key={`t2-${item.id}-${idx}`}
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Corporate Narrative ── */}
        <div className="text-center max-w-2xl mx-auto mt-20 sm:mt-24 mb-10 sm:mb-12 px-4">
          <p className="text-base sm:text-lg text-caramel-dark/85 font-normal leading-relaxed">
            Guidés par la passion et l'exigence, nous sélectionnons les meilleurs
            ingrédients pour vous offrir un caramel d'exception. Une texture
            parfaite, un goût authentique : l'allié incontournable de vos plus
            belles créations.
          </p>
        </div>

        {/* ── Premium Underlined Action Buttons (No Fill, Separated with gap-8) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 text-center">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 border-b border-caramel-gold pb-1 uppercase tracking-widest text-sm font-semibold text-caramel-dark hover:text-caramel-gold transition-colors duration-300 group"
          >
            <span>Découvrir la Gamme</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-b border-caramel-gold pb-1 uppercase tracking-widest text-sm font-semibold text-caramel-dark hover:text-caramel-gold transition-colors duration-300 group"
          >
            <span>Catalogue Professionnel</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
