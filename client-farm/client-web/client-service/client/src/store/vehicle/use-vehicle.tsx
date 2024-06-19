import { create } from "zustand";
import { VehicleDataType } from "@/lib/types/types";

// Vehicle Item
interface VehicleItem {
    vehicleItem: VehicleDataType | null;
    vehicles: VehicleDataType[];
    tempVehicle: VehicleDataType | null;
    onAddVehicleItem: (newVehicle: VehicleDataType) => void;
    onAddTempVehicleItem: (newTempVehicle: VehicleDataType) => void;
    onUpdateVehicleItem: (vehicleId: string, updateVehicle: VehicleDataType) => void;
    onDeleteVehicleItem: (vehicleId: string) => void;
    onDeleteTempVehicleItem: () => void;
}

export const useVehicle = create<VehicleItem>((set) => ({
    vehicleItem: null,
    vehicles: [],
    tempVehicle: null,
    onAddVehicleItem: (newVehicle) => set(
        (state) => ({
            vehicles: [...state.vehicles, newVehicle]
        })
    ),
    onAddTempVehicleItem: (newTempVehicle) => set(
        { tempVehicle: newTempVehicle }
    ),
    onUpdateVehicleItem: (vehicleId, updateVehicle) => set(
        (state) => ({
            vehicles: state.vehicles.map(
                (vehicle) => (
                    vehicle.vehicleId === vehicleId ? updateVehicle : vehicle
                )
            ),
        })
    ),
    onDeleteVehicleItem: (vehicleId) => set(
        (state) => ({
            vehicles: state.vehicles.filter(
                (vehicle) => vehicle.vehicleId !== vehicleId
            )
        })
    ),
    onDeleteTempVehicleItem: () => set({ tempVehicle: null })
}));
