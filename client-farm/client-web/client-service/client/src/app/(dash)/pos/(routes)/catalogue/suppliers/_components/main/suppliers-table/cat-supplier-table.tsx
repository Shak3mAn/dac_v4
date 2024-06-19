import { supplier_data } from "@/lib/data/supplier-data";
import { CatSupplierColumn } from "./column/cat-supplier-column";
import { CatSuppliersClientTable } from "./client/cat-supplier-client";

export const CatSupplierTable = () => {
    const formattedSuppliers: CatSupplierColumn[] = supplier_data.map((item) => ({
        id: item.supplierID,
        contactNumber: item.contactNumber,
        contactPerson: item.contactPerson,
        email: item.email,
        productsCategory: item.productsCategory,
        supplierName: item.supplierName,
        supplierPerformanceRatingSystem: item.supplierPerformanceRatingSystem,
        supplierPriorityIndex: item.supplierPriorityIndex,
        supplierSERVQUAL: item.supplierSERVQUAL,
    }))

    return (
        <div>
            <div className="flex-1 space-y-4 p-2 pt-2">
<CatSuppliersClientTable data={formattedSuppliers} />
            </div>
        </div>
    )
}
