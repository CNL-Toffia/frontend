"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface AboutStoryProps {
  className?: string;
}

export default function AboutStory({ className }: AboutStoryProps) {
  return (
    <section className={`bg-cream relative overflow-hidden ${className || ""}`}>
      {/* Editorial 2-Row Alternating Magazine Container */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-4 py-16">

        {/* ── Row 1: Image/Main Logo Left, Text Right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Main Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-square rounded-xl overflow-hidden flex items-center justify-center p-8 sm:p-12">
              <Image
                src="/CnlLogo.png"
                alt="Logo officiel CNL Caramel TOFFIA"
                width={380}
                height={380}
                className="object-contain max-h-64 sm:max-h-80 w-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Nos Racines Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center items-start text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-caramel-dark leading-[1.1] mb-6 font-display">
              Nos Racines
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-caramel-dark/80 leading-relaxed max-w-xl">
              <p>
                Née à Blida en 2011, l&apos;histoire de CNL Caramel est celle d&apos;une passion authentique pour la confiserie et l&apos;artisanat d&apos;excellence. Ce qui a commencé comme une quête rigoureuse du goût parfait et de la texture irrésistible s&apos;est rapidement transformé en une véritable référence algérienne.
              </p>
              <p>
                De cette expertise et de cet amour du métier est née notre marque phare, TOFFIA. Fièrement ancrée dans son terroir, notre unité de production façonne jour après jour des caramels liquides, des crèmes onctueuses, des nappages et des pâtes gourmandes. Qu&apos;il s&apos;agisse d&apos;accompagner les artisans pâtissiers et restaurateurs les plus exigeants ou d&apos;émerveiller les passionnés à la maison, nous mettons notre savoir-faire au service de créations authentiques et généreuses.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Row 2: Text Left, Second Image Right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column (Text): order-2 md:order-1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 flex flex-col justify-center items-start text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-caramel-dark leading-[1.1] mb-6 font-display">
              Maison Fondée en 2011
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-caramel-dark/80 leading-relaxed max-w-xl">
              <p>
                Profondément ancrée dans ses origines, notre maison perpétue un savoir-faire unique qui allie la noblesse des méthodes traditionnelles à la précision des technologies modernes.
              </p>
              <p>
                Chez CNL Caramel, nous croyons fermement qu&apos;un caramel d&apos;exception naît du respect absolu des ingrédients, du temps et du goût. De la sélection rigoureuse de nos matières premières (noisettes, pistaches, cacahuètes torréfiées et ingrédients de premier choix) jusqu&apos;à la maîtrise parfaite des cuissons, chaque étape est pensée avec exigence. Notre engagement quotidien : maintenir une qualité irréprochable tout en faisant rayonner l&apos;excellence du caramel algérien, ici et ailleurs.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Second Image): order-1 md:order-2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 w-full"
          >
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-square rounded-xl overflow-hidden">
              <Image
                src="/caramel1.png"
                alt="Savoir-faire et fabrication artisanale TOFFIA"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
