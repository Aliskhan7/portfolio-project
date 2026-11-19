import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section className="py-20" id="clients">
      <h2 className="heading">
        Нам <span className="text-purple">доверяют</span>
      </h2>
      <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
        {companies.map(({ id, img, name }) => (
          <li
            key={id}
            className="flex h-12 w-32 items-center justify-center md:w-40"
          >
            {/* Логотипы в одном белом цвете, чтобы смотрелись единым рядом */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={name}
              title={name}
              loading="lazy"
              className="max-h-full max-w-full object-contain brightness-0 invert opacity-60 transition-opacity duration-300 hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
