import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";
const inter = Inter({ subsets: ["latin", "cyrillic"] });
import React from "react";
import Script from "next/script";
import SEOHead from "@/components/SEOHead";

export const metadata: Metadata = {
  title: {
    default: "Алисхан Газаматов - Frontend разработчик | Портфолио",
    template: "%s | Алисхан Газаматов",
  },
  description:
    "Профессиональный Frontend разработчик. Разрабатываю веб-приложения для бизнеса на React, Next.js, TypeScript. Создаю корпоративные решения, бизнес-платформы и мобильные приложения для компаний. Доступен для работы в разных часовых поясах. Грозный, Москва, Россия.",
  keywords: [
    "frontend разработчик",
    "веб разработчик",
    "React разработчик",
    "Next.js разработчик",
    "TypeScript разработчик",
    "разработчик из Грозного",
    "разработчик из России",
    "фронтенд разработчик Грозный",
    "веб разработка Грозного",
    "React Native разработчик",
    "мобильная разработка",
    "веб приложения",
    "веб приложения для бизнеса",
    "корпоративные веб приложения",
    "бизнес приложения",
    "разработка бизнес приложений",
    "веб разработка для компаний",
    "корпоративная разработка",
    "бизнес платформы",
    "enterprise разработка",
    "портфолио разработчика",
    "freelance разработчик",
    "веб дизайн",
    "UI/UX разработка",
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "business web applications",
    "enterprise applications",
    "corporate web development",
    "Chechen developer",
    "Russian developer",
    "mobile app developer",
  ],
  authors: [{ name: "Aliskhan Gazamatov" }],
  creator: "Aliskhan Gazamatov",
  publisher: "Aliskhan Gazamatov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ag-one.netlify.app/"), // Замените на ваш домен
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/ru",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    url: "https://ag-one.netlify.app/", // Замените на ваш домен
    siteName: "Портфолио Алисхана Газаматова",
    title: "Алисхан Газаматов - Frontend разработчик | Портфолио",
    description:
      "Профессиональный Frontend разработчик. Разрабатываю веб-приложения для бизнеса на React, Next.js, TypeScript. Создаю корпоративные решения и бизнес-платформы. Грозный, Москва, Россия.",
    images: [
      {
        url: "/og-bg.jpg", // Добавьте OG изображение
        width: 1200,
        height: 630,
        alt: "Алисхан Газаматов - Frontend разработчик",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Алисхан Газаматов - Frontend разработчик | Портфолио",
    description:
      "Профессиональный Frontend разработчик. Разрабатываю веб-приложения для бизнеса на React, Next.js, TypeScript. Корпоративные решения и бизнес-платформы. Грозный, Москва, Россия.",
    images: ["/og-image.png"], // Добавьте Twitter изображение
    creator: "@your_twitter", // Замените на ваш Twitter
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
  verification: {
    // Добавьте ваши ключи верификации
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <SEOHead />
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
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
