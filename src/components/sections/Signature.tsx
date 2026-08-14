"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

// 4× duplication for a seamless continuous marquee loop
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

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="product-img-slot group relative flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-115 group-hover:drop-shadow-xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
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
      className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ── Section Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-caramel-900 tracking-tight mb-3">
            Nos Créations & Spécialités
          </h2>

          <p className="text-sm sm:text-base text-caramel-900/70 max-w-lg mx-auto leading-relaxed">
            Découvrez nos saveurs artisanales créées avec passion et minutie
            à Blida depuis 2011.
          </p>
        </div>

        {/* ── Gammes container ── */}
        <div className="flex flex-col gap-10 sm:gap-14 w-full">

          {/* ── Gamme 1 Row ── */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 bg-cream-100/30 rounded-2xl p-4 sm:p-6 border border-caramel-gold/15">
            <div className="flex md:flex-col items-baseline md:items-start justify-between md:justify-center flex-shrink-0 md:w-44 lg:w-48 pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-caramel-gold/20 md:pr-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-caramel-gold font-display">
                Gamme 1
              </span>
              <span className="font-display font-medium text-xs sm:text-sm text-caramel-dark/75 tracking-wide mt-0.5 md:mt-1">
                Crèmes & Pâtes
              </span>
            </div>

            {/* Marquee 1 */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

              <div className="flex items-center w-max gap-6 sm:gap-10 py-3 will-change-transform animate-marquee-ltr [&:has(.product-img-slot:hover)]:[animation-play-state:paused]">
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

          {/* ── Gamme 2 Row ── */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 bg-cream-100/30 rounded-2xl p-4 sm:p-6 border border-caramel-gold/15">
            <div className="flex md:flex-col items-baseline md:items-start justify-between md:justify-center flex-shrink-0 md:w-44 lg:w-48 pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-caramel-gold/20 md:pr-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-caramel-gold font-display">
                Gamme 2
              </span>
              <span className="font-display font-medium text-xs sm:text-sm text-caramel-dark/75 tracking-wide mt-0.5 md:mt-1">
                Nappages & Pro
              </span>
            </div>

            {/* Marquee 2 */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

              <div className="flex items-center w-max gap-6 sm:gap-10 py-3 will-change-transform animate-marquee-ltr [&:has(.product-img-slot:hover)]:[animation-play-state:paused]">
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
        <div className="text-center max-w-2xl mx-auto mt-12 sm:mt-16 mb-8 sm:mb-10 px-2">
          <p className="text-sm sm:text-base md:text-lg text-caramel-dark/85 font-normal leading-relaxed">
            Guidés par la passion et l&apos;exigence, nous sélectionnons les meilleurs
            ingrédients pour vous offrir un caramel d&apos;exception. Une texture
            parfaite, un goût authentique : l&apos;allié incontournable de vos plus
            belles créations.
          </p>
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 border-b-2 border-caramel-gold/70 pb-1 uppercase tracking-widest text-xs sm:text-sm font-bold text-caramel-dark hover:text-caramel-gold hover:border-caramel-gold transition-all duration-300 group"
          >
            <span>Découvrir la Gamme</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-b-2 border-caramel-gold/70 pb-1 uppercase tracking-widest text-xs sm:text-sm font-bold text-caramel-dark hover:text-caramel-gold hover:border-caramel-gold transition-all duration-300 group"
          >
            <span>Catalogue Professionnel</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
