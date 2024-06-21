import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const emptyServiceItem = {
  id: "",
  catId: "",
  name: "",
  category: "",
  description: "",
  duration: "",
  price: 0,
  laborPrice: 0,
  discount: 0,
  vat_tax: 0,
  laborPricing: "",
  subcontractor: [
    {
      subcontractorID: "",
      subcontractorName: "",
      subcontractorCategoryServices: "",
      contactPerson: "",
      contactNumber: "",
      email: "",
      address: "",
      service: [
        {
          serviceID: "",
          serviceName: "",
          serviceCategory: "",
          description: "",
          hourlyRate: 0,
          availability: "",
          averageDeliveryTime: "",
        },
      ],
    },
  ],
  serviceItems: [
    {
      inventoryID: "",
      partName: "",
      itemPartID: "",
      quantity: 0,
      price: 0,
      type: "",
      discountApplicable: false,
      discount: 0,
    },
  ],
  labourCost: {
    amount: 0,
    currency: "",
    description: "",
  },
  totalCost: {
    amount: 0,
    vat_tax: 0,
    currency: "",
  },
  availability: {
    daysRequired: 0,
    startAvailability: "",
    endAvailability: "",
    workingHours: {
      start: "",
      end: "",
    },
  },
};

export const emptyJobCard = {
  jobCardID: "",
  VehicleDetails: {
      make: "",
      model: "",
      vehicleType: "",
      year: 0,
      licensePlate: "",
      vin: "",
  },
  customerDetails: {
      name: "",
      contactNumber: "",
      email: "",
      address: "",
  },
  jobPriority: "",
  jobType: "",
  customerIssueDescription: "",
  insuranceDetails: {
      provider: "",
      policyNumber: "",
  },
  inspectionChecklist: [
    {
      id: "",
      name: "",
      inspectionList: [
        {
          id: "",
          inspectionItem: "",
        },
      ],
    },
  ],
  currenstServiceBay: 0,
  technicians: [
    {
      id: "",
      name: "",
    },
  ],
  partsUsed: [
    {
      name: "",
      quantity: 0,
      cost: {
        amount: 0,
        currency: "",
      }
    }
  ],
  ceatedAtDateTime: "",
  cardWriter: "",
  startDateTime: "",
    estimatedCompletionTime: "",
    actualCompletionTime: "",
    eventsLog: {
      createdAtDateTime: "",
      startDateTime: "",
      estimatedCompletionTime: "",
      actualCompletionTime: "",
      activityLog: [
        {
          trigger: "",
          action: "",
          dateTime: "",
        },
      ],
      paymentLog: [
        {
          trigger: "",
          action: "",
          dateTime: "",
        },
      ],
    },
    servicesDetails: [
      {
        id: "",
        name: "",
        description: "",
        cost: {
          amount: 0,
          currency: "",
        },
        quantity: 0,
        status: "",
        authorization: "",
        category: "",
        technicians: [
          {
            id: "",
            name: "",
          },
        ],
      },
    ],
    bookingDetails: {
      scheduledAppointmentDateTime: "",
      initialDeposit: 0,
      paymentMethod: "",
      bookingType: "Walk-In",
      vehicleDelivery: "",
    },
    bookingRequirements: {
      insuranceNeeded: false,
      advancedBookingRequired: false,
      initialDepositPercentage: 0,
      cancellationPolicy: "",
    },
    actionTaken: "",
    actualWorkshopFinding: "",
    costing: {
      parts: 0,
      labor: 0,
      vat_tax: 0,
      total: 0,
      currency: "",
    },
    paymentStatus: "",
    paymentTransactions: [
      {
        transactionID: "",
        invoiceID: "",
      },
    ],
    complementaryServices: [
      {
        complementaryServiceID: "",
        complementaryServiceName: "",
        description: "",
      },
    ],
    remarks: "",
    status: "",
    workflowStatus: "",
    additionalFeatures: ["", ""],
    customerReviews: [
      {
        reviewID: "",
        customerName: "",
        reviewDate: "",
        rating: 0,
        review: "",
      },
    ],
}

export const emptyInventoryItem = {
  inventoryID: "",
  itemPartID: "",
  itemName: "",
  itemDescription: "",
  itemVehicleBrand: "",
  itemVehicleVariant: "",
  itemVehicleModel: "",
  itemTotalQuantity: 0,
  itemConsumedQuantity: 0,
  itemAvailabilityQuantity: 0,
  itemEstimatedQuantityMonthly: 0,
  itemLocation: "",
  purchasePrice: {
    amount: 0,
    currency: "",
  },
  salesPrice: {
    amount: 0,
    currency: "",
  },
  orderDetails: {
    orderID: "",
    orderDate: "",
    receivedDate: "",
    orderedQuantity: 0,
  },
  itemExpiryDate: "",
  itemCategory: "",
  itemType: "",
  itemThreshold: 0,
  itemMinimumThreshold: 0,
  itemMaximumThreshold: 0,
  itemQuantity: "",
  itemUnit: "",
  itemCostPerUnit: {
    amount: 0,
    currency: "",
  },
  reorderLevel: "",
  supplierDetails: {
    supplierID: "",
    supplierName: "",
    contactNumber: "",
    email: "",
    address: "",
  },
  abcAnalysis: {
    itemID: "",
    category: "",
    annualConsumptionValue: 0,
    percentageOfTotalItems: 0,
    cumulativePercentage: 0,
  },
  lastRestockDate: "",
  location: "",
};
