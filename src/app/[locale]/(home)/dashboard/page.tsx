
import { serverTranslation } from '@/lib/i18n/i18nServer';
const DashboardPage = async ({params}: {params: {locale: string} | Promise<{locale: string}>}) => {
    const {locale} = await params;
    const { t } = await serverTranslation(locale);
    return <div className="text-2xl font-bold">{t("hello")} {locale}</div>;
};

export default DashboardPage;