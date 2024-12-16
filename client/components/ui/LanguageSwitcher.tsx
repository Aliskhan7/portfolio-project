import { useState } from "react";
import i18n from "../../i18n";
import Link from "next/link";
export enum Locale {
  Rus = "ru",
  Eng = "en",
}

// TODO: Don't understand why donn't work right
const LanguageSwitcher = () => {
  // const [language, setLanguage] = useState(i18n.language);
  //
  // const handleLanguageChange = async () => {
  //   const newLanguage = i18n.language === Locale.Rus ? Locale.Eng : Locale.Rus;
  //   i18n.changeLanguage(newLanguage);
  //   setLanguage(newLanguage);
  // };
  //
  // language && localStorage.setItem("lang", language);

  return (
    <>
      {/*<select*/}
      {/*  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"*/}
      {/*  onChange={handleLanguageChange}*/}
      {/*  value={language}*/}
      {/*>*/}
      {/*  <option value="ru">rus</option>*/}
      {/*  <option value="en">*/}
      {/*    <svg*/}
      {/*      aria-hidden="true"*/}
      {/*      className="h-3.5 w-3.5 rounded-full me-2"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      id="flag-icon-css-de"*/}
      {/*      viewBox="0 0 512 512"*/}
      {/*    >*/}
      {/*      <path fill="#ffce00" d="M0 341.3h512V512H0z" />*/}
      {/*      <path d="M0 0h512v170.7H0z" />*/}
      {/*      <path fill="#d00" d="M0 170.7h512v170.6H0z" />*/}
      {/*    </svg>*/}
      {/*    eng*/}
      {/*  </option>*/}
      {/*</select>*/}
      <div>
        <Link href="/" locale="ru">
          <span>rus</span>
        </Link>
        <Link href="/" locale="en">
          <span>eng</span>
        </Link>
      </div>
    </>
  );
};

export default LanguageSwitcher;
