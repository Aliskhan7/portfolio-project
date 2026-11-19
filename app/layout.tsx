import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import React from "react";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";
import { CONTACT_EMAIL, SITE_URL, socialMedia } from "@/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const TITLE = "Студия AG — разработка веб-приложений и автоматизация бизнеса";
const DESCRIPTION =
  "Разрабатываем веб-приложения, личные кабинеты и сайты, интегрируем с Bitrix24, WhatsApp и Telegram, делаем дашборды для руководителей. React, Next.js, NestJS. Грозный, Москва, удалённо.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Студия AG",
  },
  description: DESCRIPTION,
  keywords: [
    "разработка веб приложений",
    "студия веб разработки",
    "автоматизация бизнеса",
    "интеграция Bitrix24",
    "дашборд для руководителя",
    "разработка личного кабинета",
    "чат-бот WhatsApp Telegram",
    "frontend разработчик",
    "веб разработчик",
    "React разработчик",
    "Next.js разработчик",
    "TypeScript разработчик",
    "фронтенд разработчик Грозный",
    "веб разработка Грозный",
    "веб приложения для бизнеса",
    "корпоративные веб приложения",
    "разработка бизнес приложений",
    "frontend developer",
    "React developer",
    "Next.js developer",
  ],
  authors: [{ name: "Алисхан Газаматов", url: SITE_URL }],
  creator: "Алисхан Газаматов",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Студия AG",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Студия AG — разработка веб-приложений",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-bg.jpg"],
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
  other: {
    "geo.region": "RU-CE",
    "geo.placename": "Грозный",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Алисхан Газаматов",
  alternateName: "Aliskhan Gazamatov",
  jobTitle: "Frontend Developer",
  description: DESCRIPTION,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  sameAs: socialMedia
    .filter(({ name }) => name !== "WhatsApp")
    .map(({ link }) => link),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Frontend Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
    addressRegion: "Чеченская Республика",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MantineProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </MantineProvider>

        <Script id="metrika-counter" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100030234, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
