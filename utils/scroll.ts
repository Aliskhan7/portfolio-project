// Отступ под плавающее меню, чтобы заголовок секции не прятался под ним
const NAV_OFFSET = 100;

export const scrollToId = (href: string) => {
  const element = document.querySelector(href);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};
