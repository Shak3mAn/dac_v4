import { MoreHorizontal, MoreVertical } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { Loader } from "@/components/ui/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ServiceBay = () => {
  return (
    <>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center  justify-between space-y-0 pb-1">
          <CardTitle className="text-xl font-bold">Service Center</CardTitle>
          <Button variant={"outline"} size="icon">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </CardHeader>
        <div className="pt-4 pb-4 px-4">
          <Separator className="h-[0.5px]" />
        </div>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4 pt-4">
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              1
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              2
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              3
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              4
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              5
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              6
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              7
            </div>
            <div className="bg-primary/15 h-[180px] rounded-lg text-primary font-bold items-center justify-center flex cursor-pointer hover:scale-110 active active:scale-95 transition-all duration-200 ease-in-out shadow-sm">
              8
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-2 pt-4 px-2 pb-6">
             <div className="flex flex-row items-center justify-center space-x-2">
<div className="rounded-sm bg-green-600 bg-opacity-30 p-2" />
             <span className="text-muted-foreground font-medium text-xs tracking-tight">
                Booked
             </span>
             </div>
             <div className="flex flex-row items-center justify-center space-x-2">
<div className="rounded-sm bg-red-600 bg-opacity-30 p-2" />
             <span className="text-muted-foreground font-medium text-xs tracking-tight">
                Occupied
             </span>
             </div>
             <div className="flex flex-row items-center justify-center space-x-4">
<div className="rounded-sm bg-gray-600 bg-opacity-30 p-2" />
             <span className="text-muted-foreground font-medium text-xs tracking-tight">
                Free
             </span>
             </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
