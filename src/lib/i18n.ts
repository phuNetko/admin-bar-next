// lib/i18n.ts
'use client';

import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    backend: {
      loadPath: `${process.env.NEXT_PUBLIC_URL_LANGUAGE_COMMON}/{{lng}}/common.json`,
    },
    ns: ['common'],
    defaultNS: 'common',
    react: { useSuspense: false }, // cần nếu bạn dùng Next.js client component
  });

export default i18n;
