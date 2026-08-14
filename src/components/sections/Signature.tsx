"use client";

import React, { useState } from "react";
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

// 4× duplication for seamless continuous marquee loop
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

function ProductImage({
  itemKey,
  src,
  alt,
  isActive,
  onToggleActive,
  onHover,
}: {
  itemKey: string;
  src: string;
  alt: string;
  isActive: boolean;
  onToggleActive: (key: string) => void;
  onHover: (hovered: boolean) => void;
}) {
  return (
    <div
      className="product-img-slot group relative flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center cursor-pointer select-none touch-manipulation"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={(e) => {
        e.stopPropagation();
        onToggleActive(itemKey);
      }}
    >
      <div
        className={`relative w-full h-full p-2 transition-transform duration-500 ease-out ${
          isActive ? "scale-120 sm:scale-125 z-30" : "group-hover:scale-115"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
          className="object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function Signature({ className }: SignatureProps) {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [activeItem1, setActiveItem1] = useState<string | null>(null);
  const [activeItem2, setActiveItem2] = useState<string | null>(null);

  const handleToggle1 = (key: string) => {
    setActiveItem1((prev) => (prev === key ? null : key));
  };

  const handleToggle2 = (key: string) => {
    setActiveItem2((prev) => (prev === key ? null : key));
  };

  const isPaused1 = hovered1 || activeItem1 !== null;
  const isPaused2 = hovered2 || activeItem2 !== null;

  return (
    <section
      className={`py-14 sm:py-18 lg:py-24 relative overflow-hidden ${
        className || ""
      }`}
      onClick={() => {
        setActiveItem1(null);
        setActiveItem2(null);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

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
        <div className="flex flex-col gap-8 sm:gap-12 w-full">

          {/* ── Gamme 1 Row ── */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-cream-100/40 rounded-3xl p-5 sm:p-7 border border-caramel-gold/20 shadow-sm">
            <div className="flex md:flex-col items-baseline md:items-start justify-between md:justify-center flex-shrink-0 md:w-44 lg:w-52 pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-caramel-gold/25 md:pr-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-caramel-gold font-display">
                Gamme 1
              </span>
              <span className="font-display font-semibold text-xs sm:text-sm text-caramel-dark/80 tracking-wide mt-0.5 md:mt-1">
                Crèmes & Pâtes
              </span>
            </div>

            {/* Marquee 1 */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

              <div
                className="flex items-center w-max gap-8 sm:gap-14 py-4 will-change-transform animate-marquee-ltr"
                style={{ animationPlayState: isPaused1 ? "paused" : "running" }}
              >
                {track1.map((item, idx) => {
                  const key = `t1-${item.id}-${idx}`;
                  return (
                    <ProductImage
                      key={key}
                      itemKey={key}
                      src={item.src}
                      alt={item.alt}
                      isActive={activeItem1 === key}
                      onToggleActive={handleToggle1}
                      onHover={setHovered1}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Gamme 2 Row ── */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-cream-100/40 rounded-3xl p-5 sm:p-7 border border-caramel-gold/20 shadow-sm">
            <div className="flex md:flex-col items-baseline md:items-start justify-between md:justify-center flex-shrink-0 md:w-44 lg:w-52 pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-caramel-gold/25 md:pr-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-caramel-gold font-display">
                Gamme 2
              </span>
              <span className="font-display font-semibold text-xs sm:text-sm text-caramel-dark/80 tracking-wide mt-0.5 md:mt-1">
                Nappages & Pro
              </span>
            </div>

            {/* Marquee 2 */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

              <div
                className="flex items-center w-max gap-8 sm:gap-14 py-4 will-change-transform animate-marquee-ltr"
                style={{ animationPlayState: isPaused2 ? "paused" : "running" }}
              >
                {track2.map((item, idx) => {
                  const key = `t2-${item.id}-${idx}`;
                  return (
                    <ProductImage
                      key={key}
                      itemKey={key}
                      src={item.src}
                      alt={item.alt}
                      isActive={activeItem2 === key}
                      onToggleActive={handleToggle2}
                      onHover={setHovered2}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ── Corporate Narrative ── */}
        <div className="text-center max-w-2xl mx-auto mt-14 sm:mt-18 mb-8 sm:mb-10 px-2">
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
