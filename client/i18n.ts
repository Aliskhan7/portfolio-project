import { initReactI18next } from "react-i18next";
import en from "./public/locales/en/en.json";
import ru from "./public/locales/ru/ru.json";
import i18n from "i18next";

const locale: string | null = localStorage.getItem("lang");
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: locale || "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
