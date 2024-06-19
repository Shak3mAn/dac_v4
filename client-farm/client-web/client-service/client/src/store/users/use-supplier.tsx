import { create } from "zustand";
import { SupplierType } from "@/lib/types/types"

{/* Supplier Item */}
interface SupplierItem {
    supplierItem: SupplierType | null;
    suppliers: SupplierType[];
    tempSupplier: SupplierType | null;
    onAddSupplierItem: (newSupplier: SupplierType) => void;
    onAddTempSupplierItem: (newTempSupplier: SupplierType) => void;
    onUpdateSupplierItem: (supplierId: string, updateSupplier: SupplierType) => void;
    onDeleteSupplierItem: (supplierId: string) => void;
    onDeleteTempSupplierItem: () => void;
}

export const useSupplier = create<SupplierItem>((set) => ({
    supplierItem: null,
    suppliers: [],
    tempSupplier: null,
    onAddSupplierItem: (newSupplier) => set(
        (state) => ({
            suppliers: [ ...state.suppliers, newSupplier ]
        })
    ),
    onAddTempSupplierItem: (newTempSupplier) => set(
        { tempSupplier: newTempSupplier },
    ),
    onUpdateSupplierItem: (supplierId, updateSupplier) => set(
        (state) => ({
            suppliers: state.suppliers.map(
                (supplier) => (
                    supplier.supplierID === supplierId ? updateSupplier : supplier
                )
            ),
        })
    ),
    onDeleteSupplierItem: (supplierId) => set(
        (state) => ({
            suppliers: state.suppliers.filter(
                (supplier) => supplier.supplierID !== supplierId
            )
        })
    ),
    onDeleteTempSupplierItem: () => set({ tempSupplier: null })
}))