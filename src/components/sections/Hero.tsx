"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart } from "lucide-react";
import { gsap } from "@/lib/gsap";

export interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  const headline = "TOFFIA — La Passion du Caramel depuis 2011";
  const words = headline.split(" ");

  useEffect(() => {
    // GSAP Timeline for Hero Entrance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Initial visual container fade-in & scale
      tl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2 }
      );

      // 2. Title staggered word-by-word reveal
      if (titleWordsRef.current.length > 0) {
        tl.fromTo(
          titleWordsRef.current,
          { opacity: 0, y: 35, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.07,
          },
          "-=0.9"
        );
      }

      // 3. Subtitle fade & slide
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
      }

      // 4. CTA buttons bounce in
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3"
        );
      }

      // 5. Trust badges reveal
      if (badgesRef.current) {
        tl.fromTo(
          badgesRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-cream pt-10 pb-16 lg:py-24 ${
        className || ""
      }`}
    >
      {/* Ambient background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-caramel-gold/15 via-caramel-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-royal-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100/80 border border-caramel-gold/30 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-caramel-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-caramel-900">
                Maison Fondée en 2011 · Blida, Algérie
              </span>
            </div>

            {/* H1 Title with word-by-word reveal */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-caramel-900 leading-[1.12] tracking-tight mb-6">
              {words.map((word, i) => {
                const isHighlight =
                  word.toLowerCase().includes("passion") ||
                  word.toLowerCase().includes("caramel");
                return (
                  <span
                    key={i}
                    ref={(el) => {
                      titleWordsRef.current[i] = el;
                    }}
                    className={`inline-block mr-2.5 ${
                      isHighlight
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-caramel-900 via-caramel-700 to-caramel-gold font-extrabold"
                        : "text-caramel-900"
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-caramel-900/80 font-normal leading-relaxed max-w-xl mb-8"
            >
              Un caramel artisanal algérien d'exception, pensé pour les gourmands
              et les maîtres pâtissiers. Des textures fondantes et des saveurs
              authentiques cuisinées à la perfection.
            </p>

            {/* Action Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link
                href="/produits"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-caramel-gold via-caramel-500 to-caramel-700 text-caramel-900 font-bold text-base shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Découvrir nos produits</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-cream hover:bg-caramel-100/60 text-caramel-900 font-semibold text-base border border-caramel-gold/40 shadow-sm hover:border-caramel-gold transition-all duration-200"
              >
                <span>Notre Histoire</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div
              ref={badgesRef}
              className="pt-6 border-t border-caramel-gold/20 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold text-caramel-900/75"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-caramel-gold" />
                <span>100% Savoir-Faire Artisanal</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-caramel-gold" />
                <span>Ingrédients Rigoureusement Sélectionnés</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-royal-500" />
                <span>Fierté Algérienne</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div
            ref={visualRef}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Warm circular glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-caramel-gold/30 via-caramel-700/20 to-royal-500/10 rounded-3xl blur-2xl transform scale-95" />

            {/* Main Visual Frame */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden bg-gradient-to-b from-caramel-100 to-caramel-50 border-2 border-caramel-gold/30 shadow-warm-lg p-3 group">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-caramel-900/5">
                <Image
                  src="/caramel3.png"
                  alt="Caramel fondant et onctueux TOFFIA cuit à point"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-cream/90 backdrop-blur-md border border-caramel-gold/30 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-caramel-900 flex items-center justify-center text-caramel-gold shadow-sm flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-caramel-900">
                        Crème Caramel Signature
                      </p>
                      <p className="text-[11px] text-caramel-700">
                        Texture onctueuse & goût authentique
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-royal-500 text-cream text-[10px] font-bold tracking-wider uppercase">
                    Best-Seller
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
