"use client"
import Home from "@/assets/icons/Home";
import Setting from "@/assets/icons/Setting";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SchoolIcon from "@/assets/icons/SchoolIcon";

interface ISideBarItems {
    link?: string;
    icon: React.ElementType;

    title: string;
    index: number;
  }

const sidebars = [
    {
        label: 'dashboard',
        path: '/dashboard',
        icon: Home ,
        
    },
    {
        label: 'products',
        path: '/products',
        icon: SchoolIcon ,
    },
    {
        label: 'settings',
        path: '/settings',
        icon: Setting ,
    }
]

const Sidebar = () => {

    return (
      <>
        {/* {isShowSideBar && ( */}
          <>
            {/* <div
            //   onClick={() => dispatch(toggleSideBar(false))}
              className="fixed w-full h-full top-0 right-0 left-0 bottom-0 z-20 bg-[#000000cc] lg:hidden"
            ></div> */}
                  <aside className="w-64 bg-[#2E3A59] dark:bg-gray-800 shadow flex flex-col">

              <header className="filament-sidebar-header h-[4rem] shrink-0 border-b-2 border-gray-700 flex items-center justify-center relative bg-[#2E3A59]">
                <div className="flex items-center justify-center px-6 w-full">
                  <Link href="/" data-turbo="false" className="block w-full">
                    <div className="filament-brand text-white  text-[20px] font-bold tracking-tighter">Bar Quest </div>
                  </Link>
                </div>
              </header>
              <nav className="flex-1 py-6 overflow-x-hidden overflow-y-auto filament-sidebar-nav">
                <ul className="px-[30px] space-y-6">
                  <li className="filament-sidebar-group">
                    <ul className="text-sm space-y-1 -mx-3">
                      {sidebars.map((item, index) => (
                        <SideBarItems key={index} index={index} icon={item.icon} link={item.path} title={item.label} />
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
          </>
        {/* )} */}
      </>
    );
  };

  const SideBarItems = ({ link, icon: Icon, title, index }: ISideBarItems) => {

    // const dispatch = useDispatch();
    const router = useRouter();
    const path = usePathname();
    const isActive = path === link;
    const [isHover, setIsHover] = useState(false);
    const color = isActive || isHover ? '#fff' : '#000';
    // const isShowSideBar = useSelector((state: IRootState) => state.theme.isShowSideBar);
    const handleClick = () => {
      if (isActive) return;
      // dispatch(resetPagination());
      if (link) router.push(link);
      
    };
  
    return (
      <>
        <li className="filament-sidebar-item overflow-hidden">
          <div
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleClick}
            className={`
              flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition text-white cursor-pointer ${
                isActive ? `bg-[#FF673B] text-white hover:bg-[#FF673B] hover:text-white` : 'hover:bg-[#FF673B] hover:text-white'
              }`}
          >
            <Icon className={isActive || isHover ? 'svg-white' : ''} color={color}/>
            <div className="flex flex-1">
              <span className="font-normal text-[14px] ">{title}</span>
            </div>
          </div>
        </li>
      </>
    );
  };

  export default Sidebar;