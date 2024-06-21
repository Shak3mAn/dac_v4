import { create } from "zustand";
import { InventoryItem, CustomSrvPart } from "@/lib/types/types";

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

interface CustomInventoryPartDetail {
    customInventoryItem: CustomSrvPart | null;
    customInventoryList: CustomSrvPart[];
    tempCustomInventory: CustomSrvPart | null;
    onAddCustomInventoryItem: (newCustomInventory: CustomSrvPart) => void;
    onAddCustomInventoryList: (newCustomInventoryList: CustomSrvPart[]) => void;
    onAddTempCustomInventoryItem: (newCustomTempInventory: CustomSrvPart) => void;
    onUpdateCustomInventoryItem: (customInventoryId: string, updateCustomInventory: CustomSrvPart) => void;
    onDeleteCustomInventoryItem: (customInventoryId: string) => void;
    onDeleteTempCustomInventoryItem: () => void;
    onUpdateCustomInventoryList: (updatedCustomInventoryList: CustomSrvPart[]) => void;
}

export const useInventoryItem = create<JobCardInventoryDetail>((set) => ({
    inventoryItem: null,
    inventoryList: [],
    tempInventory: null,
    onAddInventoryItem: (newInventoryItem) => set(
        (state) => ({
            inventoryList: [...state.inventoryList, newInventoryItem]
        })
    ),
    onAddInventoryList: (newInventoryList) => set(
        (state) => ({
            inventoryList: [...state.inventoryList, ...newInventoryList]
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

export const useCustomInventoryItem = create<CustomInventoryPartDetail>((set) => ({
    customInventoryItem: null,
    customInventoryList: [],
    tempCustomInventory: null,
    onAddCustomInventoryItem: (newCustomInventoryItem) => set(
        (state) => ({
            customInventoryList: [
                ...state.customInventoryList, newCustomInventoryItem
            ]
        })
    ),
    onAddCustomInventoryList: (newCustomInventoryList) => set(
        (state) => ({
            customInventoryList: [
                ...state.customInventoryList, ...newCustomInventoryList
            ]
        })
    ),
    onAddTempCustomInventoryItem: (newTempCustomInventory) => set({
        tempCustomInventory: newTempCustomInventory
    }),
    onUpdateCustomInventoryItem: (customInventoryId, updatedCustomInventory) => set(
        (state => ({
            customInventoryList: state.customInventoryList.map(
                (inventory) => (
                    inventory.customInventoryID === customInventoryId ? updatedCustomInventory : inventory
                )
            )
        }))
    ),
    onUpdateCustomInventoryList: (updatedCustomInventoryList) => set(
        (state) => ({
            customInventoryList: state.customInventoryList.map(
                (inventory) => updatedCustomInventoryList.find(
                    (updatedItem) => updatedItem.customInventoryID === inventory.customInventoryID
                ) || inventory
            ).concat(
                updatedCustomInventoryList.filter(
                    (updatedItem) => !state.customInventoryList.some(
                        (inventory) => inventory.customInventoryID === updatedItem.customInventoryID
                    )
                )
            )
        })
    ),
    onDeleteCustomInventoryItem: (customInventoryId) => set(
        (state => ({
            customInventoryList: state.customInventoryList.filter(
                (inventory) => inventory.customInventoryID !== customInventoryId
            )
        }))
    ),
    onDeleteTempCustomInventoryItem: () => set({
        tempCustomInventory: null
    })
}))