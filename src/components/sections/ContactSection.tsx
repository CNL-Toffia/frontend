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
  Clock,
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submission:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 lg:py-20 bg-cream relative overflow-hidden ${
        className || ""
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
                      })}
                      placeholder="Ex: Yacine Benali"
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
                        Téléphone (optionnel)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+213 5XX XX XX XX"
                        className="w-full pb-3 pt-1 bg-transparent border-b border-caramel-gold/30 text-base text-caramel-dark placeholder:text-caramel-dark/30 focus:outline-none focus:border-caramel-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Product Interest Selector */}
                  <div>
                    <label
                      htmlFor="productInterest"
                      className="block text-xs font-bold uppercase tracking-widest text-caramel-dark/70 mb-2"
                    >
                      Produit ou Gamme d&apos;intérêt
                    </label>
                    <select
                      id="productInterest"
                      {...register("productInterest")}
                      className="w-full pb-3 pt-1 bg-transparent border-b border-caramel-gold/30 text-base text-caramel-dark focus:outline-none focus:border-caramel-gold transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-cream">Sélectionnez une gamme ou un besoin...</option>
                      <option value="Crème Caramel" className="bg-cream">Crème Caramel (400g / 2kg)</option>
                      <option value="Crème de Pistache" className="bg-cream">Crème de Pistache (200g)</option>
                      <option value="Caramel Mou aux Amandes" className="bg-cream">Caramel Mou aux Amandes</option>
                      <option value="Crème de Fourrage Noisettes" className="bg-cream">Crème de Fourrage aux Noisettes</option>
                      <option value="Beurre de Cacahuètes" className="bg-cream">Beurre de Cacahuètes</option>
                      <option value="Nappage Miroir Caramel" className="bg-cream">Nappage Miroir Caramel</option>
                      <option value="Gamme Professionnelle" className="bg-cream">Gamme Professionnelle (Seaux 5kg / 10kg)</option>
                      <option value="Demande sur-mesure" className="bg-cream">Demande sur-mesure / Distributeur</option>
                    </select>
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

              <div className="flex items-start gap-4 pt-2">
                <Clock className="w-5 h-5 text-caramel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-caramel-dark block text-xs uppercase tracking-wider mb-0.5">
                    Horaires d&apos;ouverture
                  </span>
                  <span className="text-caramel-dark/75">Dimanche – Jeudi : 08h30 – 16h30</span>
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
