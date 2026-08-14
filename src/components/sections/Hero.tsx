"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";

export interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const headline = "TOFFIA — La Passion du Caramel depuis 2011";
  const words = headline.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }

      if (titleWordsRef.current.length > 0) {
        tl.fromTo(
          titleWordsRef.current,
          { opacity: 0, y: 40, rotateX: -20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.08 },
          "-=0.4"
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center bg-cream pt-28 pb-20 lg:pt-40 lg:pb-28 ${
        className || ""
      }`}
    >
      {/* Soft ambient glow — no image, pure color atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-caramel-gold/12 via-caramel-300/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-royal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        {/* Top pill badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-caramel-100/90 border border-caramel-gold/35 shadow-sm mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-caramel-900">
            Maison Fondée en 2011 · Blida, Algérie
          </span>
        </div>

        {/* H1 — Word-by-word GSAP reveal */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[5.5rem] text-caramel-900 leading-[1.05] tracking-tight mb-8 max-w-4xl">
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
                className={`inline-block mr-3 ${
                  isHighlight
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-caramel-900 via-caramel-700 to-caramel-gold"
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
          className="text-xl sm:text-2xl text-caramel-900/70 font-normal leading-relaxed max-w-2xl mb-12"
        >
          Un caramel artisanal algérien d'exception, pensé pour les gourmands
          et les maîtres pâtissiers. Des textures onctueuses. Des saveurs
          authentiques.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/produits"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-caramel-900 text-cream font-bold text-base shadow-warm hover:bg-caramel-700 hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Découvrir nos produits</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/a-propos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-caramel-900 font-semibold text-base border border-caramel-900/25 hover:border-caramel-900/50 hover:bg-caramel-100/60 transition-all duration-200"
          >
            <span>Notre Histoire</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
