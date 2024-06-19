"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cva } from "class-variance-authority";
import { useDebounce } from "use-debounce";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PosSearch = () => {
  const router = useRouter();
  const initialRender = useRef();

  const [text, setText] = useState("");
  const [query] = useDebounce(text, 750);

  useEffect(() => {}, [text]);
  return (
    <>
      <div className="flex flex-col space-y-2 items-center pt-1 justify-center">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search"
          className="w-[450px] bg-primary/5"
        />
        <Card
          className={cn(
            "w-[450px] absolute top-[52px] h-[500px] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            text.length > 0 ? "" : "hidden"
          )}
        ></Card>
      </div>
    </>
  );
};

export default PosSearch;
