import i18n, { use } from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translationEN from "public/static/locales/en/common.json"
import translationIT from "public/static/locales/it/common.json"
import translationPL from "public/static/locales/pl/common.json"
import { initReactI18next } from "react-i18next"

const languages = ["en", "it", "pl"]

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
  pl: {
    translation: translationPL,
  },
}

use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: languages,
})

export default i18n
