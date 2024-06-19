import { format } from "date-fns";

import { service_appointment_data } from "@/lib/data/service-appointment-data";

import { WorkshopAppointmentsColumn } from "./column/workshop-appointments-column";
import { WorkshopAppointmentsClient } from "./client/workshop-appointments-client";

export const WorkshopAppointmentsTable = () => {
  const formattedWorkshopAppointments: WorkshopAppointmentsColumn[] =
    service_appointment_data.map((item) => ({
      id: item.serviceAppointmentCard.serviceAppointmentID,
      name: item.serviceAppointmentCard.customerDetails.name,
      contactNumber: item.serviceAppointmentCard.customerDetails.contactNumber,
      licensePlate: item.serviceAppointmentCard.vehicleDetails.licensePlate,
      serviceName: item.serviceAppointmentCard.servicesDetails.name,
      vehicleModel: item.serviceAppointmentCard.vehicleDetails.model,
      scheduledAppointmentDateTime: format(new Date(item.serviceAppointmentCard.scheduledAppointmentDateTime), "dd/MM/yyyy 'at' hh:mm aaa")
    }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <WorkshopAppointmentsClient data={formattedWorkshopAppointments} />
      </div>
    </div>
  );
};
