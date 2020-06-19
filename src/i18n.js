import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import sr from "./translation/sr.json";
import config from "./config.js";
// the translations
const resources = {
  en,
  sr,
};

i18n.use(initReactI18next).init({
  resources,
  lng: config.getLanguage(),
});

export default i18n;
