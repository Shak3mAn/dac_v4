"use client";

import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { FileSignature } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

import DrawSignature from "./tabs/draw-signature";
import TypeSignature from "./tabs/type-signature";
import UploadSignature from "./tabs/upload-signature";
import { isDataUrl } from "@/lib/utils/helpers";
import { SignatureTabs } from "@/lib/types/types";
import { useSignatureContext } from "@/lib/providers/signature-provider";
import Image from "next/image";

type SignatureModalProps = {};

const SignatureModal = ({}: SignatureModalProps) => {
  const { setValue } = useFormContext();

  const {
    handleCanvasEnd,
    signatureData,
    typedSignature,
    selectedFont,
    uploadSignatureImg,
    signatureRef,
  } = useSignatureContext();

  const [open, setOpen] = useState(false);

  const [tab, setTab] = useState<string>(SignatureTabs.DRAW);

  const onTabChange = (value: string) => {
    setTab(value as string);
  };

  const signature = useWatch({
    name: "details.signature.data",
  });

  /**
   * Function that handles signature save logic for all tabs (draw, type, upload)
   */
  const handleSaveSignature = () => {
    if (tab == SignatureTabs.DRAW) {
      handleCanvasEnd();

      // This setValue was removed from handleCanvasEnd and put here to prevent
      // the signature from showing updated drawing every time drawing stops
      setValue("details.signature.data", signatureData, {
        shouldDirty: true,
      });

      setOpen(false);
    }

    if (tab == SignatureTabs.TYPE) {
      setValue(
        "details.signature",
        {
          data: typedSignature,
          fontFamily: selectedFont.name,
        },
        {
          shouldDirty: true,
        }
      );

      setOpen(false);
    }

    if (tab == SignatureTabs.UPLOAD) {
      setValue("details.signature.data", uploadSignatureImg, {
        shouldDirty: true,
      });
      setOpen(false);
    }
  };

  // When opening modal or switching tabs, apply signatureData to the canvas when it's available
  // Persists the signature
  useEffect(() => {
    if (open && signatureData) {
      // Access the canvas element and draw the signature
      setTimeout(() => {
        const canvas = signatureRef?.current;
        if (canvas) {
          canvas.fromDataURL(signatureData);
        }
      }, 50);
    }
  }, [open, tab]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="flex justify-start">
          <div className="flex flex-col justify-start items-start">
            <Label className="pb-2">Signature</Label>

            {signature && isDataUrl(signature) ? (
              <Image
                className="border border-black rounded-md hover:border-primary cursor-pointer bg-white"
                src={signature}
                width={300}
                height={150}
                alt=""
              />
            ) : signature && typedSignature ? (
              <div className="flex justify-center items-center w-[300px]">
                <p
                  style={{
                    fontFamily: selectedFont.variable,
                    fontSize: 55,
                  }}
                >
                  {signature}
                </p>
              </div>
            ) : (
              <div
                style={{
                  width: "300px",
                }}
                className="space-y-1.5 flex flex-col justify-center items-center h-[155px] rounded-md bg-primary/5  border-primary/30 border hover:border-primary/40 cursor-pointer"
              >
                <FileSignature className="text-muted-foreground" />
                <Label className="text-muted-foreground ">
                  Click to add signature
                </Label>
              </div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="select-none scrollbar-hide">
          <DialogTitle>Signature</DialogTitle>
          <Tabs value={tab} onValueChange={onTabChange}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger className="text-sm" value={SignatureTabs.DRAW}>
                Draw
              </TabsTrigger>
              <TabsTrigger className="text-sm" value={SignatureTabs.TYPE}>
                Type
              </TabsTrigger>
              <TabsTrigger className="text-sm" value={SignatureTabs.UPLOAD}>
                Upload
              </TabsTrigger>
            </TabsList>

            {/* DRAW */}
            <DrawSignature handleSaveSignature={handleSaveSignature} />

            {/* TYPE */}
            <TypeSignature handleSaveSignature={handleSaveSignature} />

            {/* UPLOAD */}
            <UploadSignature handleSaveSignature={handleSaveSignature} />
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignatureModal;
