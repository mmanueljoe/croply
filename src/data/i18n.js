// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Twi and Ewe translations
const resources = {
  tw: {
    translation: {
      welcome: "Akwaaba",
      hello: "Agoo, wiase",
    },
  },
  ee: {
    translation: {
      welcome: "Woezɔ",
      hello: "Ɛfoa, xɔsedodo",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tw', // default language
    fallbackLng: 'tw',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
