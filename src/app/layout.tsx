import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOFFIA — La Passion du Caramel depuis 2011 | CNL Caramel",
  description:
    "Découvrez TOFFIA, caramels, pâtes à tartiner et nappages artisanaux algériens depuis 2011. Crème caramel, pistache, noisette et gamme professionnelle.",
  openGraph: {
    title: "TOFFIA — La Passion du Caramel depuis 2011",
    description: "Caramel artisanal algérien, gourmand et premium.",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-screen flex flex-col bg-cream text-caramel-dark antialiased">
        {children}
      </body>
    </html>
  );
}
