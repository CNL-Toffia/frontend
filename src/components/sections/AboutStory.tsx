"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface AboutStoryProps {
  className?: string;
}

export default function AboutStory({ className }: AboutStoryProps) {
  return (
    <section className={`py-12 sm:py-16 bg-cream relative overflow-hidden ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side: Premium Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl shadow-xl overflow-hidden border border-caramel-gold/20 bg-caramel-900/5 group">
              <Image
                src="/caramel1.png"
                alt="Histoire et racines artisanales de CNL Caramel TOFFIA à Blida"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center items-start text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-caramel-dark leading-[1.1] font-display">
              TOFFIA — La passion du Caramel depuis 2011.
            </h2>

            <p className="text-lg md:text-xl text-caramel-dark/80 leading-relaxed max-w-2xl mt-6">
              Fondée en 2011, CNL Caramel s’est rapidement imposée comme une référence algérienne dans la fabrication de caramel et de produits dérivés. Installée à Blida, notre unité de production allie savoir-faire artisanal, technologie moderne et exigence de qualité pour offrir des produits au goût authentique et à la texture irrésistible.

              De cette expertise est née TOFFIA, notre marque phare, reconnue pour son caramel onctueux et ses créations gourmandes destinées aussi bien aux professionnels qu’aux passionnés de pâtisserie. Qu’il s’agisse de caramel liquide, de pâtes à tartiner, de nappages ou de préparations sucrées, chaque produit TOFFIA est le fruit d’un engagement constant envers la qualité, la pureté et la créativité.

              Chez CNL Caramel, nous croyons qu’un caramel d’exception commence par le respect des ingrédients, du temps et du goût.
              Notre mission : faire rayonner l’excellence du caramel algérien, ici et ailleurs.</p>

            <Link
              href="/produits"
              className="inline-flex items-center gap-2 border-b border-caramel-gold pb-1 uppercase tracking-widest text-sm font-semibold text-caramel-dark hover:text-caramel-gold transition-colors duration-300 mt-8 group"
            >
              <span>Découvrir nos créations</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
