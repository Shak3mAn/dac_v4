import { create } from "zustand";
import { FleetType } from "@/lib/types/types"

{/* Fleet Item */}
interface FleetItem {
    fleetItem: FleetType | null;
    fleets: FleetType[];
    tempFleet: FleetType | null;
    onAddFleetItem: (newFleet: FleetType) => void;
    onAddTempFleetItem: (newTempFleet: FleetType) => void;
    onUpdateFleetItem: (companyId: string, updateFleet: FleetType) => void;
    onDeleteFleetItem: (companyId: string) => void;
    onDeleteTempFleetItem: () => void;
}

export const useFleet = create<FleetItem>((set) => ({
    fleetItem: null,
    fleets: [],
    tempFleet: null,
    onAddFleetItem: (newFleet) => set(
        (state) => ({
            fleets: [ ...state.fleets, newFleet ]
        })
    ),
    onAddTempFleetItem: (newTempFleet) => set(
        { tempFleet: newTempFleet },
    ),
    onUpdateFleetItem: (companyId, updateFleet) => set(
        (state) => ({
            fleets: state.fleets.map(
                (fleet) => (
                    fleet.companyID === companyId ? updateFleet : fleet
                )
            ),
        })
    ),
    onDeleteFleetItem: (companyId) => set(
        (state) => ({
            fleets: state.fleets.filter(
                (fleet) => fleet.companyID !== companyId
            )
        })
    ),
    onDeleteTempFleetItem: () => set({ tempFleet: null })
}))