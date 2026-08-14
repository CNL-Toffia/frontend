"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, History, MapPin, Award, CheckCircle2 } from "lucide-react";

export interface AboutStoryProps {
  className?: string;
}

export default function AboutStory({ className }: AboutStoryProps) {
  return (
    <section className={`py-16 lg:py-24 bg-cream ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-caramel-gold/30 via-caramel-700/20 to-transparent blur-md" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-caramel-gold/30 bg-cream shadow-warm-lg p-3">
                <div className="relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-caramel-900/5">
                  <Image
                    src="/caramel1.png"
                    alt="Atelier de fabrication et histoire de CNL Caramel TOFFIA"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>

                {/* Floating Heritage Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream/95 backdrop-blur-md border border-caramel-gold/30 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-caramel-900 flex items-center justify-center text-caramel-gold shadow-sm flex-shrink-0">
                      <History className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-caramel-900">
                        Fondée en 2011 à Blida
                      </p>
                      <p className="text-[11px] text-caramel-700">
                        15+ années d'excellence artisanale
                      </p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-caramel-gold animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4">
              <MapPin className="w-3.5 h-3.5 text-caramel-gold" />
              <span>Origine & Racines</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 leading-tight mb-6">
              Une ambition née au cœur du terroir de Blida
            </h2>

            <p className="text-base sm:text-lg text-caramel-900/85 leading-relaxed mb-6">
              Fondée en <strong>2011 à Blida</strong>, la société{" "}
              <strong>CNL Caramel</strong> est née d'une conviction simple : le
              caramel mérite d'être travaillé avec la même rigueur, la même
              passion et les mêmes matières nobles qu'un grand produit de haute
              gastronomie.
            </p>

            <p className="text-sm sm:text-base text-caramel-900/75 leading-relaxed mb-8">
              Depuis plus d'une décennie, notre marque <strong>TOFFIA</strong>{" "}
              façonne des crèmes onctueuses, des caramels fondants et des pâtes à
              tartiner d'exception. Nous accompagnons aussi bien les familles
              gourmandes dans leur quotidien que les plus grands artisans
              boulangers, pâtissiers et glaciers d'Algérie.
            </p>

            {/* Milestones / Key Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-caramel-gold/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-caramel-900">
                    Maîtrise du Goût Authentique
                  </h4>
                  <p className="text-xs text-caramel-700 mt-0.5">
                    Caramélisation lente au beurre doux et arômes naturels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-caramel-900">
                    Partenaire des Professionnels
                  </h4>
                  <p className="text-xs text-caramel-700 mt-0.5">
                    Stabilité technique et conditionnements adaptés aux ateliers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
