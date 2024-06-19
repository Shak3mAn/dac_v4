export const jobs_meta = {
  jobCard: {
    jobCards: [
      {
        id: "JC001",
        vehicleDetails: {
          make: "Toyota",
          model: "Camry",
          year: 2018,
          licensePlate: "ABC123",
        },
        customerDetails: {
          name: "John Doe",
          contactNumber: "+123456789",
          email: "john.doe@example.com",
        },
        technicianAssigned: "Tech001",
        status: "In Progress",
        services: [
          {
            serviceType: "Oil Change",
            description: "Replace engine oil and oil filter",
            status: "Completed",
          },
          {
            serviceType: "Brake Inspection",
            description: "Check and replace brake pads if necessary",
            status: "Pending",
          },
        ],
        partsUsed: [
          {
            partName: "Oil Filter",
            quantity: 1,
          },
          {
            partName: "Engine Oil",
            quantity: 5,
          },
        ],
        startTime: "2024-02-29T09:00:00",
        estimatedCompletionTime: "2024-02-29T12:00:00",
        actualCompletionTime: null,
        totalCost: {
          amount: 150,
          currency: "USD",
        },
      },
      {
        id: "JC002",
        vehicleDetails: {
          make: "Honda",
          model: "Civic",
          year: 2020,
          licensePlate: "XYZ789",
        },
        customerDetails: {
          name: "Jane Smith",
          contactNumber: "+987654321",
          email: "jane.smith@example.com",
        },
        technicianAssigned: "Tech002",
        status: "Completed",
        services: [
          {
            serviceType: "Tire Rotation",
            description: "Rotate tires for even wear",
            status: "Completed",
          },
        ],
        partsUsed: [
          {
            partName: "Tire",
            quantity: 4,
          },
        ],
        startTime: "2024-02-28T14:00:00",
        estimatedCompletionTime: "2024-02-28T17:00:00",
        actualCompletionTime: "2024-02-28T16:30:00",
        totalCost: {
          amount: 200,
          currency: "USD",
        },
      },
    ],
    actions: [
      "CreateJobCard",
      "UpdateJobCard",
      "AssignTechnician",
      "MarkAsCompleted",
      "GenerateInvoice",
      "ViewJobCardHistory",
    ],
  },
};

const job_card_2 = {
  jobCard: {
    jobCardNumber: "JC2024001",
    priority: "High",
    vehicleDetails: {
      make: "Toyota",
      model: "Camry",
      year: 2019,
      licensePlate: "ABC123",
      mileage: 35000,
    },
    customerDetails: {
      name: "John Doe",
      contactNumber: "+1234567890",
      email: "john.doe@example.com",
      address: "123 Main St, Cityville",
    },
    jobType: "Insurance", // or "Private", "Commercial", "Public"
    issueDescription: "Engine overheating and strange noises",
    inspectionChecklist: [
      "Check engine oil level",
      "Inspect brake system",
      "Check tire pressure",
      "Examine exhaust system",
      "Inspect suspension components",
    ],
    serviceStage: "In Progress", // or "Scheduled", "Completed"
    currentServiceBay: 3,
    technicians: [
      {
        name: "Jack Mechanic",
        specialization: "Engine",
        status: "Working",
      },
      {
        name: "Lisa Technician",
        specialization: "Brakes",
        status: "Available",
      },
    ],
    partsUsed: [
      {
        partName: "Radiator",
        quantity: 1,
      },
      {
        partName: "Brake Pads",
        quantity: 2,
      },
    ],
    workshopFinding: "Cooling system issue identified",
    actionTaken: "Replaced radiator and brake pads",
    costing: {
      parts: {
        totalCost: {
          amount: 500,
          currency: "USD",
        },
        itemizedCost: [
          {
            partName: "Radiator",
            cost: {
              amount: 300,
              currency: "USD",
            },
          },
          {
            partName: "Brake Pads",
            cost: {
              amount: 200,
              currency: "USD",
            },
          },
        ],
      },
      labor: {
        hoursWorked: 5,
        hourlyRate: {
          amount: 50,
          currency: "USD",
        },
        totalCost: {
          amount: 250,
          currency: "USD",
        },
      },
    },
    remarks: "Customer advised on regular maintenance for better performance.",
    additionalFeatures: ["CustomFeature1", "CustomFeature2"],
  },
};

const job_meta2 = {
  jobCard: {
    jobCardNumber: "JC20240229",
    priority: "High",
    vehicleDetails: {
      make: "Toyota",
      model: "Corolla",
      year: 2018,
      licensePlate: "ABC1234",
      mileage: 50000,
    },
    customerDetails: {
      name: "John Doe",
      contact: "+1234567890",
      email: "john.doe@example.com",
      address: "123 Main St, City, Country",
    },
    jobType: "Insurance",
    issueDescription: "Engine overheating",
    inspectionChecklist: [
      "Check engine coolant level",
      "Inspect radiator for leaks",
      "Check thermostat operation",
      "Inspect cooling fan operation",
    ],
    stageOfService: "In Progress",
    currentServiceBay: "Bay 3",
    technicians: [
      {
        name: "Mike Smith",
        role: "Lead Technician",
        specialization: "Engine",
      },
      {
        name: "Emily Johnson",
        role: "Technician",
        specialization: "Electrical",
      },
    ],
    partsUsed: [
      {
        name: "Thermostat",
        quantity: 1,
        unitCost: {
          amount: 50,
          currency: "USD",
        },
      },
      {
        name: "Coolant",
        quantity: 2,
        unitCost: {
          amount: 20,
          currency: "USD",
        },
      },
    ],
    serviceCost: {
      parts: {
        totalCost: {
          amount: 120,
          currency: "USD",
        },
      },
      labor: {
        totalCost: {
          amount: 200,
          currency: "USD",
        },
      },
      totalCost: {
        amount: 320,
        currency: "USD",
      },
    },
    technicianFindings: "Thermostat stuck closed, causing engine to overheat.",
    actionsTaken: "Replaced thermostat, flushed and replaced coolant.",
    remarks: "Suggested future radiator flush and inspection.",
    additionalFeatures: ["CustomerApprovalRequired", "PartsOrdered"],
  },
};

export const job_meta3 = {
  jobCard: {
    jobCardID: "JC12345",
    vehicleDetails: {
      make: "Toyota",
      model: "Camry",
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
      "Brake System",
      "Engine Performance",
      "Suspension",
      "Transmission",
      "Tires and Wheels",
      "Lights and Electrical",
      "Fluid Levels",
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
    servicesDetails: [
      {
        name: "Brake System Repair",
        description: "Replace Brake Pads",
        cost: {
          amount: 100,
          currency: "USD",
        },
      },
      {
        name: "Oil Change",
        description: "Engine Oil Replacement",
        cost: {
          amount: 50,
          currency: "USD",
        },
      },
    ],
    actionTaken: "Replaced brake pads and changed engine oil.",
    actualWorkshopFinding: "Brake pads worn out, engine oil degraded.",
    costing: {
      parts: 80,
      labor: 70,
      total: 150,
      currency: "USD",
    },
    paymentStatus: "Pending",
    remarks: "Customer informed about additional recommended repairs.",
    status: "InProgress",
    additionalFeatures: ["CustomFeature1", "CustomFeature2"],
  },
};
