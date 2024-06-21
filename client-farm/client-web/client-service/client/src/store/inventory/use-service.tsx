import { create } from "zustand";
import {
    ServiceOption,
    ServiceAppointmentType,
    GeneralServiceCategoryType,
    GeneralServiceItem,
    CustomSrvPart,
} from "@/lib/types/types"; // Ensure ServiceOption type is imported

interface ServiceDetail {
    serviceItem: ServiceOption | null;
    serviceList: ServiceOption[];
    tempService: ServiceOption | null;
    onAddServiceItem: (newService: ServiceOption) => void;
    onAddServiceList: (newServices: ServiceOption[]) => void;
    onAddTempServiceItem: (newTempService: ServiceOption) => void;
    onUpdateServiceItem: (serviceId: string, updatedService: ServiceOption) => void;
    onDeleteServiceItem: (serviceId: string) => void;
    onDeleteTempServiceItem: () => void;
}

{/* Service Appointment */ }
interface ServiceAppointmentItem {
    serviceAppointmentItem: ServiceAppointmentType | null;
    serviceAppointments: ServiceAppointmentType[];
    tempServiceAppointment: ServiceAppointmentType | null;
    onAddServiceAppointmentItem: (newServiceAppointment: ServiceAppointmentType) => void;
    onAddServiceAppointmentList: (newServiceAppointmentList: ServiceAppointmentType[]) => void;
    onUpdateServiceAppointmentItem: (serviceAppointmentId: string, updateServiceAppointment: ServiceAppointmentType) => void;
    onDeleteServiceAppointmentItem: (serviceAppointmentId: string) => void;
    onDeleteTempServiceAppointmentItem: () => void;
}

{/* General Service Data */ }
// NOTE: generalSrvCat: generalServiceCategory;
// NOTE: generalSrvItem: generalServiceItem;
interface GeneralServiceCategoryItem {
    generalSrvCatItem: GeneralServiceCategoryType | null;
    genralSrvItem: GeneralServiceItem | null;
    generalSrvItemList: GeneralServiceItem[];
    generalSrvCats: GeneralServiceCategoryType[];
    tempGeneralSrvCat: GeneralServiceCategoryType | null;
    onAddGeneralSrvCatItem: (newGeneralSrvCat: GeneralServiceCategoryType) => void;
    onAddGeneralSrvCatList: (newGeneralSrvCatList: GeneralServiceCategoryType[]) => void;
    onAddGeneralSrvItem: (newGeneralSrvItem: GeneralServiceItem) => void;
    onAddGeneralSrvItemList: (newGeneralSrvItemList: GeneralServiceItem[]) => void;
    onAddTempGeneralSrvCat: (newTempGeneralSrvCat: GeneralServiceCategoryType) => void;
    onUpdateGeneralSrvCatItem: (generalSrvCatId: string, updateGeneralSrvCat: GeneralServiceCategoryType) => void;
    onUpdateGeneralSrvItem: (generalSrvItemId: string, updateGeneralSrvItem: GeneralServiceItem) => void;
    onDeleteGeneralSrvCatItem: (generalSrvCatId: string) => void;
    onDeleteGeneralSrvItem: (generalSrvItemId: string) => void;
    onDeleteTempGeneralSrvCatItem: () => void;
}

{/* Service */ }
export const useServiceOption = create<ServiceDetail>((set) => ({
    serviceItem: null,
    serviceList: [],
    tempService: null,
    onAddServiceItem: (newService) => set(
        (state) => ({
            serviceList: [...state.serviceList, newService]
        })
    ),
    onAddServiceList: (newServiceList) => set(
        (state) => ({
            serviceList: [...state.serviceList, ...newServiceList]
        })
    ),
    onAddTempServiceItem: (newTempService) => set({
        tempService: newTempService
    }),
    onUpdateServiceItem: (serviceId, updatedService) => set(
        (state) => ({
            serviceList: state.serviceList.map(
                (service) => (
                    service.id === serviceId ? updatedService : service
                )
            ),
        })
    ),
    onDeleteServiceItem: (serviceId) => set(
        (state) => ({
            serviceList: state.serviceList.filter(
                (service) => service.id !== serviceId
            )
        })
    ),
    onDeleteTempServiceItem: () => set({
        tempService: null
    }),
}));


{/* General Service Category */ }
export const useGeneralSrvCat = create<GeneralServiceCategoryItem>((set) => ({
    generalSrvCatItem: null,
    genralSrvItem: null,
    generalSrvItemList: [],
    generalSrvCats: [],
    tempGeneralSrvCat: null,

    onAddGeneralSrvCatItem: (newGeneralSrvCat) => set(
        (state) => ({
            generalSrvCats: [...state.generalSrvCats, newGeneralSrvCat]
        })
    ),
    onAddGeneralSrvCatList: (newGeneralSrvCatList) => set(
        (state) => ({
            generalSrvCats: [...state.generalSrvCats, ...newGeneralSrvCatList]
        })
    ),
    onAddGeneralSrvItem: (newGeneralSrvItem) => set(
        (state) => ({
            generalSrvItemList: [...state.generalSrvItemList, newGeneralSrvItem]
        })
    ),
    onAddGeneralSrvItemList: (newGeneralSrvItemList) => set((state) => ({
        generalSrvItemList: [...state.generalSrvItemList, ...newGeneralSrvItemList]
    })),
    onAddTempGeneralSrvCat: (newTempGeneralSrvCat) => set({
        tempGeneralSrvCat: newTempGeneralSrvCat
    }),
    onUpdateGeneralSrvCatItem: (generalSrvCatId, updateGeneralSrvCat) => set(
        (state) => ({
            generalSrvCats: state.generalSrvCats.map(cat => cat.catId === generalSrvCatId ? updateGeneralSrvCat : cat)
        })
    ),
    onUpdateGeneralSrvItem: (generalSrvItemId, updateGeneralSrvItem) => set(
        (state) => ({
            generalSrvItemList: state.generalSrvItemList.map(item => item.id === generalSrvItemId ? updateGeneralSrvItem : item)
        })
    ),
    onDeleteGeneralSrvCatItem: (generalSrvCatId) => set(
        (state) => ({
            generalSrvCats: state.generalSrvCats.filter(cat => cat.catId !== generalSrvCatId)
        })
    ),
    onDeleteGeneralSrvItem: (generalSrvItemId) => set(
        (state) => ({
            generalSrvItemList: state.generalSrvItemList.filter(item => item.id !== generalSrvItemId)
        })
    ),
    onDeleteTempGeneralSrvCatItem: () => set({
        tempGeneralSrvCat: null
    }),
}));



{/* Service Appointments */ }
export const useServiceAppointment = create<ServiceAppointmentItem>((set) => ({
    serviceAppointmentItem: null,
    serviceAppointments: [],
    tempServiceAppointment: null,
    onAddServiceAppointmentItem: (newServiceAppointment) => set(
        (state) => ({
            serviceAppointments: [...state.serviceAppointments, newServiceAppointment]
        })
    ),
    onAddServiceAppointmentList: (newServiceAppointmentList) => set(
        (state) => ({
            serviceAppointments: [...state.serviceAppointments, ...newServiceAppointmentList]
        })
    ),
    onUpdateServiceAppointmentItem: (serviceAppointmentId, updateServiceAppointment) => set(
        (state) => ({
            serviceAppointments: state.serviceAppointments.map(
                (serviceAppointment) => (
                    serviceAppointment.serviceAppointmentCard.serviceAppointmentID === serviceAppointmentId ? updateServiceAppointment : serviceAppointment
                )
            ),
        })
    ),
    onDeleteServiceAppointmentItem: (serviceAppointmentId) => set(
        (state) => ({
            serviceAppointments: state.serviceAppointments.filter(
                (serviceAppointment) => serviceAppointment.serviceAppointmentCard.serviceAppointmentID !== serviceAppointmentId
            )
        })
    ),
    onDeleteTempServiceAppointmentItem: () => set({
        tempServiceAppointment: null
    }),
}));
