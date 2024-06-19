import { create } from "zustand";
import { DndType } from "@/lib/types/types";
import { UniqueIdentifier } from "@dnd-kit/core";

interface WorkflowDndContainerState {
  isContainer: DndType[];
}

interface WorkflowDndContainerActions {
  addContainer: (info: DndType) => void;
  removeContainer: (id: UniqueIdentifier) => void;
  removeAllContainers: () => void;
  addItemToContainer: (
    containerId: UniqueIdentifier | undefined,
    newItem: { id: UniqueIdentifier; title: string }
  ) => void;
  removeItemFromContainer: (containerId: UniqueIdentifier, itemId: UniqueIdentifier) => void;
  removeAllItemsFromContainer: (containerId: UniqueIdentifier) => void;
  setContainer: (containerId: string, newItems: { id: string; title: string }[]) => void;
  setContainers: (containers: DndType[]) => void;
}

interface WorkflowDndContainerStore
  extends WorkflowDndContainerState,
    WorkflowDndContainerActions {}

export const useWorkflowDndContainer = create<WorkflowDndContainerStore>(
  (set) => ({
    isContainer: [],
    addContainer: (info) =>
      set((state) => ({ ...state, isContainer: [...state.isContainer, info] })),
    removeContainer: (id) =>
      set((state) => ({
        ...state,
        isContainer: state.isContainer.filter(
          (container) => container.id !== id
        ),
      })),
    removeAllContainers: () => set({ isContainer: [] }),
    addItemToContainer: (containerId, newItem) =>
      set((state) => ({
        ...state,
        isContainer: state.isContainer.map((container) =>
          container.id === containerId
            ? { ...container, items: [...container.items, newItem] }
            : container
        ),
      })),
    removeItemFromContainer: (containerId, itemId) =>
      set((state) => ({
        ...state,
        isContainer: state.isContainer.map((container) =>
          container.id === containerId
            ? {
                ...container,
                items: container.items.filter((item) => item.id !== itemId),
              }
            : container
        ),
      })),
    removeAllItemsFromContainer: (containerId) =>
      set((state) => ({
        ...state,
        isContainer: state.isContainer.map((container) =>
          container.id === containerId
            ? { ...container, items: [] } // Reset items array to empty array
            : container
        ),
      })),
      setContainer: (containerId, newItems) => set((state) => ({
        ...state,
        isContainer: state.isContainer.map(container =>
          container.id === containerId
            ? { ...container, items: newItems }
            : container
        )
      })),
      setContainers: (containers) => set({ isContainer: containers })
  })
);
