import { create } from "zustand";
import { InventoryItem } from "@/lib/types/types";

// Inventory Item
interface JobCardInventoryDetail {
    inventoryItem: InventoryItem | null;
    inventoryList: InventoryItem[];
    tempInventory: InventoryItem | null;
    onAddInventoryItem: (newInventory: InventoryItem) => void;
    onAddInventoryList: (newInventory: InventoryItem[]) => void;
    onAddTempInventoryItem: (newTempInventory: InventoryItem) => void;
    onUpdateInventoryItem: (inventoryId: string, updateInventory: InventoryItem) => void;
    onDeleteInventoryItem: (inventoryId: string) => void;
    onDeleteTempInventoryItem: () => void;
    onUpdateInventoryList: (updatedInventoryList: InventoryItem[]) => void;
}

export const useInventoryItem = create<JobCardInventoryDetail>((set) => ({
    inventoryItem: null,
    inventoryList: [],
    tempInventory: null,
    onAddInventoryItem: (newInventoryItem) => set(
        (state) => ({
            inventoryList: [ ...state.inventoryList, newInventoryItem ]
        })
    ),
    onAddInventoryList: (newInventoryList) => set(
        (state) => ({
            inventoryList: [ ...state.inventoryList, ...newInventoryList ]
        })
    ),
    onAddTempInventoryItem: (newTempInventoryItem) => set({
        tempInventory: newTempInventoryItem
    }),
    onUpdateInventoryItem: (inventoryId, updatedInventoryItem) => set(
        (state) => ({
            inventoryList: state.inventoryList.map(
                (inventory) => (
                    inventory.inventoryID === inventoryId ? updatedInventoryItem : inventory
                )
            ),
        })
    ),
    onDeleteInventoryItem: (inventoryId) => set(
        (state) => ({
            inventoryList: state.inventoryList.filter(
                (inventory) => inventory.inventoryID !== inventoryId
            )
        })
    ),
    onDeleteTempInventoryItem: () => set({
        tempInventory: null
    }),
    onUpdateInventoryList: (updatedInventoryList) => set(
        (state) => ({
            inventoryList: state.inventoryList.map(
                (inventory) => updatedInventoryList.find(
                    (updatedItem) => updatedItem.inventoryID === inventory.inventoryID
                ) || inventory
            ).concat(
                updatedInventoryList.filter(
                    (updatedItem) => !state.inventoryList.some(
                        (inventory) => inventory.inventoryID === updatedItem.inventoryID
                    )
                )
            )
        })
    )
}));
