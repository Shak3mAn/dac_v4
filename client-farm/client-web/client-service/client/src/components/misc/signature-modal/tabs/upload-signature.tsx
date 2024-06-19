import { Check, Trash2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import BaseButton from "../../reusables/base-button";

import { useSignatureContext } from "@/lib/providers/signature-provider";

import { SignatureTabs } from "@/lib/types/types";
import Image from "next/image";
import { Input } from "@/components/ui/input";

type UploadSignatureProps = {
  handleSaveSignature: () => void;
};

const UploadSignature = ({ handleSaveSignature }: UploadSignatureProps) => {
  const {
    uploadSignatureRef,
    uploadSignatureImg,
    handleUploadSignatureChange,
    handleRemoveUploadedSignature,
  } = useSignatureContext();

  return (
    <TabsContent value={SignatureTabs.UPLOAD}>
      <Card className="border-none shadow-none">
        <CardContent className="space-y-2 p-0">
          <div style={{ height: "15rem" }}>
            {uploadSignatureImg ? (
              <Image
                alt="uploadSignature"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "15rem",
                }}
                width={300}
                src={uploadSignatureImg}
              />
            ) : (
              <div className="text-primary font-medium text-sm pb-2 pt-1.5 px-2">
                Upload image
              </div>
            )}
            {/* Upload file here */}
            <div className="px-2">
            <Input
              ref={uploadSignatureRef}
              type="file"
              onChange={handleUploadSignatureChange}
              accept="image/*"
              className="text-muted-foreground text-sm cursor-pointer"
            />
            </div>
          </div>
        </CardContent>
        <div className="flex justify-end gap-3 pt-4">
          {/* Buttons and operations */}
          {uploadSignatureImg && (
            <BaseButton
              tooltipLabel="Remove signature image"
              variant="outline"
              onClick={handleRemoveUploadedSignature}
            >
              Remove
              <Trash2 />
            </BaseButton>
          )}
          <BaseButton
            tooltipLabel="Save changes"
            disabled={!uploadSignatureImg}
            onClick={handleSaveSignature}
          >
            Done
            <Check />
          </BaseButton>
        </div>
      </Card>
    </TabsContent>
  );
};

export default UploadSignature;
