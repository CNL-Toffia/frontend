"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  Share2,
} from "lucide-react";

/* Inline brand SVG icons — lucide doesn't ship Facebook/Instagram/TikTok */
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.93h-1.141c-1.66 0-2.293.63-2.293 2.268v1.836h3.369l-.497 3.667h-2.872v8.162C19.395 23.225 24 18.2 24 12.078 24 5.429 18.627 0 12 0S0 5.429 0 12.078c0 5.564 3.825 10.228 9.101 11.613z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 0 0-2.124 1.388A5.878 5.878 0 0 0 .609 4.16c-.3.761-.5 1.633-.563 2.911C-.016 8.35-.03 8.816-.03 12.001c0 3.186.014 3.652.08 4.93.06 1.278.263 2.15.563 2.911a5.878 5.878 0 0 0 1.387 2.124 5.874 5.874 0 0 0 2.124 1.387c.762.3 1.634.5 2.911.563 1.28.066 1.745.08 4.93.08 3.186 0 3.652-.014 4.93-.08 1.278-.06 2.15-.263 2.911-.563a6.13 6.13 0 0 0 2.124-1.387 5.878 5.878 0 0 0 1.387-2.124c.3-.762.5-1.634.563-2.911.066-1.28.08-1.745.08-4.93 0-3.186-.014-3.652-.08-4.93-.06-1.278-.263-2.15-.563-2.911a5.878 5.878 0 0 0-1.387-2.124A5.874 5.874 0 0 0 19.861.647c-.762-.3-1.634-.5-2.911-.563C15.67.018 15.204.004 12.02.004c-3.186 0-3.652.014-4.93.08zm.14 21.693c-1.17-.054-1.805-.249-2.228-.415a3.726 3.726 0 0 1-1.382-.895 3.726 3.726 0 0 1-.895-1.382c-.166-.423-.361-1.058-.415-2.228-.06-1.265-.072-1.644-.072-4.848 0-3.204.013-3.583.072-4.849.054-1.17.249-1.805.415-2.228.218-.561.48-.96.895-1.382a3.726 3.726 0 0 1 1.382-.895c.423-.166 1.058-.361 2.228-.415 1.265-.06 1.644-.072 4.849-.072 3.204 0 3.583.013 4.849.072 1.17.054 1.805.249 2.228.415.561.218.96.48 1.382.895.415.422.677.82.895 1.382.166.423.361 1.058.415 2.228.06 1.265.072 1.644.072 4.849 0 3.204-.013 3.583-.072 4.848-.054 1.17-.249 1.805-.415 2.228a3.726 3.726 0 0 1-.895 1.382 3.726 3.726 0 0 1-1.382.895c-.423.166-1.058.361-2.228.415-1.265.06-1.644.072-4.849.072-3.204 0-3.583-.013-4.849-.072zm9.783-16.192a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88zM12.02 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zM12.02 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

import { siteConfig } from "@/data/siteConfig";

export interface ContactSectionProps {
  className?: string;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection({
  className,
}: ContactSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submission:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 lg:py-20 bg-cream relative overflow-hidden ${className || ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-caramel-dark leading-[1.1] tracking-tight mb-6">
            Contactez-nous
          </h2>

          <p className="text-lg md:text-xl text-caramel-dark/80 leading-relaxed max-w-2xl">
            Vous êtes un professionnel de la pâtisserie, un restaurateur, un
            distributeur ou un particulier passionné ? Notre équipe basée à
            Blida est à votre écoute.
          </p>
        </div>

        {/* 2-Column Minimalist Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Minimalist Elegant Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="py-12 text-left flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-caramel-100 flex items-center justify-center text-caramel-gold mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-caramel-dark mb-2">
                    Message envoyé avec succès.
                  </h3>
                  <p className="text-base text-caramel-dark/75 max-w-md leading-relaxed mb-8">
                    Merci pour votre message. Notre équipe prendra contact avec vous dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 border-b border-caramel-gold pb-1 uppercase tracking-widest text-xs font-semibold text-caramel-dark hover:text-caramel-gold transition-colors"
                  >
                    <span>Envoyer un autre message</span>
                    <span>→</span>
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8"
                  noValidate
                >
                  {/* Name Input */}
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-widest text-caramel-dark/70 mb-2"
                    >
                      Nom complet <span className="text-royal-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      {...register("fullName", {
                        required: "Veuillez renseigner votre nom complet",
                        minLength: {
                          value: 2,
                          message: "Le nom doit comporter au moins 2 caractères",
                        },
                        pattern: {
                          value: /^[a-zA-ZÀ-ÿ\s]+$/,
                          message: "Veuillez n'utiliser que des lettres et des espaces.",
                        },
                      })}
                      onInput={(e) => {
                        // Instantly removes any character that is not a letter (including accents) or a space
                        e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
                      }}
                      pattern="^[a-zA-ZÀ-ÿ\s]+$"
                      title="Veuillez n'utiliser que des lettres et des espaces."
                      placeholder="Ex: Ouassim Sihamda"
                      className="w-full pb-3 pt-1 bg-transparent border-b border-caramel-gold/30 text-base text-caramel-dark placeholder:text-caramel-dark/30 focus:outline-none focus:border-caramel-gold transition-colors"
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-xs text-royal-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.fullName.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-widest text-caramel-dark/70 mb-2"
                      >
                        Email <span className="text-royal-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Veuillez renseigner votre adresse email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide",
                          },
                        })}
                        placeholder="contact@exemple.dz"
                        className="w-full pb-3 pt-1 bg-transparent border-b border-caramel-gold/30 text-base text-caramel-dark placeholder:text-caramel-dark/30 focus:outline-none focus:border-caramel-gold transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-royal-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-widest text-caramel-dark/70 mb-2"
                      >
                        Téléphone <span className="text-royal-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone", {
                          required: "Veuillez renseigner votre numéro de téléphone",
                          pattern: {
                            value: /^0[0-9]+$/,
                            message: "Le numéro doit commencer par 0 .",
                          },
                        })}
                        onInput={(e) => {
                          // Instantly removes any character that is not a number (0-9)
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                        }}
                        pattern="^0[0-9]$"
                        title="Le numéro doit commencer par 0 ."
                        placeholder="0XXX XX XX XX"
                        className="w-full pb-3 pt-1 bg-transparent border-b border-caramel-gold/30 text-base text-caramel-dark placeholder:text-caramel-dark/30 focus:outline-none focus:border-caramel-gold transition-colors"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-xs text-royal-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-widest text-caramel-dark/70 mb-2"
                    >
                      Votre Message <span className="text-royal-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", {
                        required: "Veuillez écrire votre message",
                        minLength: {
                          value: 10,
                          message: "Votre message doit comporter au moins 10 caractères",
                        },
                      })}
                      placeholder="Décrivez votre projet, volume souhaité ou besoin spécifique..."
                      className="w-full pb-3 pt-1 bg-transparent border-b border-caramel-gold/30 text-base text-caramel-dark placeholder:text-caramel-dark/30 focus:outline-none focus:border-caramel-gold transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-royal-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 border-b border-caramel-gold pb-1.5 uppercase tracking-widest text-sm font-semibold text-caramel-dark hover:text-caramel-gold transition-colors disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-caramel-gold" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Editorial Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-gold block mb-2">
                Unité de Production & Siège
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-caramel-dark mb-4">
                {siteConfig.contact.company}
              </h3>
              <p className="text-base text-caramel-dark/75 leading-relaxed">
                Maison artisanale fondée en 2011 à Blida, dédiée à l&apos;excellence du caramel et des spécialités gourmandes.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-caramel-gold/20 text-sm text-caramel-dark/85">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-caramel-dark block text-xs uppercase tracking-wider mb-0.5">
                    Adresse
                  </span>
                  <a
                    href="https://maps.app.goo.gl/1itwaj2jUbF7AaAg6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-caramel-gold transition-colors leading-relaxed"
                  >
                    {siteConfig.contact.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-caramel-dark block text-xs uppercase tracking-wider mb-0.5">
                    Téléphone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-caramel-gold transition-colors font-medium"
                  >
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-caramel-dark block text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-caramel-gold transition-colors font-medium break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-start gap-4 pt-2">
                <Share2 className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-caramel-dark block text-xs uppercase tracking-wider mb-2">
                    Réseaux Sociaux
                  </span>
                  <div className="flex gap-4 items-center">
                    <a
                      href="https://web.facebook.com/CNLcaramel"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full border border-caramel-gold/25 flex items-center justify-center text-caramel-dark/70 hover:text-caramel-gold hover:border-caramel-gold/60 transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/toffia_officiel"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full border border-caramel-gold/25 flex items-center justify-center text-caramel-dark/70 hover:text-caramel-gold hover:border-caramel-gold/60 transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@cnl.caramel"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="w-9 h-9 rounded-full border border-caramel-gold/25 flex items-center justify-center text-caramel-dark/70 hover:text-caramel-gold hover:border-caramel-gold/60 transition-colors"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires d'ouverture */}
              <div className="flex items-start gap-4 pt-2">
                <Clock className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-caramel-dark block text-xs uppercase tracking-wider mb-0.5">
                    Horaires d&apos;ouverture
                  </span>
                  <span className="text-caramel-dark/75">Dimanche – Jeudi : 08h00 – 16h00</span>
                </div>
              </div>
            </div>

            {/* Pro Service Note */}
            <div className="pt-6 border-t border-caramel-gold/20">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark block mb-1">
                Espace Professionnels & Grossistes
              </span>
              <p className="text-sm text-caramel-dark/70 leading-relaxed">
                Conditionnements adaptés (seaux de 5kg et 10kg), régularité technique et fiches techniques fournies sur demande.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
