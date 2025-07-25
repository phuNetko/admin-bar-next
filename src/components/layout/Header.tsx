"use client"
import { useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
  
const Header = ({locale}: {locale: string}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "token=; path=/";
    router.push("/");
  };
  return (
    <header className="h-16 flex items-center px-6 border-b dark:border-gray-700 bg-[#2E3A59] dark:bg-gray-800 shadow justify-between">
      {/* <span className="font-semibold text-lg text-white">{t(pageName)}</span> */}
      <span className="font-semibold text-lg text-white">Header</span>
      <LanguageSwitcher locale={locale} />
      <button className="bg-red-500 text-white py-1 px-2 rounded-md" onClick={handleLogout}>{t("logout")}</button>
    </header>
  );
};

export default Header; 