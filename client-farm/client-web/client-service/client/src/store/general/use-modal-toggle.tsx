import { create } from "zustand";


interface ModalToggleState {
    isOpen: boolean;
}

interface ModalToggleActions {
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
}

interface AddPartTabState {
    isInventory: boolean;
}

interface AddPartTabActions {
    onInventory: () => void;
    onCustom: () => void;
}

export const useAddPartModalToggle = create<ModalToggleActions & ModalToggleState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export const useAddPartTab = create<AddPartTabState & AddPartTabActions>((set) => ({
    isInventory: true,
    onInventory: () => set({ isInventory: true }),
    onCustom: () => set({ isInventory: false }),
}))