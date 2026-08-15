import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import ContactSection from "@/components/sections/ContactSection";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Contact Form & Information */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
