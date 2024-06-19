"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FileSpreadsheet, Mail, ClipboardPenLine } from "lucide-react";
import { GiOpenGate } from "react-icons/gi";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const templateRoutes = [
  {
    label: "Invoice",
    icon: FileSpreadsheet,
    href: "/pos/catalogue/template/invoice",
  },
  {
    label: "Job Card",
    icon: ClipboardPenLine,
    href: "/pos/catalogue/template/job-card",
  },
  {
    label: "Gate Pass",
    icon: GiOpenGate,
    href: "/pos/catalogue/template/gate-pass",
  },
  { label: "Messaging", icon: Mail, href: "/pos/catalogue/template/messaging" },
];

export const CatTemplateClient = () => {
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Templates"
          description="Customize the templates according to your preferences"
        />
      </div>

      <div className="pb-6">
        <Separator className="h-[0.5px]" />
      </div>

      <div className="grid grid-cols-2 gap-8 h-[70vh] pb-4 px-4">
        {templateRoutes.map((route, index) => (
          <Link
            key={route.href}
            href={route.href}
            className="flex flex-col space-y-1.5 justify-center items-center bg-primary/10 rounded-lg text-primary/80 font-bold cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            <route.icon className="h-5 w-5" />
            <div>{route.label}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
