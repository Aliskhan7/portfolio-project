import React, { useEffect, useState } from "react";
import { socialMedia } from "@/data";
import { Form } from "@/components/ui/Form";

const Footer = () => {
  return (
    <footer
      className="w-full pb-10 mb-[30px] lg:mb-[90px] md:mb-5"
      id="contact"
    >
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-[1]">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        {/*<h1 className="heading lg:max-w-[45vw]">*/}
        {/*  Ready to take <span className="text-purple">your</span> digital*/}
        {/*  presence to the next level?*/}
        {/*</h1>*/}
        <h1 className="heading lg:max-w-[45vw]">
          Готовы поднять <span className="text-purple">свое</span> цифровое
          присутствие на новый уровень?
        </h1>
        {/*<p className="text-white-200 md:mt-10 my-5 text-center">*/}
        {/*  Reach out to me today and let&apos;s discuss how I can help you*/}
        {/*  achieve your goals.*/}
        {/*</p>*/}
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Свяжитесь со мной сегодня, и давайте обсудим, как я могу помочь вам
          достичь ваших целей..
        </p>
        <Form />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 AG
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
