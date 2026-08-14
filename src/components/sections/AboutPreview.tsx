"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Flame, CheckCircle2 } from "lucide-react";

export interface AboutPreviewProps {
  className?: string;
}

export default function AboutPreview({ className }: AboutPreviewProps) {
  return (
    <section
      className={`py-20 lg:py-28 bg-caramel-50/50 relative overflow-hidden border-y border-caramel-gold/15 ${
        className || ""
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image showcase with warm frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-caramel-gold/25 via-caramel-700/15 to-transparent blur-md" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-caramel-gold/30 bg-cream shadow-warm-lg">
                <div className="relative h-[340px] sm:h-[420px] w-full">
                  <Image
                    src="/caramel1.png"
                    alt="Atelier et savoir-faire de fabrication CNL Caramel TOFFIA"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Floating Heritage Badge */}
                <div className="absolute top-4 left-4 py-2 px-3.5 rounded-xl bg-caramel-900/90 text-cream backdrop-blur-md border border-caramel-gold/30 shadow-md flex items-center gap-2">
                  <Flame className="w-4 h-4 text-caramel-gold" />
                  <span className="text-xs font-semibold tracking-wide">
                    Cuisson Traditionnelle
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 py-2 px-3.5 rounded-xl bg-cream/95 text-caramel-900 backdrop-blur-md border border-caramel-gold/30 shadow-md flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-caramel-gold" />
                  <span className="text-xs font-bold">Blida · Depuis 2011</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
              <span>Notre Origine</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 leading-tight mb-6">
              Une passion née à Blida
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-caramel-900/80 leading-relaxed mb-6">
              Depuis 2011, <strong>CNL Caramel</strong> façonne des caramels et
              pâtes gourmandes qui allient savoir-faire artisanal et exigence
              professionnelle. Chaque recette TOFFIA est pensée pour révéler
              l'authenticité et la noblesse du caramel algérien.
            </p>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream border border-caramel-gold/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-caramel-900">
                    Savoir-Faire Artisanal
                  </h4>
                  <p className="text-xs text-caramel-700/80 mt-0.5">
                    Respect du geste traditionnel et maîtrise minutieuse des
                    températures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream border border-caramel-gold/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-caramel-900">
                    Matières Nobles
                  </h4>
                  <p className="text-xs text-caramel-700/80 mt-0.5">
                    Pistaches, noisettes et arachides sélectionnées pour une
                    saveur intense.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-CTA link */}
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-sm font-bold text-caramel-900 hover:text-caramel-700 group transition-colors"
            >
              <span>En savoir plus sur notre histoire</span>
              <ArrowRight className="w-4 h-4 text-caramel-gold group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
