import { create } from "zustand";

interface EditTechnicianModalToggleState {
    isOpen: boolean;
}

interface EditTechnicianModalToggleActions {
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
}

interface JobCardToggleState {
    isInProgress: boolean;
}

interface JobCardToggleActions {
    onInProgress: () => void;
    onComplete: () => void;
    onToggle: () => void;
}

interface JobCardSingleToggleState {
    isSummary: boolean;
    isServices: boolean;
    isInspections: boolean;
    isPartProcurement: boolean;
    isMessages: boolean;
}

interface JobCardSingleToggleActions {
    onSummary: () => void;
    onServices: () => void;
    onInspections: () => void;
    onPartProcurement: () => void;
    onMessages: () => void;
}

{/* Edit Technician Modal Toggle */ }
export const useEditTechnicianModalToggle = create<EditTechnicianModalToggleState & EditTechnicianModalToggleActions>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export const useJobCardToggle = create<JobCardToggleState & JobCardToggleActions>((set) => ({
    isInProgress: true,
    onInProgress: () => set({ isInProgress: true }),
    onComplete: () => set({ isInProgress: false }),
    onToggle: () => set((state) => ({ isInProgress: !state.isInProgress })),
}));

export const useJobCardSingleToggle = create<JobCardSingleToggleActions & JobCardSingleToggleState>((set) => ({
    isSummary: true,
    isServices: false,
    isInspections: false,
    isPartProcurement: false,
    isMessages: false,
    onSummary: () => set((state) => ({
        ...state,
        isSummary: true,
        isInspections: false,
        isMessages: false,
        isPartProcurement: false,
        isServices: false,
    })),
    onServices: () => set((state) => ({
        ...state,
        isSummary: false,
        isInspections: false,
        isMessages: false,
        isPartProcurement: false,
        isServices: true,
    })),
    onInspections: () => set((state) => ({
        ...state,
        isSummary: false,
        isInspections: true,
        isMessages: false,
        isPartProcurement: false,
        isServices: false,
    })),
    onPartProcurement: () => set((state) => ({
        ...state,
        isSummary: false,
        isInspections: false,
        isMessages: false,
        isPartProcurement: true,
        isServices: false,
    })),
    onMessages: () => set((state) => ({
        ...state,
        isSummary: false,
        isInspections: false,
        isMessages: true,
        isPartProcurement: false,
        isServices: false,
    })),
}))