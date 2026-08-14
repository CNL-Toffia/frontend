import React from "react";
import { Metadata } from "next";
import { Sparkles, History, Award, Heart } from "lucide-react";
import AboutStory from "@/components/sections/AboutStory";
import AboutCommitment from "@/components/sections/AboutCommitment";
import AboutMission from "@/components/sections/AboutMission";

export const metadata: Metadata = {
  title: "Notre Histoire & Savoir-Faire",
  description:
    "Découvrez l'histoire de CNL Caramel, fondée en 2011 à Blida. Notre engagement artisanal, la sélection rigoureuse des ingrédients et notre mission pour le rayonnement du caramel algérien.",
  openGraph: {
    title: "Notre Histoire & Savoir-Faire | TOFFIA — CNL Caramel",
    description:
      "Depuis 2011, nous façonnons avec fierté l'excellence du caramel artisanal algérien.",
    url: "https://toffiacaramel-dz.com/a-propos",
    images: [
      {
        url: "/caramel1.png",
        width: 1200,
        height: 630,
        alt: "Atelier et histoire TOFFIA CNL Caramel",
      },
    ],
  },
  alternates: {
    canonical: "https://toffiacaramel-dz.com/a-propos",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-cream">
      {/* Mini Hero Header */}
      <section className="relative pt-12 pb-14 lg:pt-20 lg:pb-16 bg-gradient-to-b from-caramel-100/50 via-caramel-50/30 to-cream border-b border-caramel-gold/15 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4 shadow-sm">
            <History className="w-4 h-4 text-caramel-gold" />
            <span>Maison Fondée en 2011</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-caramel-900 leading-tight mb-4">
            Notre Histoire
          </h1>

          <p className="text-base sm:text-xl text-caramel-900/80 max-w-2xl mx-auto leading-relaxed mb-8">
            L'aventure d'un savoir-faire passionné au cœur de Blida, au service du
            goût authentique et de la gourmandise algérienne.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-caramel-900/80 pt-4 border-t border-caramel-gold/20 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-caramel-gold" />
              <span>Blida, Algérie</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-caramel-gold" />
              <span>Plus de 15 Ans de Passion</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-royal-500" />
              <span>Fabrication 100% Locale</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Narrative & Origin */}
      <AboutStory />

      {/* 2. Three Pillars of Commitment */}
      <AboutCommitment />

      {/* 3. Bold Mission Statement */}
      <AboutMission />
    </main>
  );
}
