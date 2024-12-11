"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-20 pt-36 ">
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
      <div className="h-screen -z-10 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="absolute z-10 w-4 h-2 bg-red-500">
        <LanguageSwitcher />
      </div>

      <div className="flex justify-center relative my-20 z-10 flex-col items-center">
        <Image src={Logo} alt="Logo" />
        <div className="mt-5 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web App from AG
          </h2>
        </div>
      </div>
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words={t("main_title")}
      />
      <p className=" text-white text-center md:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl">
        Hi. I'm Aliskhan, a Frontend developer {t("main_title")}
      </p>

      <a href="#about">
        <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};

export default Hero;
