"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  index?: number;
  className?: string;
}

export default function ValueCard({
  title,
  description,
  icon: Icon,
  index = 0,
  className = "",
}: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group rounded-3xl bg-cream border-2 border-caramel-gold/25 shadow-warm hover:shadow-warm-lg hover:border-caramel-gold/60 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${className}`}
    >
      <div>
        {/* Icon Emblem */}
        <div className="w-14 h-14 rounded-2xl bg-caramel-100/80 border border-caramel-gold/30 flex items-center justify-center text-caramel-900 group-hover:bg-caramel-gold group-hover:text-caramel-900 transition-colors duration-300 shadow-sm mb-6">
          <Icon className="w-7 h-7" />
        </div>

        {/* Pillar Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-caramel-900 leading-snug mb-3">
          {title}
        </h3>

        {/* Pillar Description */}
        <p className="text-sm text-caramel-900/80 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-caramel-gold/15 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-caramel-gold" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-caramel-700">
          Engagement Qualité TOFFIA
        </span>
      </div>
    </motion.div>
  );
}
