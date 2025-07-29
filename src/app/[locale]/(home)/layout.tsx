import Sidebar from "@/common/layout/Sidebar";
import Header from "@/common/layout/Header";
const DashboardLayout = async ({ children, params }: { children: React.ReactNode, params: {locale: string} | Promise<{locale: string}> }) => {
  const {locale} = await params;
  console.log(locale);
  return (
    <div className="flex-1 h-screen w-screen">
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header locale={locale} />
          <div className="p-6">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;