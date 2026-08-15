"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Globe } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import MobileMenu from "./MobileMenu";

export interface NavbarProps {
  currentPath?: string;
  transparent?: boolean;
}

const NAV_HOVER = "hover:bg-[#EBE3D5]";
const NAV_ACTIVE = "bg-[#EBE3D5] border-caramel-gold/30";
const NAV_BASE = "bg-transparent border-transparent";

export default function Navbar({ transparent = false }: NavbarProps) {
  const t = useTranslations("nav");
  const tCategories = useTranslations("categories");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-dropdown-container")) {
        setLangDropdownOpen(false);
        setMobileLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setLangDropdownOpen(true);
  };

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => {
      setLangDropdownOpen(false);
    }, 150);
  };

  const handleLanguageChange = (newLocale: "fr" | "ar") => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/a-propos" },
    { label: t("products"), href: "/produits", dropdown: true },
    { label: t("recipes"), href: "/recettes" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-gold rounded-xl p-1 flex-shrink-0"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src="/CnlLogo.png"
                alt="Logo TOFFIA CNL Caramel"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation — Centered */}
          <nav className="hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.dropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isActive || pathname.startsWith("/produits")
                          ? `text-caramel-900 ${NAV_ACTIVE}`
                          : `text-caramel-900/75 ${NAV_BASE} ${NAV_HOVER} hover:text-caramel-900 hover:border-caramel-gold/20`
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`text-[11px] font-black text-caramel-gold inline-block transition-transform duration-200 leading-none ${
                          productsDropdownOpen ? "rotate-90" : ""
                        }`}
                      >
                        &rsaquo;
                      </span>
                    </Link>

                    {/* Floating Dropdown */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-cream/98 backdrop-blur-xl rounded-2xl shadow-xl shadow-caramel-900/8 border border-caramel-gold/20 p-2 z-50 overflow-hidden"
                        >
                          <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-caramel-gold/35 to-transparent" />

                          <div className="px-3 pt-2.5 pb-2">
                            <span className="text-[10px] font-bold text-caramel-700/80 uppercase tracking-widest">
                              {t("categories")}
                            </span>
                          </div>

                          <div className="flex flex-col gap-0.5">
                            {siteConfig.productCategories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={cat.href}
                                onClick={() => {
                                  setProductsDropdownOpen(false);
                                  if (pathname.startsWith("/produits")) {
                                    const el = document.getElementById(cat.id);
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                  }
                                }}
                                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-caramel-900/85 hover:bg-[#EBE3D5] hover:text-caramel-900 transition-all duration-150 group"
                              >
                                <span>{tCategories(cat.id as any)}</span>
                                <span className="text-xs font-mono font-bold text-caramel-gold opacity-60 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 rtl:translate-x-1 rtl:group-hover:translate-x-0 transition-all duration-200">
                                  &gt;
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? `text-caramel-900 ${NAV_ACTIVE}`
                      : `text-caramel-900/75 ${NAV_BASE} ${NAV_HOVER} hover:text-caramel-900 hover:border-caramel-gold/20`
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: Modern Language Switcher Dropdown on Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <div
              className="relative lang-dropdown-container"
              onMouseEnter={handleLangEnter}
              onMouseLeave={handleLangLeave}
            >
              <button
                type="button"
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  langDropdownOpen
                    ? `text-caramel-900 ${NAV_ACTIVE}`
                    : `text-caramel-900/80 ${NAV_BASE} ${NAV_HOVER} hover:text-caramel-900 hover:border-caramel-gold/20`
                }`}
                aria-label="Changer de langue"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-4 h-4 text-caramel-gold" />
                <span className="font-medium text-xs tracking-wide">
                  {locale === "fr" ? "Français" : "العربية"}
                </span>
                <span
                  className={`text-[11px] font-black text-caramel-gold inline-block transition-transform duration-200 leading-none ${
                    langDropdownOpen ? "rotate-90" : ""
                  }`}
                >
                  &rsaquo;
                </span>
              </button>

              {/* Floating Dropdown */}
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-3 w-48 bg-cream/98 backdrop-blur-xl rounded-2xl shadow-xl shadow-caramel-900/8 border border-caramel-gold/20 p-2 z-50 overflow-hidden"
                  >
                    <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-caramel-gold/35 to-transparent" />

                    <div className="px-3 pt-2.5 pb-2">
                      <span className="text-[10px] font-bold text-caramel-700/80 uppercase tracking-widest">
                        {locale === "fr" ? "Langue" : "اللغة"}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          handleLanguageChange("fr");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 group cursor-pointer ${
                          locale === "fr"
                            ? "bg-[#EBE3D5] text-caramel-900 font-bold"
                            : "text-caramel-900/85 hover:bg-[#EBE3D5] hover:text-caramel-900"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-caramel-gold/25 text-caramel-900 font-mono">
                            FR
                          </span>
                          <span>Français</span>
                        </div>
                        {locale === "fr" ? (
                          <span className="w-2 h-2 rounded-full bg-caramel-gold shadow-sm" />
                        ) : (
                          <span className="text-xs font-mono font-bold text-caramel-gold opacity-60 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 rtl:translate-x-1 rtl:group-hover:translate-x-0 transition-all duration-200">
                            &gt;
                          </span>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          handleLanguageChange("ar");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 group cursor-pointer ${
                          locale === "ar"
                            ? "bg-[#EBE3D5] text-caramel-900 font-bold"
                            : "text-caramel-900/85 hover:bg-[#EBE3D5] hover:text-caramel-900"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-caramel-gold/25 text-caramel-900 font-mono">
                            AR
                          </span>
                          <span>العربية</span>
                        </div>
                        {locale === "ar" ? (
                          <span className="w-2 h-2 rounded-full bg-caramel-gold shadow-sm" />
                        ) : (
                          <span className="text-xs font-mono font-bold text-caramel-gold opacity-60 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 rtl:translate-x-1 rtl:group-hover:translate-x-0 transition-all duration-200">
                            &gt;
                          </span>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Hamburger & Lang Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="relative lang-dropdown-container">
              <button
                type="button"
                onClick={() => setMobileLangOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                  mobileLangOpen
                    ? `text-caramel-900 ${NAV_ACTIVE}`
                    : `text-caramel-900/80 bg-cream/70 border-caramel-900/15 hover:bg-[#EBE3D5] hover:text-caramel-900`
                }`}
                aria-label="Changer de langue"
                aria-expanded={mobileLangOpen}
              >
                <Globe className="w-3.5 h-3.5 text-caramel-gold" />
                <span className="font-bold">{locale.toUpperCase()}</span>
                <span
                  className={`text-[10px] font-black text-caramel-gold inline-block transition-transform duration-200 leading-none ${
                    mobileLangOpen ? "rotate-90" : ""
                  }`}
                >
                  &rsaquo;
                </span>
              </button>

              {/* Mobile Floating Dropdown */}
              <AnimatePresence>
                {mobileLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 w-44 bg-cream/98 backdrop-blur-xl rounded-2xl shadow-xl shadow-caramel-900/10 border border-caramel-gold/25 p-1.5 z-50 overflow-hidden"
                  >
                    <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-caramel-gold/40 to-transparent" />

                    <div className="px-2.5 pt-2 pb-1.5">
                      <span className="text-[9px] font-bold text-caramel-700/80 uppercase tracking-widest">
                        {locale === "fr" ? "Langue" : "اللغة"}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          handleLanguageChange("fr");
                          setMobileLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 group cursor-pointer ${
                          locale === "fr"
                            ? "bg-[#EBE3D5] text-caramel-900 font-bold"
                            : "text-caramel-900/85 hover:bg-[#EBE3D5] hover:text-caramel-900"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-caramel-gold/25 text-caramel-900 font-mono">
                            FR
                          </span>
                          <span>Français</span>
                        </div>
                        {locale === "fr" ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-caramel-gold shadow-sm" />
                        ) : (
                          <span className="text-[10px] font-mono font-bold text-caramel-gold opacity-60 group-hover:opacity-100 transform -translate-x-0.5 group-hover:translate-x-0 rtl:translate-x-0.5 rtl:group-hover:translate-x-0 transition-all duration-200">
                            &gt;
                          </span>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          handleLanguageChange("ar");
                          setMobileLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 group cursor-pointer ${
                          locale === "ar"
                            ? "bg-[#EBE3D5] text-caramel-900 font-bold"
                            : "text-caramel-900/85 hover:bg-[#EBE3D5] hover:text-caramel-900"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-caramel-gold/25 text-caramel-900 font-mono">
                            AR
                          </span>
                          <span>العربية</span>
                        </div>
                        {locale === "ar" ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-caramel-gold shadow-sm" />
                        ) : (
                          <span className="text-[10px] font-mono font-bold text-caramel-gold opacity-60 group-hover:opacity-100 transform -translate-x-0.5 group-hover:translate-x-0 rtl:translate-x-0.5 rtl:group-hover:translate-x-0 transition-all duration-200">
                            &gt;
                          </span>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileLangOpen(false);
                setMobileMenuOpen(true);
              }}
              className="p-2 sm:p-2.5 rounded-xl bg-[#EBE3D5] text-caramel-900 hover:bg-caramel-100 border border-caramel-gold/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-gold cursor-pointer"
              aria-label="Ouvrir le menu de navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
