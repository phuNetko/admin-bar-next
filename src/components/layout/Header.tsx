"use client"
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "token=; path=/";
    router.push("/");
  };
  return (
    <header className="h-16 flex items-center px-6 border-b dark:border-gray-700 bg-[#2E3A59] dark:bg-gray-800 shadow justify-between">
      {/* <span className="font-semibold text-lg text-white">{t(pageName)}</span> */}
      <span className="font-semibold text-lg text-white">Header</span>
      <button className="bg-red-500 text-white p-2 rounded-md" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header; 