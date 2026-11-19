import React from "react";
import { cn } from "@/utils/cn";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  type = "button",
  disabled = false,
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="relative flex h-12 overflow-hidden w-full mx-auto rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple md:w-60 md:mt-10 disabled:cursor-wait disabled:opacity-80 transition-opacity"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          otherClasses,
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
