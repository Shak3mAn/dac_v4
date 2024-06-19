import { create } from "zustand";

interface WorkflowToggleState {
  isBoard: boolean;
  isTable: boolean;
  isCard: boolean;
}

interface WorkflowToggleActions {
  onBoard: () => void;
  onTable: () => void;
  onCard: () => void;
  onToggle: () => void;
}

export const useWorkflowToggle = create<WorkflowToggleState & WorkflowToggleActions>((set) => ({
  isBoard: true,
  isTable: false,
  isCard: false,
  onBoard: () => set((state) => ({ ...state, isBoard: true, isTable: false, isCard: false })),
  onTable: () => set((state) => ({ ...state, isBoard: false, isTable: true, isCard: false })),
  onCard: () => set((state) => ({ ...state, isBoard: false, isTable: false, isCard: true })),
  onToggle: () => set((state) => ({ ...state, isBoard: !state.isBoard, isTable: !state.isTable, isCard: !state.isCard })),
}));
