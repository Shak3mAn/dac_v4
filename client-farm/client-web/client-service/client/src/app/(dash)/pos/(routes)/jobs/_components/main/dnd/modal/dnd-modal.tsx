"use client";

import { RiDragDropLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";
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

interface DndModalProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
}
export default function DndModal({ children1, children2 }: DndModalProps) {
  const desktopModalRef = useRef(null);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children1}</DialogTrigger>
        <DialogContent>{children2}</DialogContent>
      </Dialog>
    </>
  );
}
