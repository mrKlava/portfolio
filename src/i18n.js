import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

import { data as data_en } from './assets/data/dataEN.js'
import { data as data_fr } from './assets/data/dataFR.js'


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    returnObjects: true,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          data: data_en
        }
      },
      fr: {
        translation: {
          data: data_fr
        }
      }
    }
  });

export default i18n