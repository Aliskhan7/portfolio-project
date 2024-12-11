"use client";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useRouter } from "next/compat/router";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [language, setLanguage] = useState("id");
  const handleLanguageChange = (lang: any) => {
    const lang1 = lang.target.value;
    console.log(lang1);
    setLanguage(lang1);
    // console.log(lang);
    i18n.changeLanguage(lang1);
    // router!.push(router!.asPath, router!.asPath, { locale: lang });
  };

  return (
    <select onChange={handleLanguageChange} value={language}>
      <option value="id">en</option>
      <option value="en">ru</option>
    </select>
    // <div>
    //   <button onClick={() => handleLanguageChange("en")}>English</button>
    //   <button onClick={() => handleLanguageChange("ru")}>Русский</button>
    // </div>
  );
};

export default LanguageSwitcher;
