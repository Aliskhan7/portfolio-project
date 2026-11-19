import { cn } from "@/utils/cn";

// Появление слов на чистом CSS: текст проявляется сразу после загрузки HTML,
// не дожидаясь гидрации JS (раньше на мобильных заголовок долго был невидим)
export const TextGenerateEffect = ({
  words,
  className,
  as: Tag = "div",
  duration = 0.5,
}: {
  words: string;
  className?: string;
  as?: "div" | "h1" | "h2";
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  return (
    <Tag className={cn("font-bold", className)}>
      <span className="block my-4 dark:text-white text-black leading-snug tracking-wide">
        {wordsArray.map((word, idx) => (
          <span
            key={word + idx}
            className={cn(
              "text-reveal",
              idx > 3 ? "text-purple" : "dark:text-white text-black",
            )}
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${idx * 0.2}s`,
            }}
          >
            {word}{" "}
          </span>
        ))}
      </span>
    </Tag>
  );
};
