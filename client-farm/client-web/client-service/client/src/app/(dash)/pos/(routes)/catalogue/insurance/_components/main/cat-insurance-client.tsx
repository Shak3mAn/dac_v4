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
import { Umbrella } from "lucide-react";
import { CatInsuranceTable } from "./insurance-table/cat-insurance-table";

export const CatInsuranceClient = () => {
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Insurance"
          description="Establish and oversee insurer information management."
        />

        <Button variant="default" size="default">
          <div className="flex items-center">
            <Umbrella className="h-4 w-4 mr-2" /> Insurer
          </div>
        </Button>
      </div>

      <div>
        <CatInsuranceTable />
      </div>
    </>
  );
};
