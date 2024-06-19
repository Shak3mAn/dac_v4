import { create } from "zustand";
import { CashierType } from "@/lib/types/types"

{/* Cashier Item */}
interface CashierItem {
    cashierItem: CashierType | null;
    cashiers: CashierType[];
    tempCashier: CashierType | null;
    onAddCashierItem: (newCashier: CashierType) => void;
    onAddTempCashierItem: (newTempCashier: CashierType) => void;
    onUpdateCashierItem: (cashierId: string, updateCashier: CashierType) => void;
    onDeleteCashierItem: (cashierId: string) => void;
    onDeleteTempCashierItem: () => void;
}

export const useCashier = create<CashierItem>((set) => ({
    cashierItem: null,
    cashiers: [],
    tempCashier: null,
    onAddCashierItem: (newCashier) => set(
        (state) => ({
            cashiers: [ ...state.cashiers, newCashier ]
        })
    ),
    onAddTempCashierItem: (newTempCashier) => set(
        { tempCashier: newTempCashier },
    ),
    onUpdateCashierItem: (cashierId, updateCashier) => set(
        (state) => ({
            cashiers: state.cashiers.map(
                (cashier) => (
                    cashier.cashierId === cashierId ? updateCashier : cashier
                )
            ),
        })
    ),
    onDeleteCashierItem: (cashierId) => set(
        (state) => ({
            cashiers: state.cashiers.filter(
                (cashier) => cashier.cashierID !== cashierId
            )
        })
    ),
    onDeleteTempCashierItem: () => set({ tempCashier: null })
}))