import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export interface FooterProps {
  className?: string;
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 1 0 6.34 6.34V8.58a8.3 8.3 0 0 0 4.77 1.52V6.69h-.15z" />
    </svg>
  );
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`bg-cream text-caramel-900 border-t border-caramel-gold/15 relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-caramel-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Brand & Narrative */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/CnlLogo.png"
                  alt="Logo officiel TOFFIA CNL Caramel"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-widest text-caramel-900">
                  TOFFIA
                </span>
                <span className="text-[10px] text-caramel-700 uppercase tracking-[0.25em] -mt-1">
                  CNL Caramel
                </span>
              </div>
            </Link>

            <p className="text-sm text-caramel-900/70 leading-relaxed max-w-sm mt-1">
              Maison artisanale fondée en 2011 à Blida. Nous façonnons avec
              passion l'excellence du caramel algérien pour sublimer le quotidien
              des gourmands et des artisans pâtissiers.
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-100 border border-caramel-gold/25 text-xs text-caramel-900 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-caramel-gold" />
                <span>La Passion du Caramel depuis 2011</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & Gammes */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-lg text-caramel-900 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-caramel-gold rounded-full" />
              <span>Navigation</span>
            </h3>

            <ul className="flex flex-col gap-2.5 text-sm text-caramel-900/80">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-caramel-gold hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-caramel-gold/15">
                <span className="text-xs text-caramel-700 font-semibold uppercase tracking-wider block mb-1.5">
                  Nos Gammes
                </span>
                <div className="grid grid-cols-1 gap-1 text-xs text-caramel-900/60">
                  <Link
                    href="/produits?categorie=caramels-liquides"
                    className="hover:text-caramel-gold transition-colors"
                  >
                    • Caramels Liquides
                  </Link>
                  <Link
                    href="/produits?categorie=pates-a-tartiner"
                    className="hover:text-caramel-gold transition-colors"
                  >
                    • Pâtes à Tartiner
                  </Link>
                  <Link
                    href="/produits?categorie=nappages"
                    className="hover:text-caramel-gold transition-colors"
                  >
                    • Nappages
                  </Link>
                  <Link
                    href="/produits?categorie=gamme-pro"
                    className="hover:text-caramel-gold transition-colors"
                  >
                    • Gamme Professionnelle
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Coordonnées Officielles */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-lg text-caramel-900 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-caramel-gold rounded-full" />
              <span>Nous Contacter</span>
            </h3>

            <div className="flex flex-col gap-3.5 text-sm text-caramel-900/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-caramel-gold flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  {siteConfig.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-caramel-gold flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-caramel-gold transition-colors font-medium"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-caramel-gold flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-caramel-gold transition-colors font-medium break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Quick Pro CTA */}
            <div className="mt-2 p-3.5 rounded-xl bg-caramel-100/80 border border-caramel-gold/20 flex flex-col gap-2">
              <span className="text-xs font-semibold text-caramel-900">
                Espace Professionnel
              </span>
              <p className="text-[11px] text-caramel-900/60 leading-tight">
                Besoin de gros volumes ou de recettes personnalisées ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-caramel-900 hover:text-caramel-gold transition-colors mt-0.5"
              >
                <span>Nous écrire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-caramel-gold" />
              </Link>
            </div>
          </div>

          {/* Column 4: Réseaux Sociaux */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-lg text-caramel-900 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-caramel-gold rounded-full" />
              <span>Suivez-nous</span>
            </h3>

            <div className="flex items-center gap-2.5">
              <a
                href={siteConfig.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CNL Caramel"
                className="w-10 h-10 rounded-full bg-caramel-100 hover:bg-caramel-gold hover:text-cream text-caramel-900 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram TOFFIA"
                className="w-10 h-10 rounded-full bg-caramel-100 hover:bg-caramel-gold hover:text-cream text-caramel-900 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok CNL Caramel"
                className="w-10 h-10 rounded-full bg-caramel-100 hover:bg-caramel-gold hover:text-cream text-caramel-900 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-caramel-900/60 leading-relaxed mt-1">
              Retrouvez-nous sur les réseaux sociaux pour découvrir nos
              dernières créations, tutoriels pâtissiers et coulisses de
              production.
            </p>
          </div>
        </div>

        {/* Bottom Bar / Mentions Légales */}
        <div className="pt-8 mt-8 border-t border-caramel-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-caramel-700">
          <p>{siteConfig.legal.copyright}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hover:text-caramel-gold transition-colors"
            >
              Contact
            </Link>
            <span className="text-caramel-gold/30">•</span>
            <span className="inline-flex items-center gap-1.5 text-caramel-900/50">
              <span>Élaboré avec</span>
              <Heart className="w-3 h-3 text-royal-500 fill-royal-500" />
              <span>à Blida, Algérie</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
