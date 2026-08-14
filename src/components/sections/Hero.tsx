"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export interface FlavorSlide {
  id: string;
  image: string;
  name: string;
  blobClass: string;
  accent: string;
}

const flavorSlides: FlavorSlide[] = [
  {
    id: "caramel",
    image: "/product1.png",
    name: "Caramel Signature",
    blobClass: "bg-caramel-gold/30",
    accent: "#ECA315",
  },
  {
    id: "noisette",
    image: "/product2.png",
    name: "Pâte de Noisette",
    blobClass: "bg-[#8B5A2B]/20",
    accent: "#8B5A2B",
  },
  {
    id: "pistache",
    image: "/product3.png",
    name: "Crème de Pistache",
    blobClass: "bg-[#93C572]/20",
    accent: "#93C572",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % flavorSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = flavorSlides[activeSlide];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-cream pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Soft Global Ambient Light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-caramel-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 100% Static Editorial Brand Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Brand Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100/90 border border-caramel-gold/30 shadow-sm mb-6 sm:mb-8">
              <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-900">
                Maison Fondée en 2011 · Blida, Algérie
              </span>
            </div>

            {/* Static Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[4.25rem] text-caramel-900 leading-[1.08] tracking-tight mb-6 max-w-2xl">
              TOFFIA — La Passion du{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caramel-900 via-caramel-700 to-caramel-gold">
                Caramel
              </span>{" "}
              depuis 2011
            </h1>

            {/* Static Subtitle */}
            <p className="text-lg sm:text-2xl text-caramel-900/80 font-normal leading-relaxed max-w-xl mb-10">
              Un caramel artisanal algérien, pensé pour les gourmands et les
              professionnels.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/produits"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-caramel-900 text-cream font-bold text-base shadow-warm hover:bg-caramel-700 hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Découvrir nos produits</span>
                <ArrowRight className="w-5 h-5 text-caramel-gold" />
              </Link>

              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-caramel-900 font-semibold text-base border border-caramel-900/25 hover:border-caramel-900/50 hover:bg-caramel-100/60 transition-all duration-200"
              >
                <span>Notre Histoire</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Flavor-Specific Rotating Showcase & Morphing Blob */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
            
            {/* Morphing Organic Blob constrained strictly behind the product */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`blob-${current.id}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 0.85, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full filter blur-[75px] sm:blur-[85px] animate-morph-blob ${current.blobClass}`}
                  aria-hidden="true"
                />
              </AnimatePresence>
            </div>

            {/* Cut-out Product Image sitting cleanly in front with fluid float */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center z-10 animate-float-slow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] flex items-center justify-center"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtle Flavor Indicator Pills */}
            <div className="mt-4 flex items-center gap-2 z-20">
              {flavorSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className="group py-2 px-1 focus:outline-none"
                  aria-label={`Afficher ${slide.name}`}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      activeSlide === idx
                        ? "w-8 bg-caramel-900"
                        : "w-2.5 bg-caramel-900/20 group-hover:bg-caramel-900/40"
                    }`}
                  />
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
