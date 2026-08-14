import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import BentoProducts from "@/components/sections/BentoProducts";
import RecipesCarousel from "@/components/sections/RecipesCarousel";

export const metadata: Metadata = {
  title: "TOFFIA — La Passion du Caramel depuis 2011 | CNL Caramel",
  description:
    "Découvrez TOFFIA, caramels, pâtes à tartiner et nappages artisanaux algériens depuis 2011. Crème caramel, pistache, noisette et gamme professionnelle.",
  openGraph: {
    title: "TOFFIA — La Passion du Caramel depuis 2011 | CNL Caramel",
    description:
      "Maison artisanale fondée en 2011 à Blida. Caramels fondants, crèmes de pistache et nappages d'exception.",
    images: [
      {
        url: "/caramel3.png",
        width: 1200,
        height: 630,
        alt: "TOFFIA — La Passion du Caramel",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* 1. Hero Section (GSAP entrance animation & visual showcase) */}
      <Hero />

      {/* 2. Section Découverte (Teaser histoire & savoir-faire Blida 2011) */}
      <AboutPreview />

      {/* 3. Bento Grid (Nos 3 Best-sellers incontournables) */}
      <BentoProducts />

      {/* 4. Carrousel Recettes (Inspirations gourmandes & pro) */}
      <RecipesCarousel />
    </main>
  );
}
