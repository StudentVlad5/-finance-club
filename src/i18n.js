import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUa from './translate/ua.json';
import translationDe from './translate/de.json';

const resources = {
  ua: {
    translation: translationUa
  },
  de: {
    translation: translationDe
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
