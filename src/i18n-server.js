import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

// Server-side i18n init: no localStorage, no browser APIs
if (!i18n.isInitialized) {
  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
    },
    lng: "hr",
    fallbackLng: "hr",
    interpolation: { escapeValue: false },
    returnNull: false,
  });
}

export default i18n;
