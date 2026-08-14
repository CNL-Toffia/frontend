"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Quote } from "lucide-react";

export interface AboutMissionProps {
  className?: string;
}

export default function AboutMission({ className }: AboutMissionProps) {
  return (
    <section
      className={`py-20 lg:py-28 bg-caramel-900 text-cream relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-caramel-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-700/60 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-gold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Notre Raison d'Être</span>
          </div>

          <Quote className="w-12 h-12 text-caramel-gold/40 mb-6" />

          {/* Core Mission Statement */}
          <blockquote className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight tracking-tight mb-8">
            « Faire rayonner l'excellence du caramel algérien. »
          </blockquote>

          <p className="text-base sm:text-xl text-caramel-100/85 font-normal leading-relaxed max-w-2xl mb-10">
            Notre ambition est de prouver au quotidien qu'un caramel d'exception,
            alliant pureté des saveurs, texture irréprochable et maîtrise technique,
            peut naître et grandir en Algérie pour inspirer gourmands et
            créateurs gastronomiques.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/produits"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-caramel-gold via-caramel-500 to-caramel-700 text-caramel-900 font-bold text-sm shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Découvrir nos créations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-caramel-700/60 hover:bg-caramel-700 text-cream font-semibold text-sm border border-caramel-gold/30 transition-all duration-200"
            >
              <span>Nous contacter</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
