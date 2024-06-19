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

import { cn } from "@/lib/utils";
import {
  usePosSecondarySidebarToggle,
  useSidebarToggle,
} from "@/store/use-sidebar-toggle";

import { Separator } from "@/components/ui/separator";

import { GeneralTooltip } from "@/components/misc/general-tooltip";
import {
  Boxes,
  Car,
  CarFront,
  ChevronsLeft,
  ChevronsRight,
  FileText,
  Handshake,
  Store,
  Truck,
  Umbrella,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useRouteSelect } from "@/store/pos/general";

const posCatalog = [
  {
    label: "Customers",
    icon: Users,
    href: "/pos/catalogue/customers",
  },
  {
    label: "Vehicles",
    icon: CarFront,
    href: "/pos/catalogue/vehicles",
  },
  {
    label: "Fleets",
    icon: Truck,
    href: "/pos/catalogue/fleets",
  },
  {
    label: "Suppliers",
    icon: Store,
    href: "/pos/catalogue/suppliers",
  },
  {
    label: "Intermediaries",
    icon: Handshake,
    href: "/pos/catalogue/intermediary",
  },
  {
    label: "Insurance",
    icon: Umbrella,
    href: "/pos/catalogue/insurance",
  },
  {
    label: "Templates",
    icon: FileText,
    href: "/pos/catalogue/template",
  },
  {
    label: "Services",
    icon: Wrench,
    href: "/pos/catalogue/service",
  },
  {
    label: "Inventory Categories",
    icon: Boxes,
    href: "/pos/catalogue/inventory-category",
  },
];

interface Route {
  label: string;
  icon: ReactNode;
  href: string;
}

interface SecondarySidebarProps {}

export const SecondarySidebar: React.FC<SecondarySidebarProps> = () => {
  let isTabletMid = useMediaQuery("(max-width: 768px)");
  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const routeSelect = useRouteSelect();
  const sidebarToggle = usePosSecondarySidebarToggle();

  useEffect(() => {}, []);

  return (
    <>
      {routeSelect.isRoute ? (
        <>
          {routeSelect.routeName ? (
            <div
              ref={sidebarRef}
              className="bg-background h-screen text-primary border-r overflow-hidden flex flex-col space-y-2 p-4 shadow-sm transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 w-[250px] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
            >
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col items-center space-y-2 pt-2">
                  <span className="capitalize text-xl font-bold text-foreground">
                    {routeSelect.routeName}
                  </span>
                </div>
                <div
                  className="cursor-pointer z-[120] -mt-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus: ring-primary/35 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                  onClick={routeSelect.onDeselect}
                >
                  <ChevronsLeft className="h-4 w-4" />
                </div>
              </div>

              <div className="pb-2 hidden">
                <Separator className="h-[1px]" />
              </div>

              <div className="space-y-1.5 pt-4">
                {posCatalog.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm group flex px-3 py-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition-all ease-in-out duration-300",
                      pathname.split("/")[3] === route.href.split("/")[3]
                        ? "text-primary bg-primary/10"
                        : "text-primary/70"
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3 font-medium")} />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <div
            className={cn(
              "rounded-r-full py-2 pl-3 pr-2 flex fixed items-center justify-center cursor-pointer bg-background text-primary shadow-md bottom-20 border border-input hover:bg-accent hover:ml-1 hover:text-accent-foreground hover:pr-4 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out",
              sidebarToggle.isOpen ? "left-[250px]" : "left-[4rem]"
            )}
            onClick={() => routeSelect.onOpen()}
          >
            <GeneralTooltip label="Open">
              <ChevronsRight className="h-5 w-5" />
            </GeneralTooltip>
          </div>
        </>
      )}
    </>
  );
};
