"use client";

import { Box, Plus } from "lucide-react";
import { RiDragDropLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { UniqueIdentifier } from "@dnd-kit/core";

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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useWorkflowDndContainer } from "@/store/jobs/use-dnd";
import { Input } from "@/components/ui/input";

interface WorkflowDndModalProp {
  currentContainerId?: UniqueIdentifier;
}

export const WorkflowDndContainerModal = () => {
  const [containerName, setContainerName] = useState("");
  const workflowContainer = useWorkflowDndContainer();

  const onAddContainer = () => {
    if (!containerName) return;

    const id = `container-${uuidv4()}`;

    workflowContainer.addContainer({
      id,
      items: [],
      title: containerName,
    });

    setContainerName("");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"default"} size={"default"}>
            <Plus className="h-4 w-4 mr-2" /> Container
          </Button>
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 pb-6 w-[500px] max-w-[700px]">
          <DialogHeader className="pt-2">
            <div className="flex space-x-2">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Box className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <DialogTitle>Container</DialogTitle>
                <DialogDescription>Add Container</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="my-0">
            <Separator className="h-[0.5px]" />
          </div>
          <div className="flex flex-col space-y-6 my-2">
            <Input
              type="text"
              placeholder="Container Title"
              name="containername"
              value={containerName}
              onChange={(e) => setContainerName(e.target.value)}
            />
            <Button onClick={onAddContainer}>Add Container</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const WorkflowDndItemModal = ({
  currentContainerId,
}: WorkflowDndModalProp) => {
  const [itemName, setItemName] = useState("");
  const workflowContainer = useWorkflowDndContainer();

  const onAddItem = () => {
    if (!itemName) return;
    const id = `item-${uuidv4()}`;
    const container = workflowContainer.isContainer.find(
      (item) => item.id === currentContainerId
    );
    workflowContainer.addItemToContainer(container?.id, {
      id,
      title: itemName,
    });
    setItemName("");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} size={"default"}>
            <Plus className="h-4 w-4 mr-2" /> Item
          </Button>
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 pb-6 w-[500px] max-w-[700px]">
          <DialogHeader className="pt-2">
            <div className="flex space-x-2">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Box className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <DialogTitle>Item</DialogTitle>
                <DialogDescription>Add Item</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="my-0">
            <Separator className="h-[0.5px]" />
          </div>
          <div className="flex flex-col space-y-6 my-2">
            <Input
              type="text"
              placeholder="Container Title"
              name="containername"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button onClick={onAddItem}>Add Item</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
