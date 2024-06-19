import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { SignatureFont } from "@/lib/types/types";

type SignatureFontSelectorProps = {
    typedSignatureFonts: SignatureFont[];
    selectedFont: SignatureFont;
    setSelectedFont: (value: SignatureFont) => void;
}

const SignatureFontSelector = ({
    typedSignatureFonts,
    selectedFont,
    setSelectedFont,
}: SignatureFontSelectorProps) => {
    return (
        <div className="flex gap-2">
            {/* Font select */}
            <Select
                defaultValue={
                    selectedFont.variable ?? typedSignatureFonts[0].variable
                }
                onValueChange={(fontVariable) => {
                    // Find the selected font object based on the variable
                    const selectedFontObject = typedSignatureFonts.find(
                        (font) => font.variable === fontVariable
                    );

                    if (selectedFontObject) {
                        setSelectedFont(selectedFontObject);
                    }
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select Font" />
                </SelectTrigger>
                <SelectContent className="z-[1000]">
                    {typedSignatureFonts.map((font) => (
                        <SelectItem
                            key={font.name}
                            value={font.variable}
                            style={{
                                fontFamily: selectedFont.variable,
                            }}
                            className="py-2 text-sm"
                        >
                            {font.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SignatureFontSelector;