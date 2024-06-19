import { create } from "zustand";
import { BrokerType } from "@/lib/types/types"

{/* Broker Item */}
interface BrokerItem {
    brokerItem: BrokerType | null;
    brokers: BrokerType[];
    tempBroker: BrokerType | null;
    onAddBrokerItem: (newBorker: BrokerType) => void;
    onAddTempBrokerItem: (newTempBroker: BrokerType) => void;
    onUpdateBrokerItem: (brokerId: string, updateBroker: BrokerType) => void;
    onDeleteBrokerItem: (brokerId: string) => void;
    onDeleteTempBrokerItem: () => void;
}

export const useBroker = create<BrokerItem>((set) => ({
    brokerItem: null,
    brokers: [],
    tempBroker: null,
    onAddBrokerItem: (newBroker) => set(
        (state) => ({
            brokers: [ ...state.brokers, newBroker ]
        })
    ),
    onAddTempBrokerItem: (newTempBroker) => set(
        { tempBroker: newTempBroker },
    ),
    onUpdateBrokerItem: (brokerId, updateBroker) => set(
        (state) => ({
            brokers: state.brokers.map(
                (broker) => (
                    broker.brokerID === brokerId ? updateBroker : broker
                )
            ),
        })
    ),
    onDeleteBrokerItem: (brokerId) => set(
        (state) => ({
            brokers: state.brokers.filter(
                (broker) => broker.brokerID !== brokerId
            )
        })
    ),
    onDeleteTempBrokerItem: () => set({ tempBroker: null })
}))