import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import { EstimatesTab } from "./tab1"
import { InvoiceTab } from "./tab2"

type Props = {}

export const OrderStatusTabs = (props: Props) => {
    return (
        <div>
            <Tabs defaultValue="invoice">
                <TabsList className="bg-primary/5 w-full h-9 rounded-lg px-2 grid grid-cols-2">
                    <TabsTrigger
                        value="estimate"
                        className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md font-sans font-semibold"
                    >
                        Estimates
                    </TabsTrigger>
                    <TabsTrigger
                        value="invoice"
                        className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md font-sans font-semibold"
                    >
                        Invoices
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="estimate">
                    <EstimatesTab />
                </TabsContent>
                <TabsContent value="invoice">
                    <InvoiceTab />
                </TabsContent>
            </Tabs>
        </div>
    )
}

