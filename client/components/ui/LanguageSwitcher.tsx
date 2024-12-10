import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleLanguageChange = (lang: any) => {
    i18n.changeLanguage(lang);
    router!.push(router!.asPath, router!.asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("ru")}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
