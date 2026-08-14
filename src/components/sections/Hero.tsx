"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface FlavorSlide {
  id: string;
  image: string;
  name: string;
  blobClass: string;
  ambientGlow: string;
}

const flavorSlides: FlavorSlide[] = [
  {
    id: "caramel",
    image: "/multipProduct1.png",
    name: "Caramel Signature",
    blobClass: "bg-caramel-gold/20",
    ambientGlow: "rgba(236, 163, 21, 0.12)",
  },
  {
    id: "noisette",
    image: "/multipProduct2.png",
    name: "Pâte de Noisette",
    blobClass: "bg-[#8B5A2B]/15",
    ambientGlow: "rgba(139, 90, 43, 0.10)",
  },
  {
    id: "pistache",
    image: "/multipProduct3.png",
    name: "Crème de Pistache",
    blobClass: "bg-[#93C572]/18",
    ambientGlow: "rgba(147, 197, 114, 0.12)",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % flavorSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = flavorSlides[activeSlide];

  return (
    <section className="relative flex items-center justify-center bg-cream py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle Background Ambient Halo */}
      <motion.div
        key={`ambient-${current.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: current.ambientGlow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Editorial Headline & Magazine Subtitle with Subtle Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
          >
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[4.25rem] text-caramel-dark leading-[1.1] tracking-tight max-w-2xl">
              TOFFIA — La Passion du{" "}
              <span className="text-caramel-gold font-bold">Caramel</span>{" "}
              depuis 2011
            </h1>

            {/* High-end magazine-style editorial paragraph */}
            <p className="text-lg md:text-xl text-caramel-dark/75 leading-relaxed max-w-lg mt-6">
              L'excellence d'un savoir-faire authentique. Explorez notre{" "}
              <Link
                href="/produits"
                className="font-semibold text-caramel-900 underline underline-offset-4 decoration-caramel-gold/50 hover:decoration-caramel-gold hover:text-caramel-gold transition-all duration-300"
              >
                collection de produits
              </Link>{" "}
              pensée pour les gourmands et les professionnels, ou plongez au cœur
              de{" "}
              <Link
                href="/a-propos"
                className="font-semibold text-caramel-900 underline underline-offset-4 decoration-caramel-gold/50 hover:decoration-caramel-gold hover:text-caramel-gold transition-all duration-300"
              >
                notre histoire
              </Link>
              .
            </p>
          </motion.div>

          {/* Right Column: Product Showcase & Subtle Morphing Glow */}
          <div className="order-2 lg:order-2 lg:col-span-5 relative flex flex-col items-center justify-center w-full min-h-[250px] sm:min-h-[320px] lg:min-h-[460px]">

            {/* Subtle Morphing Blob Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`blob-${current.id}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 0.65, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`w-52 h-52 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full filter blur-[50px] sm:blur-[65px] animate-morph-blob ${current.blobClass}`}
                  aria-hidden="true"
                />
              </AnimatePresence>
            </div>

            {/* Cut-out Product Image */}
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square flex items-center justify-center z-10 animate-float-slow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.88, rotate: 3 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px] flex items-center justify-center"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 768px) 240px, 380px"
                    className="object-contain drop-shadow-[0_15px_25px_rgba(92,37,24,0.16)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
