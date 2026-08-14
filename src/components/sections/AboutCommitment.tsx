"use client";

import React from "react";
import { Sparkles, Flame, Cpu, ShieldCheck } from "lucide-react";
import ValueCard from "@/components/ui/ValueCard";

export interface AboutCommitmentProps {
  className?: string;
}

export default function AboutCommitment({ className }: AboutCommitmentProps) {
  const pillars = [
    {
      title: "Savoir-Faire Artisanal",
      description:
        "Des recettes élaborées avec la plus grande exigence, fidèles au geste artisanal et aux temps de cuisson nécessaires à une caramélisation parfaite.",
      icon: Flame,
    },
    {
      title: "Technologie Moderne",
      description:
        "Des outils de production de pointe garantissant une régularité technique absolue, une texture veloutée et les plus hauts standards d'hygiène alimentaire.",
      icon: Cpu,
    },
    {
      title: "Ingrédients Sélectionnés",
      description:
        "Des matières premières nobles rigoureusement sélectionnées — pistaches d'exception, noisettes torréfiées et arachides pures — pour un goût authentique.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      className={`py-20 lg:py-28 bg-caramel-50/60 border-y border-caramel-gold/15 relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
            <span>Nos Piliers Fondateurs</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 leading-tight mb-4">
            Notre Engagement
          </h2>

          <p className="text-base sm:text-lg text-caramel-900/75 leading-relaxed">
            Chaque pot, chaque seau et chaque création TOFFIA repose sur trois
            exigences immuables garantissant notre signature gustative unique.
          </p>
        </div>

        {/* 3 Pillars Grid with Staggered Cascade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ValueCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
