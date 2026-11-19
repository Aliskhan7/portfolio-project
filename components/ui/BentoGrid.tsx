"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import dynamic from "next/dynamic";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { CONTACT_EMAIL, stackLeft, stackRight } from "@/data";

// react-lottie обращается к document при импорте — грузим только в браузере
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const GlobeDemo = dynamic(
  () => import("@/components/ui/GridGlobe").then((m) => m.GlobeDemo),
  {
    ssr: false,
  },
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{ background: "rgb(4,7,29)" }}
    >
      <div
        className={cn(
          id === 6 && "flex justify-center flex-col mx-auto",
          "h-full",
        )}
      >
        <div className="w-full h-full absolute">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt=""
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
          {id === 1 && (
            // Затемнение под текстом, чтобы заголовок читался поверх картинки
            <div className="absolute inset-0 bg-gradient-to-t from-[#04071d] via-[#04071d]/60 to-transparent" />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80",
          )}
        >
          {spareImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spareImg}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 6 && "min-h-10",
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        </div>
        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute top-0 right-1 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
              {stackLeft.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-5 py-2 px-4 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              {stackRight.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-5 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id == 6 && (
          <div className="mt-5 relative max-w-max mx-auto bottom-5">
            <div className="absolute -bottom-5 right-0 mx-auto">
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <MagicButton
              title={copied ? "Email скопирован" : "Скопировать email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};
