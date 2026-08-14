"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface FactoryProps {
  className?: string;
}

export default function Factory({ className }: FactoryProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-cream relative overflow-hidden ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Factory Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-caramel-gold/20 bg-caramel-900/5 group">
              <Image
                src="/caramel1.png"
                alt="Unité de production CNL Caramel TOFFIA à Blida"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Factory Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 flex flex-col justify-center items-start text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-caramel-dark leading-tight font-display tracking-tight">
              Au Cœur de CNL Caramel
            </h2>

            <p className="text-lg text-caramel-dark/80 leading-relaxed max-w-xl mt-6">
              Installée à Blida, notre unité de production allie savoir-faire artisanal, technologie moderne et une exigence stricte de qualité. C&apos;est ici que naît la texture irrésistible et le goût authentique de chaque produit TOFFIA.
            </p>

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 border-b border-caramel-gold pb-1 uppercase tracking-widest text-sm font-semibold text-caramel-dark hover:text-caramel-gold transition-colors duration-300 mt-8 group"
            >
              <span>Découvrir notre histoire</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
