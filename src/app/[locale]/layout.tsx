import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontArabic = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5C2518",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "توفيا TOFFIA — شغف صناعة الكراميل منذ 2011 | سي إن إل كراميل"
    : "TOFFIA — La Passion du Caramel depuis 2011 | CNL Caramel";

  const description = isAr
    ? "اكتشفوا توفيا TOFFIA، كراميل حرفي، وعجائن للدهن، وصلصات تغليف فاخرة جزائرية بالبليدة منذ 2011. كريمة كراميل، كريمة فستق وبندق وتشكيلة مهنية."
    : "Découvrez TOFFIA, caramels, pâtes à tartiner et nappages artisanaux algériens depuis 2011. Crème caramel, crème de pistache, noisette et gamme professionnelle à Blida.";

  return {
    metadataBase: new URL("https://toffiacaramel-dz.com"),
    title: {
      default: title,
      template: isAr ? "%s | توفيا TOFFIA" : "%s | TOFFIA — CNL Caramel",
    },
    description,
    keywords: [
      "TOFFIA",
      "CNL Caramel",
      "توفيا",
      "كراميل الجزائر",
      "Caramel Algérie",
      "Crème caramel",
      "Crème de pistache",
      "Pâte à tartiner Algérie",
      "Nappage caramel",
      "Pâtisserie Blida",
      "Caramel artisanal",
    ],
    authors: [{ name: "CNL Caramel", url: "https://toffiacaramel-dz.com" }],
    creator: "CNL Caramel",
    publisher: "CNL Caramel",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    icons: {
      icon: [
        { url: "/CnlLogo.png" },
        { url: "/CnlLogo.png", sizes: "32x32", type: "image/png" },
        { url: "/CnlLogo.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: "/CnlLogo.png",
      apple: [{ url: "/CnlLogo.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_DZ" : "fr_FR",
      url: "https://toffiacaramel-dz.com",
      siteName: isAr ? "توفيا TOFFIA — سي إن إل كراميل" : "TOFFIA — CNL Caramel",
      title,
      description,
      images: [
        {
          url: "/caramel3.png",
          width: 1200,
          height: 630,
          alt: "TOFFIA — CNL Caramel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/caramel3.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://toffiacaramel-dz.com/${locale === "fr" ? "" : locale}`,
      languages: {
        fr: "https://toffiacaramel-dz.com",
        ar: "https://toffiacaramel-dz.com/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontArabic.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-caramel-dark antialiased selection:bg-caramel-gold/30 selection:text-caramel-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <div className="flex-1 flex flex-col pt-20">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
