// lib/i18n.ts
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
if (!i18n.isInitialized) {
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'cookie'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: `${process.env.NEXT_PUBLIC_URL_LANGUAGE_COMMON}/{{lng}}/common.json`,
    },
    ns: ['common'],
    defaultNS: 'common',
    react: { useSuspense: false }, // cần nếu bạn dùng Next.js client component
  });
}
export default i18n;
