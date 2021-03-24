import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

import it from './locales/it';
import en from './locales/en';

i18n.use(LanguageDetector)
    .use(initReactI18next).init({
        fallbackLng: 'it',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            it,
            en
        },
    });

export default i18n;
