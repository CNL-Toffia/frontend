"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Building,
  Clock,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export interface ContactSectionProps {
  className?: string;
  prefilledProduct?: string;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  productInterest?: string;
  message: string;
}

export default function ContactSection({
  className,
  prefilledProduct,
}: ContactSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      productInterest: prefilledProduct || "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate lightweight client send / third-party hook
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submission:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 bg-caramel-50/70 border-t border-caramel-gold/20 relative overflow-hidden ${
        className || ""
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Transition / Separator Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-caramel-gold" />
            <span>Contact & Espace Professionnel</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 leading-tight mb-4">
            Parlons de votre projet gourmand
          </h2>

          <p className="text-base sm:text-lg text-caramel-900/80 leading-relaxed">
            Vous êtes un professionnel de la pâtisserie, un restaurateur, un
            distributeur ou un particulier passionné ? Notre équipe basée à
            Blida est à votre écoute.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Form with live validation (7 cols on lg) */}
          <div className="lg:col-span-7 bg-cream rounded-3xl border-2 border-caramel-gold/30 shadow-warm-lg p-6 sm:p-10">
            <h3 className="font-display font-bold text-2xl text-caramel-900 mb-2">
              Envoyez-nous un message
            </h3>
            <p className="text-xs sm:text-sm text-caramel-700 mb-8">
              Remplissez le formulaire ci-dessous. Nous vous répondrons sous 24h
              ouvrées.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-2xl bg-caramel-50 border border-caramel-gold/40 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-caramel-gold to-caramel-700 flex items-center justify-center text-cream mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-caramel-900 mb-2">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-sm text-caramel-700 max-w-md leading-relaxed mb-6">
                    Merci pour votre intérêt pour la maison TOFFIA. Notre équipe
                    commerciale prendra contact avec vous dans les plus brefs
                    délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-caramel-900 text-cream text-xs font-bold hover:bg-caramel-700 hover:text-caramel-gold transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-caramel-900 mb-2"
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
                      })}
                      placeholder="Ex: Yacine Benali"
                      className={`w-full px-4 py-3.5 rounded-xl bg-cream border text-sm text-caramel-900 placeholder:text-caramel-900/40 focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-royal-500 ring-1 ring-royal-500"
                          : "border-caramel-gold/30 focus:border-caramel-gold focus:ring-2 focus:ring-caramel-gold/30"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-royal-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.fullName.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone (Grid 2 cols on tablet+) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-caramel-900 mb-2"
                      >
                        Email officiel <span className="text-royal-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Veuillez renseigner votre adresse email",
                          pattern: {
                            value:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide",
                          },
                        })}
                        placeholder="contact@exemple.dz"
                        className={`w-full px-4 py-3.5 rounded-xl bg-cream border text-sm text-caramel-900 placeholder:text-caramel-900/40 focus:outline-none transition-all ${
                          errors.email
                            ? "border-royal-500 ring-1 ring-royal-500"
                            : "border-caramel-gold/30 focus:border-caramel-gold focus:ring-2 focus:ring-caramel-gold/30"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-royal-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-caramel-900 mb-2"
                      >
                        Téléphone (optionnel)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+213 5XX XX XX XX"
                        className="w-full px-4 py-3.5 rounded-xl bg-cream border border-caramel-gold/30 text-sm text-caramel-900 placeholder:text-caramel-900/40 focus:outline-none focus:border-caramel-gold focus:ring-2 focus:ring-caramel-gold/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Product Interest Selector */}
                  <div>
                    <label
                      htmlFor="productInterest"
                      className="block text-xs font-bold uppercase tracking-wider text-caramel-900 mb-2"
                    >
                      Produit ou Gamme d'intérêt
                    </label>
                    <select
                      id="productInterest"
                      {...register("productInterest")}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream border border-caramel-gold/30 text-sm text-caramel-900 focus:outline-none focus:border-caramel-gold focus:ring-2 focus:ring-caramel-gold/30 transition-all cursor-pointer"
                    >
                      <option value="">Sélectionnez une gamme ou un besoin...</option>
                      <option value="Crème Caramel">Crème Caramel (400g / 2kg)</option>
                      <option value="Crème de Pistache">Crème de Pistache (200g)</option>
                      <option value="Caramel Mou aux Amandes">Caramel Mou aux Amandes</option>
                      <option value="Crème de Fourrage Noisettes">Crème de Fourrage aux Noisettes</option>
                      <option value="Beurre de Cacahuètes">Beurre de Cacahuètes</option>
                      <option value="Nappage Miroir Caramel">Nappage Miroir Caramel</option>
                      <option value="Gamme Professionnelle">Gamme Professionnelle (Seaux 5kg / 10kg)</option>
                      <option value="Demande sur-mesure">Demande sur-mesure / Distributeur</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-caramel-900 mb-2"
                    >
                      Votre Message <span className="text-royal-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Veuillez écrire votre message",
                        minLength: {
                          value: 10,
                          message:
                            "Votre message doit comporter au moins 10 caractères",
                        },
                      })}
                      placeholder="Décrivez votre besoin, volume souhaité ou votre projet..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-cream border text-sm text-caramel-900 placeholder:text-caramel-900/40 focus:outline-none transition-all resize-y ${
                        errors.message
                          ? "border-royal-500 ring-1 ring-royal-500"
                          : "border-caramel-gold/30 focus:border-caramel-gold focus:ring-2 focus:ring-caramel-gold/30"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-royal-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-caramel-gold via-caramel-500 to-caramel-700 text-caramel-900 font-bold text-sm shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95 disabled:opacity-60 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-caramel-900" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Grounded Business Information (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Contact Card */}
            <div className="rounded-3xl bg-caramel-900 text-cream p-8 shadow-warm-lg border-2 border-caramel-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-caramel-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-wider text-caramel-gold">
                Siège & Unité de Production
              </span>

              <h3 className="font-display font-bold text-2xl text-cream mt-1 mb-6">
                {siteConfig.contact.company}
              </h3>

              <div className="space-y-5 text-sm text-caramel-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-caramel-700/80 flex items-center justify-center text-caramel-gold flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-cream block">Adresse</span>
                    <span className="text-xs leading-relaxed text-caramel-100/80">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-caramel-700/80 flex items-center justify-center text-caramel-gold flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-cream block">Téléphone</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs text-caramel-gold hover:underline font-semibold"
                    >
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-caramel-700/80 flex items-center justify-center text-caramel-gold flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-cream block">Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-caramel-gold hover:underline font-semibold break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="mt-8 pt-6 border-t border-caramel-700/60 flex items-center gap-3 text-xs text-caramel-300">
                <Clock className="w-4 h-4 text-caramel-gold flex-shrink-0" />
                <span>Dimanche – Jeudi : 08h30 – 16h30</span>
              </div>
            </div>

            {/* Pro Service Consultation Card */}
            <div className="rounded-3xl bg-cream border-2 border-caramel-gold/30 p-6 sm:p-8 shadow-warm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel-700 mb-2">
                  <Building className="w-4 h-4 text-caramel-gold" />
                  <span>Service Grossistes & Artisans</span>
                </div>

                <h4 className="font-display font-bold text-lg sm:text-xl text-caramel-900 mb-2">
                  Besoin d'un approvisionnement régulier ?
                </h4>

                <p className="text-xs sm:text-sm text-caramel-900/80 leading-relaxed">
                  Nous fournissons des seaux de 5kg et 10kg, ainsi que des
                  recettes adaptées aux exigences de vos laboratoires de
                  production.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-caramel-gold/15 flex items-center justify-between">
                <span className="text-xs font-semibold text-caramel-gold">
                  Devis & Fiches Techniques sur demande
                </span>
                <Sparkles className="w-4 h-4 text-caramel-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
