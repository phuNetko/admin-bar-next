import { serverTranslation } from "@/lib/i18n/i18nServer";

const ProductDetailPage = async ({params}: {params: {locale: string, id: string} | Promise<{locale: string, id: string}>}) => {
    const {locale, id} = await params;
    const { t } = await serverTranslation(locale);  
    return <div>{t("hello")} {id}</div>;
};

export default ProductDetailPage;