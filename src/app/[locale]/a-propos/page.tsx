import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AboutStory from "@/components/sections/AboutStory";
import AboutMission from "@/components/sections/AboutMission";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Editorial Hero Header */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-caramel-dark leading-[1.1] tracking-tight">
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Merged Section: Nos Racines — Maison Fondée en 2011 */}
      <AboutStory />

      {/* Mission Statement */}
      <AboutMission />
    </main>
  );
}
