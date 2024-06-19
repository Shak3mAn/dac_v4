import { create } from "zustand";
import { ManagerType } from "@/lib/types/types"

{/* Insurer Item */}
interface ManagerItem {
    managerItem: ManagerType | null;
    managers: ManagerType[];
    tempManager: ManagerType | null;
    onAddManagerItem: (newManager: ManagerType) => void;
    onAddTempManagerItem: (newTempManager: ManagerType) => void;
    onUpdateManagerItem: (managerId: string, updateManager: ManagerType) => void;
    onDeleteManagerItem: (managerId: string) => void;
    onDeleteTempManagerItem: () => void;
}

export const useManager = create<ManagerItem>((set) => ({
    managerItem: null,
    managers: [],
    tempManager: null,
    onAddManagerItem: (newManager) => set(
        (state) => ({
            managers: [ ...state.managers, newManager ]
        })
    ),
    onAddTempManagerItem: (newTempManager) => set(
        { tempManager: newTempManager },
    ),
    onUpdateManagerItem: (managerId, updateManager) => set(
        (state) => ({
            managers: state.managers.map(
                (manager) => (
                    manager.managerId === managerId ? updateManager : manager
                )
            ),
        })
    ),
    onDeleteManagerItem: (managerId) => set(
        (state) => ({
            managers: state.managers.filter(
                (manager) => manager.managerId !== managerId
            )
        })
    ),
    onDeleteTempManagerItem: () => set({ tempManager: null })
}))