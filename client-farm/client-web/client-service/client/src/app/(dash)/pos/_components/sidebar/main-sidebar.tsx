"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import {
  ElementRef,
  useEffect,
  useRef,
  ReactNode,
  MutableRefObject,
} from "react";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { motion, useAnimation, Variants } from "framer-motion";
import {
  Archive,
  BadgeHelp,
  CalendarCheck,
  Car,
  ClipboardList,
  ChevronRightSquare,
  Inbox,
  LayoutDashboard,
  MessageCircleMore,
  LogOut,
  Settings,
  Users,
  Clipboard,
  Boxes,
  NotebookTabs,
} from "lucide-react";
import { LiaCashRegisterSolid } from "react-icons/lia";

import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/store/use-sidebar-toggle";
import { Separator } from "@/components/ui/separator";
import LogoDark from "../../../../../../public/logo_dark-removebg.png";
import LogoLight from "../../../../../../public/logo_light-removebg.png";
import Logo2Dark from "../../../../../../public/dac-high-resolution-logo-black-transparent.png";
import Logo2Light from "../../../../../../public/dac-high-resolution-logo-white-transparent.png";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { useRouteSelect } from "@/store/pos/general";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const helperRoutes = [
  {
    label: "Settings",
    icon: Settings,
    href: "/pos/settings",
  },
  {
    label: "Help",
    icon: BadgeHelp,
    href: "/pos/help",
  },
];

const posRoutes = [
  {
    label: "DashBoard",
    icon: LayoutDashboard,
    href: "/pos",
  },
  {
    label: "P.O.S.",
    icon: LiaCashRegisterSolid,
    href: "/pos/options" 
  },
  {
    label: "Jobs",
    icon: ClipboardList,
    href: "/pos/jobs",
  },
  {
    label: "Schedule",
    icon: CalendarCheck,
    href: "/pos/schedule",
  },
  {
    label: "Workshop",
    icon: Car,
    href: "/pos/workshop",
  },
  {
    label: "Catalogue",
    icon: NotebookTabs,
    href: "/pos/catalogue/customers",
  },
  {
    label: "Inventory",
    icon: Boxes,
    href: "/pos/inventory",
  },
  // {
  //   label: "Inbox",
  //   icon: Inbox,
  //   href: "/pos/inbox",
  // },
];

interface Route {
  label: string;
  icon: ReactNode;
  href: string;
}

interface MainSidebarProps {
  // Add any additional props if necessary
}

export const MainSidebar: React.FC<MainSidebarProps> = () => {
  let isTabletMid = useMediaQuery("(max-width: 768px)");
  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const pathname = usePathname();
  const sidebarToggle = useSidebarToggle();
  const routeSelect = useRouteSelect();

  const router = useRouter();
  const params = useParams();

  // useEffect(() => {
  //   console.log("Pathname", pathname.split("/")[2]);
  // }, [pathname]);

  const handleClickEvent = (route: string) => {
    if (route === "/pos/catalogue/customers") {
      console.log(route.split("/")[2]);
      routeSelect.onSelect(route.split("/")[2]);
    } else {
      console.log(route.split("/")[2]);
      routeSelect.onDeselect();
    }

    // if(route=== "/pos/jobs") {
    //   console.log(route.split("/")[2])
    //   routeSelect.onSelect(route.split("/")[2])
    // }

    // if(route=== "/pos/inventory") {
    //   console.log(route.split("/")[2])
    //   routeSelect.onSelect(route.split("/")[2])
    // }

    // if(route=== "/pos/workshop") {
    //   console.log(route.split("/")[2])
    //   routeSelect.onSelect(route.split("/")[2])
    // }
  };
  return (
    <>
      <div
        ref={sidebarRef}
        className={cn(
          "space-y-4 pt-3 hidden md:flex md:flex-col h-screen bg-[#070207] shadow-2xl bg-opacity-100 text-primary border-r border-white/20 overflow-hidden transition-all ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-1000 data-[state=open]:duration-500 inset-y-0 left-0  data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left fade-in-45 fade-out",
          sidebarToggle.isOpen ? "w-[250px]" : "w-[4rem]"
        )}
      >
        {sidebarToggle.isOpen ? (
          <>
            {/* Sidebar Opened */}
            <div className="px-3 pb-1 pt-1 flex-1">
              {/* Logo */}
              <div>
                <Link
                  href="/pos"
                  className="justify-center flex items-center pl-3 pb-4 mb-1"
                >
                  <Image
                    alt="Logo"
                    src={LogoDark}
                    width={120}
                    className="items-center object-cover justify-center flex"
                  />
                </Link>
              </div>
              <Separator className="opacity-90 bg-white/15 h-[1px]" />

              {/* Links */}
              <div className="text-sm tracking-normal font-medium pt-3 pb-3 ml-1 text-white/90 opacity-70 justify-start items-center flex">
                Overview
              </div>

              <div className="space-y-[1px]">
                {posRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm group flex px-3 py-2 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300",
                      pathname.split("/pos")[0] === route.href
                        ? "text-white bg-white/10"
                        : "text-stone-400",
                      pathname.split("/")[2] === route.href.split("/")[2]
                        ? "text-white bg-white/10"
                        : "text-stone-400"
                    )}
                    onClick={() => handleClickEvent(route.href)}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3 font-medium")} />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help and Logout */}
            <div className="px-3 -mt-1 py-1 flex-col-reverse pb-6 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-slate-800 overflow-y-scroll">
              <Separator className="opacity-95 bg-white/10" />

              <div className="pt-3">
                <div className="text-sm -pt-1 tracking-tight pb-1 ml-1 text-white/90 opacity-70 justify-start items-center flex">
                  Account
                </div>
                <div className="flex-col-reverse">
                  {helperRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm group flex px-3 py-2 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300",
                        pathname.split("/")[2] === route.href.split("/")[2]
                          ? "text-white bg-white/10"
                          : "text-stone-400"
                      )}
                      onClick={() => handleClickEvent(route.href)}
                    >
                      <div className="flex items-center flex-1">
                        <route.icon className={cn("h-5 w-5 mr-3")} />
                        {route.label}
                      </div>
                    </Link>
                  ))}
                  <button
                    onClick={() => console.log("LogOut")}
                    className={cn(
                      "text-sm group flex px-3 py-2 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg text-zinc-400 transition-all ease-in-out duration-300"
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <LogOut className={cn("h-5 w-5 mr-3")} />
                      Logout
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Sidebar Closed */}
            <div className="px-3 pb-4 pt-2 flex-1">
              {/* Logo */}
              <div className="py-1.5">
                <Link
                  href="/pos"
                  className="flex items-center justify-center pl-0 pb-2 mb-1"
                >
                  <Image
                    alt="SmallLogo"
                    src={LogoDark}
                    width={95}
                    height={95}
                    className="flex items-center justify-center object-contain transition-all ease-in-out duration-300"
                  />
                </Link>
              </div>
              <Separator className="opacity-90 bg-white/10" />

              {/* Links */}
              <div className="space-y-1 pt-2">
                {posRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm group flex px-2 py-2 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300",
                      pathname.split("/pos")[0] === route.href
                        ? "text-white bg-white/10"
                        : "text-stone-400",
                      pathname.split("/")[2] === route.href.split("/")[2]
                        ? "text-white bg-white/10"
                        : "text-stone-400"
                    )}
                    onClick={() => handleClickEvent(route.href)}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3 font-medium")} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help and Logout*/}
            <div className="px-2 py-2 flex-col-reverse pb-6 scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-slate-800 overflow-hidden">
              <Separator className="opacity-90 bg-white/10" />

              <div>
                <div className="flex-col-reverse">
                  {helperRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm group flex px-3 py-2 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300",
                        pathname.split("/")[2] === route.href.split("/")[2]
                          ? "text-white bg-white/10"
                          : "text-stone-400"
                      )}
                      onClick={() => handleClickEvent(route.href)}
                    >
                      <div className="flex items-center flex-1">
                        <route.icon className={cn("h-5 w-5 mr-3")} />
                      </div>
                    </Link>
                  ))}
                  <GeneralTooltip label="Logout">
                    <button
                      onClick={() => console.log("LogOut")}
                      className={cn(
                        "text-sm group flex px-3 py-2 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300 text-zinc-400 "
                      )}
                    >
                      <div className="flex items-center flex-1">
                        <LogOut className={cn("h-5 w-5 mr-3")} />
                      </div>
                    </button>
                  </GeneralTooltip>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
