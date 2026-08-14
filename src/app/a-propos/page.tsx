import React from "react";
import { Metadata } from "next";
import AboutStory from "@/components/sections/AboutStory";
import AboutMission from "@/components/sections/AboutMission";

export const metadata: Metadata = {
  title: "Notre Histoire & Savoir-Faire | TOFFIA — CNL Caramel",
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
    <main className="flex-1 flex flex-col w-full">
      {/* Editorial Hero Header */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-caramel-dark leading-[1.1] tracking-tight">
            Notre Histoire
          </h1>
        </div>
      </section>

      {/* Merged Section: Nos Racines — Maison Fondée en 2011 */}
      <AboutStory />

      {/* Mission Statement */}
      <AboutMission />
    </main>
  );
}
