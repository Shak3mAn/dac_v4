import { create } from "zustand";
import { InsurerType } from "@/lib/types/types"

{/* Insurer Item */}
interface InsurerItem {
    insurerrItem: InsurerType | null;
    insurers: InsurerType[];
    tempInsurer: InsurerType | null;
    onAddInsurerItem: (newInsurer: InsurerType) => void;
    onAddTempInsurerItem: (newTempInsurer: InsurerType) => void;
    onUpdateInsurerItem: (insurerId: string, updateInsurer: InsurerType) => void;
    onDeleteInsurerItem: (insurerId: string) => void;
    onDeleteTempInsurerItem: () => void;
}

export const useInsurer = create<InsurerItem>((set) => ({
    insurerrItem: null,
    insurers: [],
    tempInsurer: null,
    onAddInsurerItem: (newInsurer) => set(
        (state) => ({
            insurers: [ ...state.insurers, newInsurer ]
        })
    ),
    onAddTempInsurerItem: (newTempInsurer) => set(
        { tempInsurer: newTempInsurer },
    ),
    onUpdateInsurerItem: (insurerId, updateInsurer) => set(
        (state) => ({
            insurers: state.insurers.map(
                (insurer) => (
                    insurer.insurerID === insurerId ? updateInsurer : insurer
                )
            ),
        })
    ),
    onDeleteInsurerItem: (insurerId) => set(
        (state) => ({
            insurers: state.insurers.filter(
                (insurer) => insurer.insurerID !== insurerId
            )
        })
    ),
    onDeleteTempInsurerItem: () => set({ tempInsurer: null })
}))