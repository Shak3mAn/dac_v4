import { create } from "zustand";

interface SidebarToggleState {
  isOpen: boolean;
}

interface SidebarToggleActions {
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export const useSidebarToggle = create<
  SidebarToggleState & SidebarToggleActions
>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const usePosSidebarToggle = create<
  SidebarToggleState & SidebarToggleActions
>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const usePosSecondarySidebarToggle = create<
  SidebarToggleState & SidebarToggleActions
>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const usePosJCCardViewSidebarToggle = create<
  SidebarToggleState & SidebarToggleActions
>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
