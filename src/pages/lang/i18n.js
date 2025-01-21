import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React",
          Invite: "Invite",
          Friends: " Friends",
        }
      },
      vn: {
        translation: {
          welcome: "Chào mừng đến với bình nguyên vô tận",
          Friends: "Mitter",
          Invite: "Nimataran"
        }
      },
      hi: {
        translation: {
          welcome: "स्वागत है React में"
        }
      }
    }
  });

export default i18n;
