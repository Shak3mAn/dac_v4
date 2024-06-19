import { MoreHorizontal } from "lucide-react";

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
import { TechAvailabilityTable } from "./tech-availability-table/tech-availability-table";

export const TechnicianAvailability = () => {
  return (
    <>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center  justify-between space-y-0 pb-1">
          <CardTitle className="text-xl font-bold">Technicians</CardTitle>
          <Button variant={"outline"} size="icon">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </CardHeader>

        <div className="-mt-2 pb-4 px-4 min-h-[580px]">
        <TechAvailabilityTable />
        </div>
      </Card>
    </>
  );
};
