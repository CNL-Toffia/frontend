import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import ContactSection from "@/components/sections/ContactSection";
import PageTransition from "@/components/ui/PageTransition";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      {/* Contact Form & Information */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </PageTransition>
  );
}
