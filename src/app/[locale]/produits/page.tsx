import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ProductsGrid from "@/components/sections/ProductsGrid";
import PageTransition from "@/components/ui/PageTransition";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("productsPage");

  return (
    <PageTransition>
      {/* Editorial Page Header */}
      <section className="relative pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-caramel-dark leading-[1.1] tracking-tight mb-6">
            {t("title")}
          </h1>

          <p className="text-lg md:text-xl text-caramel-dark/80 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Gold Separator */}
      <div className="w-11/12 max-w-5xl mx-auto border-t border-caramel-gold/20 mb-16" />

      {/* Products by Category */}
      <ProductsGrid />
    </PageTransition>
  );
}
