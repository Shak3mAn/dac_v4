import { create } from "zustand";
import { SubcontractorDataType } from "@/lib/types/types"

{/* Subcontractor Item */}
interface SubcontractorItem {
    subcontractorItem: SubcontractorDataType | null;
    subcontractors: SubcontractorDataType[];
    tempSubcontractor: SubcontractorDataType | null;
    onAddSubcontractorItem: (newSubcontractor: SubcontractorDataType) => void;
    onAddTempSubcontractorItem: (newTempSubcontractor: SubcontractorDataType) => void;
    onUpdateSubcontractorItem: (subcontractorId: string, updateSubcontractor: SubcontractorDataType) => void;
    onDeleteSubcontractorItem: (subcontractorId: string) => void;
    onDeleteTempSubcontractorItem: () => void;
}

export const useSubcontractor = create<SubcontractorItem>((set) => ({
    subcontractorItem: null,
    subcontractors: [],
    tempSubcontractor: null,
    onAddSubcontractorItem: (newSubcontractor) => set(
        (state) => ({
            subcontractors: [ ...state.subcontractors, newSubcontractor ]
        })
    ),
    onAddTempSubcontractorItem: (newTempSubcontractor) => set(
        { tempSubcontractor: newTempSubcontractor },
    ),
    onUpdateSubcontractorItem: (subcontractorId, updateSubcontractor) => set(
        (state) => ({
            subcontractors: state.subcontractors.map(
                (subcontractor) => (
                    subcontractor.subcontractorID === subcontractorId ? updateSubcontractor : subcontractor
                )
            ),
        })
    ),
    onDeleteSubcontractorItem: (subcontractorId) => set(
        (state) => ({
            subcontractors: state.subcontractors.filter(
                (subcontractor) => subcontractor.subcontractorID !== subcontractorId
            )
        })
    ),
    onDeleteTempSubcontractorItem: () => set({ tempSubcontractor: null })
}))