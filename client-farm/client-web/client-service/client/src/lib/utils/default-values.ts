{
  /* JCService Item */
}
export const emptyJCServiceItem = {
  authorization: "",
  category: "",
  cost: {
    amount: 0,
    currency: "",
  },
  description: "",
  id: "",
  name: "",
  quantity: 0,
  status: "",
  technicians: [
    {
      id: "",
      name: "",
    },
  ],
};

{
  /* Job Card Item */
}
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
      },
    },
  ],
  createdAtDateTime: "",
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
};

{
  /* Inventory Item */
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

{
  /*
  Custom Inventory Item
  */
}
export const emptyCustomPartItem = {
  customInventoryID: "",
  partName: "",
  customItemPartID: "",
  quantity: 0,
  price: 0,
  type: "",
  discountApplicable: false,
  discount: 0,
};

{
  /* Service Item */
}
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
  authorization: "",
  status: "",
  technicians: [
    {
      id: "",
      name: "",
    },
  ],
  subcontractor: [
    {
      subcontractorID: "",
      subcontractorName: "",
      subcontractorCategoryServices: "",
      contactPerson: "",
      contactNumber: "",
      email: "",
      address: "",
      subcontractorNote: "",
      service: [
        {
          serviceID: "",
          serviceName: "",
          serviceCategory: "",
          description: "",
          hourlyRate: 0,
          availability: "",
          status: "",
          averageDeliveryTime: "",
          serviceNote: "",
        },
      ],
    },
  ],
  labor: [
    {
      laborID: "",
      laborName: "",
      hourlyRate: 0,
      dailyRate: 0,
      weeklyRate: 0,
      monthlyRate: 0,
      serviceTotal: 0,
      discountApplicable: false,
      discount: 0,
      status: "",
      technicians: [
        {
          id: "",
          name: "",
        },
      ],
      laborNote: "",
    },
  ],
  serviceItems: [
    {
      inventoryID: "",
      partName: "",
      itemPartID: "",
      availabilty: false,
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

{
  /* Broker Item */
}
export const emptyBrokerItem = {
  brokerID: "",
  brokerName: "",
  contactPerson: "",
  contactNumber: "",
  workEmail: "",
  personalEmail: "",
  address: "",
  amountOfReferrals: 0,
  brokerReferralCustomerGenerationScore: 0,
  brokerTotalReferralsRevenueGeneration: 0,
  brokerReferralsRevenueGenerationperAnnum: 0,
  brokerPriorityIndex: 0,
  lastReferralDateTime: "",
  referralDetails: [
    {
      referralId: "",
      referralName: "",
      referralDateTime: "",
      referralType: "",
    },
  ],
};

{
  /* Cashier Item */
}
export const emptyCashierItem = {
  cashierId: "",
  dateOfBirth: "",
  fullName: "",
  firstName: "",
  lastName: "",
  initial: "",
  email: "",
  phoneNumber: "",
  kraTaxPin: "",
  nhifNumber: "",
  address: "",
  leaveDates: [""],
  registrationDate: "",
  commencementDate: "",
  annualLeaveAmount: 0,
  bonusState: "",
  bonusAmount: 0.0,
  salesTarget: 0.0,
  totalJobCardsProcessed: 0,
  jobCardsProcessedMonthly: {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  },
  totalInvoicesProcessed: 0,
  totalBookingsProcessed: 0,
  totalFollowUpRequests: 0,
  certifications: [
    {
      certificationName: "",
      attachment: "",
    },
  ],
};

{
  /* Customer Item */
}
export const emptyCustomerItem = {
  customerId: "",
  customerName: "",
  customerInitial: "",
  customerEmail: "",
  customerPhone: "",
  customerRegistrationDate: "",
  customerPriority: "",
  vehicles: [
    {
      vehicleId: "",
      make: "",
      model: "",
      registrationNumber: "",
      insurancePolicyNumber: "",
      fuelType: "",
      wheelBase: "",
      vinChassisNumber: "",
      vehicleType: "",
      manufacturer: "",
      mileage: "",
      status: "",
      manufacturedDate: "",
      garageVisitAmount: 0,
      jobCards: [
        {
          jobCardId: "",
          status: "",
          lastUpdated: "",
          pendingAmount: 0.0,
          servicesOffered: [""],
          active: false,
          inspectionDetails: {
            inspectionDate: "",
            inspectionStatus: "",
            inspectorName: "",
            inspectionComments: "",
          },
        },
      ],
    },
  ],
};

{
  /* Fleet Item */
}
export const emptyFleetItem = {
  companyID: "",
  companyName: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  address: "",
  clientPriority: "",
  clientJoiningDate: "",
  amountOfJobs: 0,
  lastJobStartingDate: "",
  clientSatisfactionLevel: 0.0,
  totalRevenueGenerated: 0.0,
  clientComplaints: 0,
  clientFeedback: "",
  fleetSize: 0,
  fleetDetails: [
    {
      vehicleId: "",
      make: "",
      model: "",
      registrationNumber: "",
      insurancePolicyNumber: "",
      fuelType: "",
      wheelBase: "",
      vinChassisNumber: "",
      vehicleType: "",
      manufacturer: "",
      mileage: 0,
      status: "",
      manufacturedDate: "",
      garageVisitAmount: 0,
      lastGarageVisit: "",
      coldJobEnquiry: true,
      coldJobEnquiryDetails: {
        coldJobID: "",
        coldJobCreatedDateTime: "",
        coldJobClientIssueDescription: "",
        coldJobServiceName: "",
        coldJobResponseDateTime: "",
        coldJobRemiderDateTime: "",
      },
      activeJobCards: true,
      jobCardDetails: {
        jobCardId: "",
      },
    },
  ],
};

{
  /* General Service Item Category */
}
export const emptyCatalogue = {
  catId: "",
  category: "",
  services: [
    {
      id: "",
      name: "",
      description: "",
      price: 0,
      duration: "",
      laborPrice: 0,
      vat_tax: 0,
    },
  ],
};

{
  /* Inspection List Item */
}
export const emptyInspectionList = {
  id: "",
  name: "",
  inspectionList: [
    {
      id: "",
      inspectionItem: "",
    },
  ],
};

export const emptyInspectionItem = {
  id: "",
  name: "",
}

{
  /* Insurance Accident Item */
}
export const emptyInsuranceAccidentItem = {
  insurerName: "",
  policyNumber: "",
  claimNumber: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  address: "",
  insuranceJobId: "",
  accidentDetails: {
    accidentDate: "",
    accidentLocation: "",
    vehicleDamage: "",
    policyHolderName: "",
    vehicleDetails: {
      make: "",
      model: "",
      year: 0,
      licensePlate: "",
      vin: "",
    },
    repairDetails: {
      jobCommencementDate: "",
      estimatedDateOfCompletion: "",
      actualDateOfCompletion: "",
      jobCardId: "",
      repairType: "",
      repairDescription: "",
    },
  },
};

{
  /* Insurer Item */
}
export const emptyInsurerItem = {
  insurerID: "",
  insurerName: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  address: "",
  insurerAmountOfJobs: 0,
  insurerPaymentDelays: 0,
  activeInsuranceJobs: 0,
  insurerPendingPayments: 0,
  insurerTotalRevenueGenerated: 0,
};

{
  /* General Worker Item */
}
export const emptyGeneralWorker = {
  employeeId: "",
  dateOfBirth: "",
  fullName: "",
  firstName: "",
  lastName: "",
  initial: "",
  email: "",
  phoneNumber: "",
  kraTaxPin: "",
  nhifNumber: "",
  address: "",
  leaveDates: [
    {
      id: "",
      date: "",
    },
  ],
  registrationDate: "",
  commencementDate: "",
  annualLeaveAmount: 0,
  bonusState: "",
  bonusAmount: 0.0,
  role: "",
  certifications: [
    {
      certificationName: "",
      attachment: "",
    },
  ],
};

{
  /* Manager Data */
}
export const emptyManagerItem = {
  managerId: "",
  dateOfBirth: "",
  fullName: "",
  firstName: "",
  lastName: "",
  initial: "",
  email: "",
  phoneNumber: "",
  kraTaxPin: "",
  nhifNumber: "",
  role: "",
  address: "",
  leaveDates: [
    {
      id: "",
      date: "",
    },
  ],
  registrationDate: "",
  commencementDate: "",
  annualLeaveAmount: 0,
  bonusState: "",
  bonusAmount: 0.0,
  certifications: [
    {
      certificationName: "",
      attachment: "",
    },
  ],
};

{
  /* Order Item */
}
export const emptyOrderItem = {
  orderID: "",
  orderDate: "",
  orderCreator: "",
  orderDetails: [
    {
      inventoryID: "",
      itemPartID: "",
      itemName: "",
      itemCategory: "",
      itemType: "",
      currentStock: 0,
      reorderQuantity: 0,
      itemUnit: "",
      estimatedMonthlyUsage: 0,
      minimumStockLevel: 0,
      maximumStockLevel: 0,
      reorderLevel: false,
    },
  ],
  supplierDetails: {
    supplierID: "",
    supplierName: "",
    contactNumber: "",
    email: "",
    address: "",
  },
  shippingDetails: {
    shippingMethod: "",
    shippingAddress: "",
    expectedDeliveryDate: "",
    shippingCost: {
      amount: 0,
      currency: "",
    },
  },
  orderTotalAmount: {
    amount: 0,
    vat_tax: 0,
    currency: "",
  },
  purchasePricePerUnit: {
    amount: 0,
    vat_tax: 0,
    currency: "",
  },
  orderStatus: "",
  paymentInformation: {
    paymentMethod: "",
    paymentStatus: "",
    paymentDate: "",
    totalAmount: {
      amount: 0,
      currency: "",
    },
    transactionID: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    vatTax: {
      amount: 0,
      currency: "",
    },
  },
  notes: "",
  orderTicket: {
    ticketID: "",
    createdDate: "",
    orderCreator: "",
    orderDetails: [
      {
        inventoryID: "",
        itemName: "",
        reorderQuantity: 0,
        itemUnit: "",
      },
    ],
    supplierName: "",
    shippingAddress: "",
    shippingMethod: "",
    expectedDeliveryDate: "",
    orderStatus: "",
  },
};

{
  /* Payment Transaction Item */
}
export const emptyPaymentTransactionItem = {
  transactionID: "",
  invoiceID: "",
  invoiceDetails: {
    issuedDate: "",
    dueDate: "",
    jobCardID: "",
    vehicleVIN: "",
    vehicleRegistration: "",
    customerDetails: {
      name: "",
      contactNumber: "",
      email: "",
      address: "",
    },
    paymentStatus: "",
    paymentMethods: [],
    paymentGateway: "",
    discountEligibility: false,
    couponsEligibility: false,
    discounts: [],
    coupons: [],
    totalCost: {
      amount: 0,
      currency: "",
    },
    costBreakdown: {
      vat_tax: 0,
      discount: 0,
      taxable: 0,
      nonTaxable: 0,
      coupons: 0,
      parts: 0,
      labor: 0,
    },
  },
  paymentDueDate: "",
  paymentPaidInFull: false,
  paymentStages: [
    {
      stageID: "",
      amount: 0,
      currency: "",
      paymentDate: "",
      paymentType: "",
      paymentTypeID: "",
    },
    {
      stageID: "",
      amount: 0,
      currency: "",
      paymentDate: "",
      paymentType: "",
      paymentTypeID: "",
    },
  ],
  paymentReports: {
    totalRevenue: {
      count: 0,
      amount: 0,
      currency: "",
    },
    pendingPayments: {
      count: 0,
      amount: 0,
      currency: "",
    },
    processingPayments: {
      count: 0,
      amount: 0,
      currency: "",
    },
    clearedPayments: {
      count: 0,
      amount: 0,
      currency: "",
    },
  },
  outstandingPayments: 0,
};

{
  /* Part Reqest Item */
}
export const emptyRequestPartItem = {
  request: {
    requestID: "",
    requesterRole: "",
    requesterDetails: {
      name: "",
      id: "",
    },
    requestDateTime: "",
    requestedPartName: "",
    requestedQuantity: 0,
    requestedUnitPrice: {
      amount: 0,
      currency: "",
    },
    requestStatus: "",
    requestPartCategory: "",
    additionalInformation: "",
  },
};

{
  /* Service Appointment*/
}
export const emptyServiceAppointmentItem = {
  serviceAppointmentCard: {
    serviceAppointmentID: "",
    vehicleDetails: {
      make: "",
      model: "",
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
    technicians: [],
    scheduledAppointmentDateTime: "",
    servicesDetails: {
      name: "",
      description: "",
      cost: {
        amount: 0,
        currency: "",
      },
    },
  },
};

{
  /* Subcontractor Item */
}
export const emptySubcontractorItem = {
  subcontractorID: "",
  subcontractorName: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  address: "",
  postalBox: "",
  zipCode: "",
  subcontractorPriorityIndex: 0,
  subcontractorCategoryServices: "",
  servicesOffered: [
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
  subcontractorCompositeScoreOfPricing: 0,
  subcontractorPerformanceRatingSystem: 0,
  subcontractorSERVQUAL: 0,
};

{
  /* Supervisor Item */
}
export const emptySupervisorItem = {
  supervisorId: "",
  dateOfBirth: "",
  fullName: "",
  firstName: "",
  lastName: "",
  initial: "",
  email: "",
  phoneNumber: "",
  kraTaxPin: "",
  nhifNumber: "",
  address: "",
  leaveDates: [
    {
      id: "",
      date: "",
    },
  ],
  registrationDate: "",
  totalSupervisedJobCards: 0,
  totalSupervisedTechnicians: 0,
  successfulSupervisedJobCards: 0,
  pendingSupervisedJobCards: 0,
  failedSupervisedJobCards: 0,
  estimatedCompletionDate: "",
  annualLeaveAmount: 0,
  bonusState: "",
  bonusAmount: 0.0,
  expertise: [],
  certifications: [
    {
      certificationName: "",
      attachment: "",
    },
  ],
};

{
  /* Supplier Item */
}
export const emptySupplierItem = {
  supplierID: "",
  supplierName: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  address: "",
  postalBox: "",
  zipCode: "",
  supplierPriorityIndex: 0,
  productsCategory: "",
  productsProvided: [
    {
      productID: "",
      productName: "",
      description: "",
      unitPrice: 0,
      quantityAvailable: 0,
      productType: "",
    },
  ],
  supplierCompositeScoreOfPricing: 0.0,
  supplierPerformanceRatingSystem: 0.0,
  supplierSERVQUAL: 0.0,
};

{
  /* Technician Item */
}
export const emptyTechnicianItem = {
  technicianId: "",
  dateOfBirth: "",
  firstName: "",
  lastName: "",
  fullName: "",
  initial: "",
  email: "",
  phoneNumber: "",
  kraTaxPin: "",
  nhifNumber: "",
  address: "",
  leaveDates: [
    {
      id: "",
      date: "",
    },
  ],
  registrationDate: "",
  status: "",
  totalJobCards: 0,
  successfulJobCards: 0,
  pendingJobCards: 0,
  failedJobCards: 0,
  estimatedCompletionDate: "",
  annualLeaveAmount: 0,
  availability: false,
  bonusState: "",
  bonusAmount: 0.0,
  expertise: [],
  certifications: [
    {
      certificationName: "",
      attachment: "",
    },
  ],
};

{
  /* Vehicle Item */
}
export const emptyVehicleItem = {
  vehicleId: "",
  make: "",
  model: "",
  registrationNumber: "",
  insurancePolicyNumber: "",
  fuelType: "",
  wheelBase: "",
  vinChassisNumber: "",
  vehicleType: "",
  manufacturer: "",
  mileage: "",
  status: "",
  manufacturedDate: "",
  garageVisitAmount: 0,
  customerDetails: {
    name: "",
    email: "",
    phone: "",
  },
  jobCards: [
    {
      jobCardId: 0,
      status: "",
      lastUpdated: "",
      pendingAmount: 0.0,
      servicesOffered: [],
      inspectionDetails: {
        inspectionDate: "",
        inspectionStatus: "",
        inspectorName: "",
        inspectionComments: "",
      },
      allocatedTechnician: {
        technicianId: 0,
        technicianName: "",
        specialization: [],
      },
      allocatedSupervisor: {
        supervisorId: 0,
        supervisorName: "",
        department: "",
      },
    },
  ],
};
