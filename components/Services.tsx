import React from "react";
import { services } from "@/data";
import AppIcon from "@/components/ui/AppIcon";

const Services = () => {
  return (
    <section className="py-20" id="services">
      <h2 className="heading">
        Что мы <span className="text-purple">делаем</span>
      </h2>
      <p className="text-center text-white-200 mt-4 max-w-2xl mx-auto">
        Берём задачу бизнеса целиком: проектируем, разрабатываем, связываем с
        вашими системами и сопровождаем после запуска.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071d] p-6 lg:p-8 transition duration-300 hover:-translate-y-1 hover:border-purple/40"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.1] bg-[#10132E] text-purple">
              <AppIcon name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
            <p className="mt-3 text-sm lg:text-base text-white-100">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
