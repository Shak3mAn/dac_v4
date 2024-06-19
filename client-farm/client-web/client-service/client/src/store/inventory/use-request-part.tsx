import { create } from "zustand";
import { RequestPartType } from "@/lib/types/types"

{/* Request Part Item */}
interface RequestPartItem {
    requestPartItem: RequestPartType | null;
    requestParts: RequestPartType[];
    tempRequestPart: RequestPartType | null;
    onAddRequestPartItem: (newRequestPart: RequestPartType) => void;
    onAddTempRequestPartItem: (newTempRequestPart: RequestPartType) => void;
    onUpdateRequestPartItem: (requestPartId: string, updateRequestPart: RequestPartType) => void;
    onDeleteRequestPartItem: (requestPartId: string) => void;
    onDeleteTempRequestPartItem: () => void;
}

export const useRequestPart = create<RequestPartItem>((set) => ({
    requestPartItem: null,
    requestParts: [],
    tempRequestPart: null,
    onAddRequestPartItem: (newRequestPart) => set(
        (state) => ({
            requestParts: [ ...state.requestParts, newRequestPart ]
        })
    ),
    onAddTempRequestPartItem: (newTempRequestPart) => set(
        { tempRequestPart: newTempRequestPart },
    ),
    onUpdateRequestPartItem: (requestPartId, updateRequestPart) => set(
        (state) => ({
            requestParts: state.requestParts.map(
                (part) => (
                    part.requestID === requestPartId ? updateRequestPart : part
                )
            ),
        })
    ),
    onDeleteRequestPartItem: (requestPartId) => set(
        (state) => ({
            requestParts: state.requestParts.filter(
                (part) => part.requestID !== requestPartId
            )
        })
    ),
    onDeleteTempRequestPartItem: () => set({ tempRequestPart: null })
}))