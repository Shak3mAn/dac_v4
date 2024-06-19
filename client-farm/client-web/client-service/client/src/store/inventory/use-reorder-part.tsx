import { create } from "zustand";
import { ReorderInvType } from "@/lib/types/types"

{/* Reorder Inventory Item */}
interface ReorderItem {
    reorderItem: ReorderInvType | null;
    reorders: ReorderInvType[];
    tempReorder: ReorderInvType | null;
    onAddReorderItem: (newReorder: ReorderInvType) => void;
    onAddTempReorderItem: (newTempReorder: ReorderInvType) => void;
    onUpdateReorderItem: (reorderId: string, updateReorder: ReorderInvType) => void;
    onDeleteReorderItem: (reorderId: string) => void;
    onDeleteTempReorderItem: () => void;
}

export const useReorder = create<ReorderItem>((set) => ({
    reorderItem: null,
    reorders: [],
    tempReorder: null,
    onAddReorderItem: (newReorder) => set(
        (state) => ({
            reorders: [ ...state.reorders, newReorder ]
        })
    ),
    onAddTempReorderItem: (newTempReorder) => set(
        { tempReorder: newTempReorder },
    ),
    onUpdateReorderItem: (reorderId, updateReorder) => set(
        (state) => ({
            reorders: state.reorders.map(
                (reorder) => (
                    reorder.orderID === reorderId ? updateReorder : reorder
                )
            ),
        })
    ),
    onDeleteReorderItem: (reorderId) => set(
        (state) => ({
            reorders: state.reorders.filter(
                (reorder) => reorder.orderID !== reorderId
            )
        })
    ),
    onDeleteTempReorderItem: () => set({ tempReorder: null })
}))