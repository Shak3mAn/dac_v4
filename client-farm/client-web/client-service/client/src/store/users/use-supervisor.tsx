import { create } from "zustand";
import { SupervisorType } from "@/lib/types/types"

{/* Supervisor Item */}
interface SupervisorItem {
    supervisorItem: SupervisorType | null;
    supervisors: SupervisorType[];
    tempSupervisor: SupervisorType | null;
    onAddSupervisorItem: (newSupervisor: SupervisorType) => void;
    onAddTempSupervisorItem: (newTempSupervisor: SupervisorType) => void;
    onUpdateSupervisorItem: (supervisorId: string, updateSupervisor: SupervisorType) => void;
    onDeleteSupervisorItem: (supervisorId: string) => void;
    onDeleteTempSupervisorItem: () => void;
}

export const useSupervisor = create<SupervisorItem>((set) => ({
    supervisorItem: null,
    supervisors: [],
    tempSupervisor: null,
    onAddSupervisorItem: (newSupervisor) => set(
        (state) => ({
            supervisors: [ ...state.supervisors, newSupervisor ]
        })
    ),
    onAddTempSupervisorItem: (newTempSupervisor) => set(
        { tempSupervisor: newTempSupervisor },
    ),
    onUpdateSupervisorItem: (supervisorId, updateSupervisor) => set(
        (state) => ({
            supervisors: state.supervisors.map(
                (supervisor) => (
                    supervisor.supervisorId === supervisorId ? updateSupervisor : supervisor
                )
            ),
        })
    ),
    onDeleteSupervisorItem: (supervisorId) => set(
        (state) => ({
            supervisors: state.supervisors.filter(
                (supervisor) => supervisor.supervisorId !== supervisorId
            )
        })
    ),
    onDeleteTempSupervisorItem: () => set({ tempSupervisor: null })
}))