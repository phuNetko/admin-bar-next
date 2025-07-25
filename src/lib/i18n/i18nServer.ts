import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

export async function serverTranslation(locale: string, ns: string[] = ['common']) {
  const i18nInstance = i18next.createInstance();

  await i18nInstance
    .use(HttpBackend)
    .init({
      lng: locale,
      fallbackLng: 'en',
      supportedLngs: ['en', 'vi'],
      ns,
      defaultNS: 'common',
      backend: {
            loadPath: `${process.env.NEXT_PUBLIC_URL_LANGUAGE_COMMON}/{{lng}}/common.json`,
        },
      interpolation: {
        escapeValue: false,
      },
    });

  return {
    t: i18nInstance.t.bind(i18nInstance),
  };
}
