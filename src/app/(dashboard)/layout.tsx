import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 h-screen w-screen">
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-6">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;