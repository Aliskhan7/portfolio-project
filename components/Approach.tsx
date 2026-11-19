"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20" id="approach">
      <h2 className="heading">
        Как мы <span className="text-purple">работаем</span>
      </h2>
      <p className="text-center text-white-200 mt-4 text-sm lg:hidden">
        Нажмите на этап, чтобы прочитать подробнее
      </p>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Планирование и стратегия"
          order="Этап 1"
          des="Вместе определяем цели, целевую аудиторию и ключевые функции. Обсуждаем структуру сайта, навигацию и требования к контенту."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Разработка и регулярные отчёты"
          order="Этап 2"
          des="Как только план согласован, приступаем к работе. От первых набросков до готового кода — держим вас в курсе на каждом шаге."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Сборка и запуск"
          order="Этап 3"
          des="По утверждённому дизайну превращаем всё в рабочий код, запускаем проект и остаёмся на связи после релиза."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  order,
  children,
  des,
}: {
  title: string;
  order: string;
  children?: React.ReactNode;
  des: string;
}) => {
  // На десктопе открывается по наведению, на тач-устройствах — по тапу
  const [active, setActive] = React.useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={active}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive((v) => !v);
        }
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((v) => !v)}
      className="border border-white/[0.2] flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple"
      style={{ background: "rgb(4,7,29)" }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white opacity-30" />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className={cn(
            "text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-200 min-w-40 mx-auto flex items-center justify-center",
            active && "opacity-0 -translate-y-[calc(50%+1rem)]",
          )}
        >
          <OrderBadge order={order} />
        </div>
        <h3
          className={cn(
            "text-white text-center text-3xl relative z-10 mt-4 font-bold transition duration-200",
            active ? "opacity-100 -translate-y-2" : "opacity-0",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm relative z-10 mt-4 text-center text-[#E4ECFF] transition duration-200",
            active ? "opacity-100 -translate-y-2" : "opacity-0",
          )}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const OrderBadge = ({ order }: { order: string }) => (
  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl whitespace-nowrap">
      {order}
    </span>
  </span>
);

const Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
