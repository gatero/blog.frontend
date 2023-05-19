import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from './en-US';
import es_MX from './es-MX';

const resources = {
  en: {
    translation: en_US,
  },
  es: {
    translation: es_MX,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
