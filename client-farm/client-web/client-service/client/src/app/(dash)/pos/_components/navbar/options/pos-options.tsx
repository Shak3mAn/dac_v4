"use client";

import * as React from "react";
import {
  Plus,
  Bolt,
  UserPlus,
  ClipboardPlus,
  FilePlus2,
} from "lucide-react";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";


interface PosOptionsProps {}

export const PosOptions: React.FC<PosOptionsProps> = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button variant={"outline"} size={"icon"}>
            <Plus className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="pb-5 px-5 pt-5 flex flex-col w-full">
          <div className="grid grid-cols-2 gap-4">
            <Button variant={"outline"} size={"icon"}>
              <UserPlus className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <ClipboardPlus className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <FilePlus2 className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <Bolt className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
