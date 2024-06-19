import { create } from "zustand";
import { PaymentTransactionType } from "@/lib/types/types"

{/* Payment Transaction Item */}
interface PaymentTransactionItem {
    paymentTransactionItem: PaymentTransactionType | null;
    paymentTransacitons: PaymentTransactionType[];
    tempPaymentTransaciton: PaymentTransactionType | null;
    onAddPaymentTransactionItem: (newPaymentTransaction: PaymentTransactionType) => void;
    onAddTempPaymentTransactionItem: (newTempPaymentTransaction: PaymentTransactionType) => void;
    onUpdatePaymentTransactionItem: (transactionId: string, updatePaymentTransaction: PaymentTransactionType) => void;
    onDeletePaymentTransactionItem: (transactionId: string) => void;
    onDeleteTempPaymentTransactionItem: () => void;
}

export const usePaymentTransaction = create<PaymentTransactionItem>((set) => ({
    paymentTransactionItem: null,
    paymentTransacitons: [],
    tempPaymentTransaciton: null,
    onAddPaymentTransactionItem: (newPaymentTransaction) => set(
        (state) => ({
            paymentTransacitons: [ ...state.paymentTransacitons, newPaymentTransaction ]
        })
    ),
    onAddTempPaymentTransactionItem: (newTempPaymentTransaction) => set(
        { tempPaymentTransaciton: newTempPaymentTransaction },
    ),
    onUpdatePaymentTransactionItem: (transactionId, updatePaymentTransaction) => set(
        (state) => ({
            paymentTransacitons: state.paymentTransacitons.map(
                (transaciton) => (
                    transaciton.transacitonID === transactionId ? updatePaymentTransaction : transaciton
                )
            ),
        })
    ),
    onDeletePaymentTransactionItem: (transactionId) => set(
        (state) => ({
            paymentTransacitons: state.paymentTransacitons.filter(
                (transaciton) => transaciton.transacitonID !== transactionId
            )
        })
    ),
    onDeleteTempPaymentTransactionItem: () => set({ tempPaymentTransaciton: null })
}))