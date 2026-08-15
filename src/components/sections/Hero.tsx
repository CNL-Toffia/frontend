"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

export interface FlavorSlide {
  id: string;
  image: string;
  name: string;
  name_ar: string;
  tag: string;
  tag_ar: string;
}

const flavorSlides: FlavorSlide[] = [
  {
    id: "caramel",
    image: "/multipProduct1.png",
    name: "Caramel Signature",
    name_ar: "كراميل سيغناتور",
    tag: "Artisanal & Fondant",
    tag_ar: "حرفي وذائب",
  },
  {
    id: "noisette",
    image: "/multipProduct2.png",
    name: "Pâte de Noisette",
    name_ar: "عجينة البندق الفاخرة",
    tag: "100% Saveur Intense",
    tag_ar: "نكهة غنية 100%",
  },
  {
    id: "pistache",
    image: "/multipProduct3.png",
    name: "Crème de Pistache",
    name_ar: "كريمة الفستق",
    tag: "Onctuosité Noble",
    tag_ar: "نعومة فائقة",
  },
];

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isAr = locale === "ar";
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % flavorSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const current = flavorSlides[activeSlide];

  return (
    <section className="relative flex items-center justify-center pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* ── Soft Luxury Warm Ambient Light ── */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none opacity-70 transition-all duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 163, 21, 0.28) 0%, rgba(217, 164, 104, 0.16) 45%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── Left Column: Editorial Headline & Inline Clickable Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right w-full"
          >
            {/* Clean, Modern Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-[3.65rem] text-caramel-dark leading-[1.12] tracking-tight max-w-xl">
              {t("titlePart1")} <br /> {t("titlePart2")}{" "}
              <span className="text-caramel-gold">{t("titleHighlight")}</span>{" "}
              {t("titlePart3")}
            </h1>

            {/* Editorial Description with Clickable Inline Links */}
            <p className="text-base sm:text-lg md:text-xl text-caramel-dark/80 leading-relaxed max-w-lg mt-6 font-normal">
              {t("descriptionPrefix")}{" "}
              <Link
                href="/produits"
                className="font-bold text-caramel-900 underline underline-offset-4 decoration-caramel-gold/60 hover:text-caramel-gold hover:decoration-caramel-gold transition-colors duration-200"
              >
                {t("productsLink")}
              </Link>{" "}
              {t("descriptionMiddle")}{" "}
              <Link
                href="/a-propos"
                className="font-bold text-caramel-900 underline underline-offset-4 decoration-caramel-gold/60 hover:text-caramel-gold hover:decoration-caramel-gold transition-colors duration-200"
              >
                {t("storyLink")}
              </Link>
              {t("descriptionSuffix")}
            </p>
          </motion.div>

          {/* ── Right Column: Clean Large Product Image Showcase ── */}
          <div className="order-2 lg:order-2 lg:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Main Product Showcase Container */}
            <div className="relative w-full max-w-lg sm:max-w-xl aspect-[16/11] sm:aspect-[16/10] flex items-center justify-center">
              {/* Soft Golden Glow Ring behind image */}
              <div className="absolute inset-4 bg-caramel-gold/15 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={current.image}
                    alt={
                      isAr
                        ? `تشكيلة ${current.name_ar} توفيا سي إن إل كراميل`
                        : `Gamme ${current.name} TOFFIA CNL Caramel`
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-contain object-center drop-shadow-[0_16px_28px_rgba(92,37,24,0.18)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
