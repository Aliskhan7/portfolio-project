"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function SEOHead() {
  useEffect(() => {
    // Добавляем дополнительные мета-теги
    const addMetaTag = (name: string, content: string, attribute: string = "name") => {
      if (!document.querySelector(`meta[${attribute}="${name}"]`)) {
        const meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Добавляем hreflang теги
    const addHreflang = (lang: string, href: string) => {
      if (!document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)) {
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", lang);
        link.setAttribute("href", href);
        document.head.appendChild(link);
      }
    };

    addMetaTag("geo.region", "RU-CE");
    addMetaTag("geo.placename", "Чеченская Республика");
    addMetaTag("language", "Russian");
    addMetaTag("revisit-after", "7 days");
    addMetaTag("distribution", "global");
    addMetaTag("rating", "general");

    addHreflang("ru", "https://ag-one.netlify.app/");
    addHreflang("en", "https://portfolio-ag.vercel.app/en");
    addHreflang("x-default", "https://ag-one.netlify.app/");
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Алисхан Газаматов",
    alternateName: "Aliskhan Gazamatov",
    jobTitle: "Frontend Developer",
    description:
      "Профессиональный Frontend разработчик. Разрабатываю веб-приложения для бизнеса на React, Next.js, TypeScript. Создаю корпоративные решения и бизнес-платформы для компаний. Грозный, Москва, Россия.",
    url: "https://portfolio-ag.vercel.app",
    sameAs: [
      // Добавьте ваши социальные сети
      "https://t.me/agazamatov",
      "https://www.instagram.com/a.gazamatov",
      "https://www.linkedin.com/in/aliskhan-gazamatov/",
      "https://github.com/Aliskhan7"
      
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Web Development",
      "Frontend Development",
      "Mobile App Development",
      "Business Web Applications",
      "Enterprise Applications",
      "Corporate Web Development",
      "Business Platforms",
    ],
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Web Development",
        description: "Разработка веб-приложений для бизнеса",
        areaServed: {
          "@type": "Country",
          name: "Russia",
        },
      },
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressRegion: "Чеченская Республика",
    },
    email: "aliskhangazamatov@gmail.com",
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

