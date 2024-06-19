export const jc_card_view_eg = {
  jobCard: {
    jobCardID: "JC12345",
    vehicleDetails: {
      make: "Toyota",
      model: "Camry",
      vehicleType: "Sedan",
      year: 2018,
      licensePlate: "ABC123",
      vin: "VIN1234567890",
    },
    customerDetails: {
      name: "John Doe",
      contactNumber: "+1234567890",
      email: "john.doe@example.com",
      address: "123 Main St, Cityville",
    },
    jobPriority: "High",
    jobType: "Commercial",
    customerIssueDescription: "Braking issues, strange noise",
    insuranceDetails: {
      provider: "XYZ Insurance",
      policyNumber: "POL123456",
    },
    inspectionChecklist: [
      {
        id: "INL001A",
        name: "General Inspection",
        generalInspection: [
          "Brake System",
          "Engine Performance",
          "Suspension",
          "Transmission",
          "Tires and Wheels",
          "Lights and Electrical",
          "Fluid Levels",
        ],
      },
    ],
    currentServiceBay: 3,
    technicians: [
      {
        id: "Tech001",
        name: "Mike Smith",
      },
      {
        id: "Tech002",
        name: "Lisa Johnson",
      },
    ],
    partsUsed: [
      {
        name: "Brake Pads",
        quantity: 2,
        cost: {
          amount: 50,
          currency: "USD",
        },
      },
      {
        name: "Engine Oil",
        quantity: 5,
        cost: {
          amount: 30,
          currency: "USD",
        },
      },
    ],
    startDateTime: "2024-02-29T10:00:00",
    estimatedCompletionTime: "2024-02-29T15:00:00",
    actualCompletionTime: "2024-02-29T14:45:00",
    eventsLog: {
      startDateTime: "2024-02-29T10:00:00",
      estimatedCompletionTime: "2024-02-29T15:00:00",
      actualCompletionTime: "2024-02-29T14:45:00",
      activityLog: [
        {
          trigger: "John Doe",
          action: "joined a new Team",
          dateTime: "2024-02-29T14:45:00",
        },
        {
          trigger: "John Doe",
          action: "joined a new Team",
          dateTime: "2024-02-29T14:45:00",
        },
        {
          trigger: "John Doe",
          action: "joined a new Team",
          dateTime: "2024-02-29T14:45:00",
        },
      ],
      paymentLog: [
        {
          trigger: "John Doe",
          action: "paid $54.00",
          dateTime: "2024-02-29T10:00:00",
        },
        {
          trigger: "John Doe",
          action: "paid $54.00",
          dateTime: "2024-02-29T10:00:00",
        },
        {
          trigger: "John Doe",
          action: "paid $54.00",
          dateTime: "2024-02-29T10:00:00",
        },
      ],
    },
    servicesDetails: [
      {
        id: "SRV12",
        name: "Brake System Repair",
        description: "Replace Brake Pads",
        cost: {
          amount: 100,
          currency: "USD",
        },
        quantity: 1,
        status: "InProgress",
        authorization: "Authorized",
        category: "Brake Services",
        technicians: [
          {
            id: "Tech001",
            name: "Mike Smith",
          },
        ],
      },
      {
        id: "SRV2",
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
        quantity: 1,
        status: "Completed",
        authorization: "Authorized",
        category: "Engine Services",
        technicians: [
          {
            id: "Tech001",
            name: "Mike Smith",
          },
        ],
      },
      {
        id: "SRV14",
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
        quantity: 1,
        status: "Pending",
        authorization: "Pending",
        category: "Engine Services",
        technicians: [
          {
            id: "Tech001",
            name: "Mike Smith",
          },
          {
            id: "Tech002",
            name: "Lisa Johnson",
          },
        ],
      },
      {
        id: "SRV18",
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
        quantity: 1,
        status: "InProgress",
        authorization: "Authorized",
        category: "Engine Services",
        technicians: [
          {
            id: "Tech002",
            name: "Lisa Johnson",
          },
        ],
      },
    ],
    actionTaken: "Replaced brake pads and changed engine oil.",
    actualWorkshopFinding: "Brake pads worn out, engine oil degraded.",
    costing: {
      parts: 80,
      labor: 70,
      vat_tax: 20,
      total: 150,
      currency: "USD",
    },
    paymentStatus: "Pending",
    remarks: "Customer informed about additional recommended repairs.",
    status: "InProgress",
    additionalFeatures: ["CustomFeature1", "CustomFeature2"],
  },
};

export const jc_card_view_eg_2 = {
  jobCard: {
    jobCardID: "JC12345",
    vehicleDetails: {
      make: "Toyota",
      model: "Camry",
      vehicleType: "Sedan",
      year: 2018,
      licensePlate: "ABC123",
      vin: "VIN1234567890",
    },
    customerDetails: {
      name: "John Doe",
      contactNumber: "+1234567890",
      email: "john.doe@example.com",
      address: "123 Main St, Cityville",
    },
    jobPriority: "High",
    jobType: "Commercial",
    customerIssueDescription: "Braking issues, strange noise",
    insuranceDetails: {
      provider: "XYZ Insurance",
      policyNumber: "POL123456",
    },
    inspectionChecklist: [
      {
        id: "INL001A",
        name: "General Inspection",
        inspectionList: [
          {
            id: "01A",
            inspectionItem: "Brake System",
          },
          {
            id: "02A",
            inspectionItem: "Engine Performance",
          },
          {
            id: "03A",
            inspectionItem: "Suspension",
          },
          {
            id: "04A",
            inspectionItem: "Transmission",
          },
          {
            id: "05A",
            inspectionItem: "Tires and Wheels",
          },
          {
            id: "06A",
            inspectionItem: "Lights and Electrical",
          },
          {
            id: "07A",
            inspectionItem: "Fluid Levels",
          },
        ],
      },
      {
        id: "INL001C",
        name: "Brake Inspection",
        inspectionList: [
          {
            id: "01C",
            inspectionItem: "Brake Pads and Shoes",
          },
          {
            id: "02C",
            inspectionItem: "Brake Rotors and Drums",
          },
          {
            id: "03C",
            inspectionItem: "Brake Lines and Hoses",
          },
          {
            id: "04C",
            inspectionItem: "Brake Fluid Level",
          },
          {
            id: "05C",
            inspectionItem: "ABS System",
          },
          {
            id: "06C",
            inspectionItem: "Parking Brake",
          },
          {
            id: "07C",
            inspectionItem: "Brake Pedal",
          },
        ],
      },
    ],
    currentServiceBay: 3,
    technicians: [
      {
        id: "Tech001",
        name: "Mike Smith",
      },
      {
        id: "Tech002",
        name: "Lisa Johnson",
      },
    ],
    partsUsed: [
      {
        name: "Brake Pads",
        quantity: 2,
        cost: {
          amount: 50,
          currency: "USD",
        },
      },
      {
        name: "Engine Oil",
        quantity: 5,
        cost: {
          amount: 30,
          currency: "USD",
        },
      },
    ],
    createdAtDateTime: "2024-02-29T10:00:00",
    cardWriter: "Jim Romeo",
    startDateTime: "2024-02-29T10:00:00",
    estimatedCompletionTime: "2024-02-29T15:00:00",
    actualCompletionTime: "2024-02-29T14:45:00",
    eventsLog: {
      createdAtDateTime: "2024-02-29T10:00:00",
      startDateTime: "2024-02-29T10:00:00",
      estimatedCompletionTime: "2024-02-29T15:00:00",
      actualCompletionTime: "2024-02-29T14:45:00",
      activityLog: [
        {
          trigger: "Jim Romeo",
          action: "created the Job Card",
          dateTime: "2024-02-29T10:00:00",
        },
        {
          trigger: "John Doe",
          action: "joined a new Team",
          dateTime: "2024-02-29T14:45:00",
        },
        {
          trigger: "John Doe",
          action: "joined a new Team",
          dateTime: "2024-02-29T14:45:00",
        },
        {
          trigger: "John Doe",
          action: "joined a new Team",
          dateTime: "2024-02-29T14:45:00",
        },
      ],
      paymentLog: [
        {
          trigger: "John Doe",
          action: "paid $54.00",
          dateTime: "2024-02-29T10:00:00",
        },
        {
          trigger: "John Doe",
          action: "paid $54.00",
          dateTime: "2024-02-29T10:00:00",
        },
        {
          trigger: "John Doe",
          action: "paid $54.00",
          dateTime: "2024-02-29T10:00:00",
        },
      ],
    },
    servicesDetails: [
      {
        id: "SRV12",
        name: "Brake System Repair",
        description: "Replace Brake Pads",
        cost: {
          amount: 100,
          currency: "USD",
        },
        quantity: 1,
        status: "InProgress",
        authorization: "Authorized",
        category: "Brake Services",
        technicians: [
          {
            id: "Tech001",
            name: "Mike Smith",
          },
        ],
      },
      {
        id: "SRV2",
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
        quantity: 1,
        status: "Completed",
        authorization: "Authorized",
        category: "Engine Services",
        technicians: [
          {
            id: "Tech001",
            name: "Mike Smith",
          },
        ],
      },
      {
        id: "SRV14",
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
        quantity: 1,
        status: "Pending",
        authorization: "Pending",
        category: "Engine Services",
        technicians: [
          {
            id: "Tech001",
            name: "Mike Smith",
          },
          {
            id: "Tech002",
            name: "Lisa Johnson",
          },
        ],
      },
      {
        id: "SRV18",
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
        quantity: 1,
        status: "InProgress",
        authorization: "Authorized",
        category: "Engine Services",
        technicians: [
          {
            id: "Tech002",
            name: "Lisa Johnson",
          },
        ],
      },
    ],
    bookingDetails: {
      scheduledAppointmentDateTime: "2024-02-29T10:00:00",
      initialDeposit: 6300,
      paymentMethod: "Credit Card",
      bookingType: "Walk-In",
      vehicleDelivery: "False",
    },
    bookingRequirements: {
      insuranceNeeded: true,
      advancedBookingRequired: true,
      initialDepositPercentage: 20,
      cancellationPolicy:
        "Cancellation allowed with a 7-day notice; deposit non-refundable after that.",
    },
    actionTaken: "Replaced brake pads and changed engine oil.",
    actualWorkshopFinding: "Brake pads worn out, engine oil degraded.",
    costing: {
      parts: 80,
      labor: 70,
      vat_tax: 20,
      total: 150,
      currency: "USD",
    },
    paymentStatus: "Pending",
    paymentTransactions: [
      {
        transactionID: "TXN123",
        invoiceID: "INV567",
      },
      {
        transactionID: "TXN124",
        invoiceID: "INV568",
      },
    ],
    complementaryServices: [
      {
        complementaryServiceID: "ADDSRV001A",
        complementaryServiceName: "Period-Correct Detailing",
        description:
          "Detailed restoration to ensure that every aspect of the vehicle aligns with its original period.",
      },
      {
        complementaryServiceID: "ADDSRV002A",
        complementaryServiceName: "Customization and Modification",
        description:
          "Tailoring the restoration to include modern upgrades or personalization as per the client's preferences.",
      },
      {
        complementaryServiceID: "ADDSRV003A",
        complementaryServiceName: "Performance Tuning",
        description:
          "Enhancing the vehicle's performance through engine tuning, suspension upgrades, and brake enhancements.",
      },
    ],
    remarks: "Customer informed about additional recommended repairs.",
    status: "InProgress",
    workflowStatus: "inProgress",
    additionalFeatures: ["CustomFeature1", "CustomFeature2"],
    customerReviews: [
      {
        reviewID: "CR8001",
        customerName: "John ClassicCarEnthusiast",
        reviewDate: "2024-10-05",
        rating: 5,
        review:
          "Absolutely thrilled with the restoration work. The attention to detail is commendable.",
      },
      {
        reviewID: "CR8002",
        customerName: "CarRestorationFanatic",
        reviewDate: "2024-10-10",
        rating: 4,
        review:
          "Great craftsmanship, although the project took a bit longer than expected.",
      },
    ],
  },
};
