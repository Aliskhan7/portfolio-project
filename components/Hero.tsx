"use client";
import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import Logo from "@/public/logo.svg";
import { scrollToId } from "@/utils/scroll";

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen -z-10 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10 flex-col items-center">
        <Image src={Logo} alt="Логотип AG" priority />
        <p className="mt-5 uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Студия разработки AG
        </p>
      </div>
      <TextGenerateEffect
        as="h1"
        className="relative z-10 text-center text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl"
        words="Разрабатываем веб‑приложения и автоматизируем бизнес"
      />
      <p className="relative z-10 text-white text-center md:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl">
        Сайты, личные кабинеты, интеграции с CRM и аналитика — от идеи до
        запуска.
      </p>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
        {/* Обёртка фиксирует ширину: иначе mx-auto у MagicButton растаскивает кнопки по краям */}
        <div className="w-full md:w-60">
          <MagicButton
            title="Обсудить проект"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => scrollToId("#contact")}
          />
        </div>
        <button
          type="button"
          onClick={() => scrollToId("#projects")}
          className="h-12 w-full md:w-60 md:mt-10 rounded-lg border border-white/[0.15] text-sm font-medium text-white transition-colors hover:border-purple/60 hover:text-purple"
        >
          Смотреть проекты
        </button>
      </div>
    </section>
  );
};

export default Hero;
