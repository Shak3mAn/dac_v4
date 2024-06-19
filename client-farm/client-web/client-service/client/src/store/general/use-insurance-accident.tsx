import { create } from "zustand";
import { InsuranceClaimType } from "@/lib/types/types"

{/* Insurance Claim Item */}
interface InsuranceClaimItem {
    insuranceClaimItem: InsuranceClaimType | null;
    insuranceClaims: InsuranceClaimType[];
    tempInsuranceClaim: InsuranceClaimType | null;
    onAddInsuranceClaimItem: (newInsuranceClaim: InsuranceClaimType) => void;
    onAddTempInsuranceClaimItem: (newTempInsuranceClaim: InsuranceClaimType) => void;
    onUpdateInsuranceClaimItem: (claimNumber: string, updateInsuranceClaim: InsuranceClaimType) => void;
    onDeleteInsuranceClaimItem: (claimNumber: string) => void;
    onDeleteTempInsuranceClaimItem: () => void;
}

export const useInsuranceClaim = create<InsuranceClaimItem>((set) => ({
    insuranceClaimItem: null,
    insuranceClaims: [],
    tempInsuranceClaim: null,
    onAddInsuranceClaimItem: (newInsuranceClaim) => set(
        (state) => ({
            insuranceClaims: [ ...state.insuranceClaims, newInsuranceClaim ]
        })
    ),
    onAddTempInsuranceClaimItem: (newTempInsuranceClaim) => set(
        { tempInsuranceClaim: newTempInsuranceClaim },
    ),
    onUpdateInsuranceClaimItem: (claimNumber, updateInsuranceClaim) => set(
        (state) => ({
            insuranceClaims: state.insuranceClaims.map(
                (insuranceClaim) => (
                    insuranceClaim.claimNumber === claimNumber ? updateInsuranceClaim : insuranceClaim
                )
            ),
        })
    ),
    onDeleteInsuranceClaimItem: (claimNumber) => set(
        (state) => ({
            insuranceClaims: state.insuranceClaims.filter(
                (insuranceClaim) => insuranceClaim.claimNumber !== claimNumber
            )
        })
    ),
    onDeleteTempInsuranceClaimItem: () => set({ tempInsuranceClaim: null })
}))