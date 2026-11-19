import React from "react";
import { socialMedia } from "@/data";
import { Form } from "@/components/ui/Form";

const Footer = () => {
  return (
    <footer
      className="w-full pb-10 mb-[30px] lg:mb-[90px] md:mb-5"
      id="contact"
    >
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-[1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer-grid.svg"
          alt=""
          loading="lazy"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Расскажите о <span className="text-purple">вашей</span> задаче
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Оставьте контакты — свяжемся в течение дня, обсудим задачу и предложим
          решение.
        </p>
        <Form />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          © {new Date().getFullYear()} Студия AG · Алисхан Газаматов
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.name}
              title={info.name}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-colors hover:border-purple/50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={info.img} alt="" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
