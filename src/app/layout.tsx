import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: "#5C2518",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://toffiacaramel-dz.com"),
  title: {
    default: "TOFFIA — La Passion du Caramel depuis 2011 | CNL Caramel",
    template: "%s | TOFFIA — CNL Caramel",
  },
  description:
    "Découvrez TOFFIA, caramels, pâtes à tartiner et nappages artisanaux algériens depuis 2011. Crème caramel, crème de pistache, noisette et gamme professionnelle à Blida.",
  keywords: [
    "TOFFIA",
    "CNL Caramel",
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
    locale: "fr_FR",
    url: "https://toffiacaramel-dz.com",
    siteName: "TOFFIA — CNL Caramel",
    title: "TOFFIA — La Passion du Caramel depuis 2011",
    description:
      "Maison artisanale fondée en 2011 à Blida. Caramels fondants, crèmes de pistache nobles et préparations pâtissières professionnelles.",
    images: [
      {
        url: "/caramel3.png",
        width: 1200,
        height: 630,
        alt: "TOFFIA — La Passion du Caramel depuis 2011",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOFFIA — La Passion du Caramel depuis 2011",
    description:
      "Maison artisanale fondée en 2011 à Blida. Caramels fondants et crèmes pâtissières d'exception.",
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
    canonical: "https://toffiacaramel-dz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fontDisplay.variable} ${fontBody.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-caramel-dark antialiased selection:bg-caramel-gold/30 selection:text-caramel-900">
        <Navbar />
        <div className="flex-1 flex flex-col pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
