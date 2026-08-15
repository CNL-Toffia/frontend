import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Signature from "@/components/sections/Signature";
import Factory from "@/components/sections/Factory";
import PageTransition from "@/components/ui/PageTransition";
import { Analytics } from "@vercel/analytics/next";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <Analytics />

      {/* 1. Typography-focused Hero */}
      <Hero />

      {/* Elegant Section Divider */}
      <div className="w-11/12 max-w-5xl mx-auto border-t border-caramel-gold/20 my-8" />

      {/* 2. Dual Scrolling Image Marquee */}
      <Signature />

      {/* Elegant Section Divider */}
      <div className="w-11/12 max-w-5xl mx-auto border-t border-caramel-gold/20 my-8" />

      {/* 3. Factory & Savoir-faire Showcase */}
      <Factory />
    </PageTransition>
  );
}
