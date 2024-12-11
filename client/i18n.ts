import i18next, { use } from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  // resources: {
  //   en: {
  //     main_title: "hello world",
  //   },
  //   ru: {
  //     main_title: "аываыаыв",
  //   },
  // },
});
export default i18next;
