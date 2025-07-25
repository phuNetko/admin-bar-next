"use client";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = ({ locale }: { locale: string }) => {
  const pageTitles: Record<string, string> = {
    ["/"+ locale + "/dashboard"]: "ダッシュボード",
    ["/"+locale + "/bars"]: "バー管理",
    ["/"+locale + "/settings"]: "システム設定",
  };
  
  const { t } = useTranslation();
  const pathname = usePathname();
  const pageName = pageTitles[pathname];

  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "token=; path=/";
    router.push("/");
  };
  return (
    <header className="h-14 flex items-center px-6 border-b dark:border-gray-700 bg-[#2E3A59] shadow justify-between">
      <span className="font-semibold text-lg text-white">{pageName}</span>
      <div className="flex flex-row gap-2">
        <LanguageSwitcher locale={locale} />
        <button
          className="bg-red-500 text-white py-1 px-2 rounded-md"
          onClick={handleLogout}
        >
          {t("logout")}
        </button>
      </div>
    </header>
  );
};

export default Header;
