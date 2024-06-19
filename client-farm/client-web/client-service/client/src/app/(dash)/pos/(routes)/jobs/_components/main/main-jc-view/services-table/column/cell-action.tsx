"use client";

import axios from "axios";
import { Copy, Edit, Maximize2, Wrench } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { NJCServiceCard } from "../../../../../new/_components/main/sheets/njc-services/services";

import { JCServicesColumn } from "./services-column";

interface CellActionProps {
    data: JCServicesColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const params = useParams();

    const onConfirm = () => {
        console.log("On Confirm!");
    };

    const onCopy = () => {
        console.log("On Copy!");
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="h-8 w-8 p-0">
                        <div className="flex items-center">
                        <span className="sr-only">Open menu</span>
                        <Maximize2 className="h-4 w-4" />
                        </div>
                    </Button>
                </DialogTrigger>

                <DialogContent className="px-6 pt-6 pb-6 w-[700px] max-w-[800px]">
                    <DialogHeader className="pt-2 flex flex-row items-center justify-between">
                        <div className="flex space-x-2">
                            <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                                <Wrench className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                                <DialogTitle>Service</DialogTitle>
                                <DialogDescription>Information Regarding the service</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="py-2">
                        <Separator className="h-[0.5px]" />
                    </div>

                    <NJCServiceCard />
                </DialogContent>
            </Dialog>

        </>
    );
};
