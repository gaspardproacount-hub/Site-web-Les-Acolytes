import type { Metadata } from "next";
import { Suspense } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getCmsPageBlocks, getCmsSiteSettings } from "@/lib/cms";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Acolytes | Restaurant & Brasserie à l'Oncopole, Toulouse",
  description:
    "Les Acolytes, restaurant brasserie installé dans un ancien cabaret réhabilité à l'Oncopole, Toulouse. Déjeuner, afterwork du jeudi, terrasse ombragée, privatisation d'événements.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navBlocks, footerBlocks, cmsSettings] = await Promise.all([
    getCmsPageBlocks("navigation"),
    getCmsPageBlocks("footer"),
    getCmsSiteSettings(),
  ]);
  const reservationUrl = cmsSettings?.social_links.reservation_url;

  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Suspense fallback={null}>
          <SiteHeader navBlocks={navBlocks} reservationUrl={reservationUrl} />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <SiteFooter
            navBlocks={navBlocks}
            footerBlocks={footerBlocks}
            facebookUrl={cmsSettings?.social_links.facebook}
          />
        </Suspense>
      </body>
    </html>
  );
}
