import { create } from "zustand";
import { GeneralWorkerType } from "@/lib/types/types"

{/* General Worker Item */}
interface GeneralWorkerItem {
    generalWorkerItem: GeneralWorkerType | null;
    generalWorkers: GeneralWorkerType[];
    tempGeneralWorker: GeneralWorkerType | null;
    onAddGeneralWorkerItem: (newGeneralWorker: GeneralWorkerType) => void;
    onAddTempGeneralWorkerItem: (newTempGeneralWorker: GeneralWorkerType) => void;
    onUpdateGeneralWorkerItem: (employeeId: string, updateGeneralWorker: GeneralWorkerType) => void;
    onDeleteGeneraWorkerItem: (employeeId: string) => void;
    onDeleteTempGeneralWorkerItem: () => void;
}

export const useGeneralWorker = create<GeneralWorkerItem>((set) => ({
    generalWorkerItem: null,
    generalWorkers: [],
    tempGeneralWorker: null,
    onAddGeneralWorkerItem: (newGeneralWorker) => set(
        (state) => ({
            generalWorkers: [ ...state.generalWorkers, newGeneralWorker ]
        })
    ),
    onAddTempGeneralWorkerItem: (newTempGeneralWorker) => set(
        { tempGeneralWorker: newTempGeneralWorker },
    ),
    onUpdateGeneralWorkerItem: (employeeId, updateGeneralWorker) => set(
        (state) => ({
            generalWorkers: state.generalWorkers.map(
                (generalWorker) => (
                    generalWorker.employeeId === employeeId ? updateGeneralWorker : generalWorker
                )
            ),
        })
    ),
    onDeleteGeneraWorkerItem: (employeeId) => set(
        (state) => ({
            generalWorkers: state.generalWorkers.filter(
                (generalWorker) => generalWorker.employeeId !== employeeId
            )
        })
    ),
    onDeleteTempGeneralWorkerItem: () => set({ tempGeneralWorker: null })
}))