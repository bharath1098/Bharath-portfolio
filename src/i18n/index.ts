import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../../public/locales/en.json'
import kn from '../../public/locales/kn.json'
import hi from '../../public/locales/hi.json'
import te from '../../public/locales/te.json'

const resources = {
  en: { translation: en },
  kn: { translation: kn },
  hi: { translation: hi },
  te: { translation: te },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'kn', 'hi', 'te'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = 'ltr'
})

i18n.on('initialized', () => {
  document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language
})

document.documentElement.dir = 'ltr'

export default i18n
