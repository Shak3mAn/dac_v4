import { create } from "zustand";
import { TechnicianDataType } from "@/lib/types/types"

{/* Technician Item */}
interface TechnicianItem {
    technicianItem: TechnicianDataType | null;
    technicians: TechnicianDataType[];
    tempTechnician: TechnicianDataType | null;
    onAddTechnicianItem: (newTechnician: TechnicianDataType) => void;
    onAddTempTechnicianItem: (newTempTechnician: TechnicianDataType) => void;
    onUpdateTechnicianItem: (technicianId: string, updateTechnician: TechnicianDataType) => void;
    onDeleteTechnicianItem: (technicianId: string) => void;
    onDeleteTempTechnicianItem: () => void;
}

export const useTechnician = create<TechnicianItem>((set) => ({
    technicianItem: null,
    technicians: [],
    tempTechnician: null,
    onAddTechnicianItem: (newTechnician) => set(
        (state) => ({
            technicians: [ ...state.technicians, newTechnician ]
        })
    ),
    onAddTempTechnicianItem: (newTempTechnician) => set(
        { tempTechnician: newTempTechnician },
    ),
    onUpdateTechnicianItem: (technicianId, updateTechnician) => set(
        (state) => ({
            technicians: state.technicians.map(
                (technician) => (
                    technician.technicianId === technicianId ? updateTechnician : technician
                )
            ),
        })
    ),
    onDeleteTechnicianItem: (technicianId) => set(
        (state) => ({
            technicians: state.technicians.filter(
                (technician) => technician.technicianId !== technicianId
            )
        })
    ),
    onDeleteTempTechnicianItem: () => set({ tempTechnician: null })
}))