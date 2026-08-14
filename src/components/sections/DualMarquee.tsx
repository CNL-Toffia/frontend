"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { Sparkles, ArrowRight, Utensils } from "lucide-react";

export interface DualMarqueeProps {
  className?: string;
}

// Images available in public/
const images = [
  { src: "/caramel1.png", alt: "Créations artisanales TOFFIA — atelier" },
  { src: "/caramel2.png", alt: "Crème Caramel TOFFIA en pot" },
  { src: "/caramel3.png", alt: "Caramel fondant TOFFIA" },
  { src: "/caramel4.png", alt: "Crème de Pistache TOFFIA" },
  { src: "/CnlLogo.png", alt: "TOFFIA — CNL Caramel" },
];

// Triple duplication for seamless looping
const topRow = [...images, ...images, ...images];
const bottomRow = [...images, ...images, ...images];

const CARD_W = 260; // px
const GAP = 20; // px
const STEP = (CARD_W + GAP) * images.length; // one set width in px

function MarqueeRow({
  items,
  direction = "left",
  duration = 30,
}: {
  items: typeof topRow;
  direction?: "left" | "right";
  duration?: number;
}) {
  const controls = useAnimationControls();
  const isRunning = useRef(true);

  const startAnim = () => {
    controls.start({
      x: direction === "left" ? [-STEP, 0] : [0, -STEP],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
    isRunning.current = true;
  };

  React.useEffect(() => {
    startAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePause = () => {
    controls.stop();
    isRunning.current = false;
  };

  const handleResume = () => {
    if (!isRunning.current) startAnim();
  };

  const initialX = direction === "left" ? 0 : -STEP;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <motion.div
        animate={controls}
        initial={{ x: initialX }}
        className="flex items-center"
        style={{ gap: `${GAP}px`, width: "max-content" }}
      >
        {items.map((img, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
            style={{ width: CARD_W, height: 200 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="260px"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              draggable={false}
            />
            {/* Subtle vignette for depth */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-caramel-900/8 pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function DualMarquee({ className }: DualMarqueeProps) {
  return (
    <section
      className={`py-20 lg:py-28 bg-cream border-t border-caramel-gold/15 relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100/90 border border-caramel-gold/25 text-[11px] font-bold uppercase tracking-widest text-caramel-900 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
          <span>Sélection Signature</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 tracking-tight mb-4 leading-tight">
          Nos Créations & Spécialités
        </h2>

        <p className="text-base sm:text-lg text-caramel-900/65 max-w-xl mx-auto leading-relaxed">
          Découvrez la diversité de nos gammes, élaborées avec des ingrédients nobles
          au cœur de Blida depuis 2011.
        </p>
      </div>

      {/* Top Marquee — Left to Right */}
      <MarqueeRow items={topRow} direction="right" duration={32} />

      {/* 16px spacer between tracks */}
      <div className="h-4" />

      {/* Bottom Marquee — Right to Left */}
      <MarqueeRow items={bottomRow} direction="left" duration={26} />

      {/* Dual Call-to-Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="/produits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-caramel-900 text-cream font-bold text-sm sm:text-base shadow-warm hover:bg-caramel-700 hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Voir tous nos produits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/recettes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent text-caramel-900 font-semibold text-sm sm:text-base border border-caramel-900/25 hover:border-caramel-900/50 hover:bg-caramel-100/60 transition-all duration-200"
          >
            <Utensils className="w-4 h-4 text-caramel-gold" />
            <span>Découvrir nos recettes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
