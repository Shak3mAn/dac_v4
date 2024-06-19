import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
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
import { cn } from "@/lib/utils";
import { Car } from "lucide-react";
import { CatVehicleTable } from "./vehicles-table/vehicle-table";

export const CatVehicleClient = () => {
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Vehicles"
          description="Administer and curate vehicle information."
        />

        <Button variant="default" size="default">
          <div className="flex items-center">
            <Car className="h-4 w-4 mr-2" /> Vehicle
          </div>
        </Button>
      </div>

      <div>
        <CatVehicleTable />
      </div>
    </>
  );
};
