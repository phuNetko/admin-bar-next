import { serverTranslation } from "@/lib/i18n/i18nServer";
import ShopIcon from "@/assets/icons/shop";
import IncreaseIcon from "@/assets/icons/increase";
const DashboardPage = async ({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const { t } = await serverTranslation(locale);
  return (
    <div>
      <div className="flex flex-col gap-5 p-6 rounded-xl w-70 border bg-white border-[#0000001a]">
        <div className="flex flex-row justify-between">
            <h4 className="text-[12.5px] font-medium text-[#4a5565]">公開済み店舗数</h4>
            <ShopIcon />
        </div>
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold text-[#101828]">
                    156
                </h3>
            </div>
            <div className="flex flex-row gap-2 justify-start">
                <p className="text-[12.5px] text-[#101828] flex flex-row gap-1 items-center">
                <IncreaseIcon/> <span className="text-green-500">+2.1%</span> 昨日比
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
