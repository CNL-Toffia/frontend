import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import DualMarquee from "@/components/sections/DualMarquee";

export const metadata: Metadata = {
  title: "Accueil | TOFFIA — La Passion du Caramel depuis 2011",
  description:
    "Découvrez TOFFIA, caramels artisanaux, pâtes à tartiner et nappages gastronomiques algériens depuis 2011 à Blida. Crème caramel, crème de pistache et gamme professionnelle.",
  openGraph: {
    title: "TOFFIA — La Passion du Caramel depuis 2011 | CNL Caramel",
    description:
      "Maison artisanale fondée en 2011 à Blida. Caramels fondants, crèmes de pistache et nappages d'exception.",
    url: "https://toffiacaramel-dz.com",
    images: [
      {
        url: "/caramel3.png",
        width: 1200,
        height: 630,
        alt: "Caramel d'exception TOFFIA",
      },
    ],
  },
  alternates: {
    canonical: "https://toffiacaramel-dz.com",
  },
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* 1. Typography-focused Hero — pure beige, no background image */}
      <Hero />

      {/* 2. Dual Scrolling Image Marquee with dual CTAs */}
      <DualMarquee />
    </main>
  );
}
