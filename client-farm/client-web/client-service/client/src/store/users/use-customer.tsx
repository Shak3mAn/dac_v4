import { create } from "zustand";
import { CustomerType } from "@/lib/types/types"

{/* Customer Item */}
interface CustomerItem {
    customerItem: CustomerType | null;
    customers: CustomerType[];
    tempCustomer: CustomerType | null;
    onAddCustomerItem: (newCustomer: CustomerType) => void;
    onAddTempCustomerItem: (newTempCustomer: CustomerType) => void;
    onUpdateCustomerItem: (customerId: string, updateCutomer: CustomerType) => void;
    onDeleteCustomerItem: (customerId: string) => void;
    onDeleteTempCustomerItem: () => void;
}

export const useCustomer = create<CustomerItem>((set) => ({
    customerItem: null,
    customers: [],
    tempCustomer: null,
    onAddCustomerItem: (newCustomer) => set(
        (state) => ({
            customers: [ ...state.customers, newCustomer ]
        })
    ),
    onAddTempCustomerItem: (newTempCustomer) => set(
        { tempCustomer: newTempCustomer },
    ),
    onUpdateCustomerItem: (customerId, updateCutomer) => set(
        (state) => ({
            customers: state.customers.map(
                (customer) => (
                    customer.customerId === customerId ? updateCutomer : customer
                )
            ),
        })
    ),
    onDeleteCustomerItem: (customerId) => set(
        (state) => ({
            customers: state.customers.filter(
                (customer) => customer.customerId !== customerId
            )
        })
    ),
    onDeleteTempCustomerItem: () => set({ tempCustomer: null })
}))