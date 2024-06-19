export const service_appointment_data = [
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12345",
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
      technicians: [],
      scheduledAppointmentDateTime: "2024-02-29T10:00:00",
      servicesDetails: {
        name: "Brake System Repair",
        description: "Replace Brake Pads",
        cost: {
          amount: 100,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12346",
      vehicleDetails: {
        make: "Honda",
        model: "Accord",
        year: 2020,
        licensePlate: "DEF456",
        vin: "VIN0987654321",
      },
      customerDetails: {
        name: "Jane Smith",
        contactNumber: "+1987654321",
        email: "jane.smith@example.com",
        address: "456 Oak St, Townsville",
      },
      jobPriority: "Medium",
      jobType: "Personal",
      customerIssueDescription: "Check engine light is on",
      insuranceDetails: {
        provider: "ABC Insurance",
        policyNumber: "POL654321",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-03-01T14:00:00",
      servicesDetails: {
        name: "Engine Diagnostics",
        description: "Identify and troubleshoot engine issues",
        cost: {
          amount: 80,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12347",
      vehicleDetails: {
        make: "Ford",
        model: "F-150",
        year: 2019,
        licensePlate: "GHI789",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Bob Johnson",
        contactNumber: "+1122334455",
        email: "bob.johnson@example.com",
        address: "789 Elm St, Villagetown",
      },
      jobPriority: "Low",
      jobType: "Personal",
      customerIssueDescription: "Regular maintenance check",
      insuranceDetails: {
        provider: "PQR Insurance",
        policyNumber: "POL987654",
      },
      technicians: [
        {
          id: "Tech063",
          name: "Emma Robinson",
        },
      ],
      scheduledAppointmentDateTime: "2024-03-05T09:30:00",
      servicesDetails: {
        name: "Tire Rotation",
        description: "Rotate tires for even wear",
        cost: {
          amount: 40,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12348",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Cruze",
        year: 2017,
        licensePlate: "JKL012",
        vin: "VIN4567890123",
      },
      customerDetails: {
        name: "Emily Davis",
        contactNumber: "+3344556677",
        email: "emily.davis@example.com",
        address: "987 Maple St, Hamlet",
      },
      jobPriority: "High",
      jobType: "Commercial",
      customerIssueDescription: "Transmission slipping",
      insuranceDetails: {
        provider: "LMN Insurance",
        policyNumber: "POL456789",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-03-10T11:30:00",
      servicesDetails: {
        name: "Transmission Service",
        description: "Inspect and maintain transmission system",
        cost: {
          amount: 120,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12349",
      vehicleDetails: {
        make: "BMW",
        model: "X5",
        year: 2021,
        licensePlate: "MNO345",
        vin: "VIN6789012345",
      },
      customerDetails: {
        name: "Alice Brown",
        contactNumber: "+5566778899",
        email: "alice.brown@example.com",
        address: "654 Pine St, Forestville",
      },
      jobPriority: "Medium",
      jobType: "Personal",
      customerIssueDescription: "Rough idling",
      insuranceDetails: {
        provider: "STU Insurance",
        policyNumber: "POL345678",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-03-15T13:00:00",
      servicesDetails: {
        name: "Engine Tune-up",
        description: "Optimize engine performance",
        cost: {
          amount: 90,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12350",
      vehicleDetails: {
        make: "Mercedes-Benz",
        model: "E-Class",
        year: 2019,
        licensePlate: "PQR678",
        vin: "VIN9012345678",
      },
      customerDetails: {
        name: "Michael Johnson",
        contactNumber: "+1122334455",
        email: "michael.johnson@example.com",
        address: "321 Cedar St, Riverside",
      },
      jobPriority: "Low",
      jobType: "Personal",
      customerIssueDescription: "Routine maintenance and check-up",
      insuranceDetails: {
        provider: "VWX Insurance",
        policyNumber: "POL234567",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-03-20T09:00:00",
      servicesDetails: {
        name: "Full Inspection",
        description: "Comprehensive vehicle inspection",
        cost: {
          amount: 60,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12351",
      vehicleDetails: {
        make: "Toyota",
        model: "Corolla",
        year: 2016,
        licensePlate: "STU901",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Sarah Wilson",
        contactNumber: "+9988776655",
        email: "sarah.wilson@example.com",
        address: "789 Oak St, Hillside",
      },
      jobPriority: "High",
      jobType: "Personal",
      customerIssueDescription: "Engine overheating",
      insuranceDetails: {
        provider: "YZA Insurance",
        policyNumber: "POL901234",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-03-25T15:30:00",
      servicesDetails: {
        name: "Cooling System Flush",
        description: "Flush and refill cooling system",
        cost: {
          amount: 110,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12352",
      vehicleDetails: {
        make: "Honda",
        model: "Civic",
        year: 2019,
        licensePlate: "VWX234",
        vin: "VIN7890123456",
      },
      customerDetails: {
        name: "David Lee",
        contactNumber: "+1122334455",
        email: "david.lee@example.com",
        address: "456 Maple St, Brookside",
      },
      jobPriority: "Medium",
      jobType: "Personal",
      customerIssueDescription: "Check engine oil leak",
      insuranceDetails: {
        provider: "ZAB Insurance",
        policyNumber: "POL567890",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-03-28T12:00:00",
      servicesDetails: {
        name: "Oil Leak Repair",
        description: "Identify and fix engine oil leak",
        cost: {
          amount: 95,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12353",
      vehicleDetails: {
        make: "Ford",
        model: "Focus",
        year: 2017,
        licensePlate: "YZA567",
        vin: "VIN1234567890",
      },
      customerDetails: {
        name: "Alexandra Garcia",
        contactNumber: "+3344556677",
        email: "alexandra.garcia@example.com",
        address: "123 Elm St, Lakeside",
      },
      jobPriority: "Low",
      jobType: "Personal",
      customerIssueDescription: "Suspension noise",
      insuranceDetails: {
        provider: "BCD Insurance",
        policyNumber: "POL345678",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-02T09:00:00",
      servicesDetails: {
        name: "Suspension Inspection",
        description: "Inspect suspension components for noise",
        cost: {
          amount: 55,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12354",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Malibu",
        year: 2020,
        licensePlate: "BCD678",
        vin: "VIN2345678901",
      },
      customerDetails: {
        name: "Christopher Taylor",
        contactNumber: "+5566778899",
        email: "christopher.taylor@example.com",
        address: "654 Cedar St, Seaview",
      },
      jobPriority: "High",
      jobType: "Personal",
      customerIssueDescription: "Brake pedal feels soft",
      insuranceDetails: {
        provider: "CDE Insurance",
        policyNumber: "POL789012",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-05T13:30:00",
      servicesDetails: {
        name: "Brake Fluid Flush",
        description: "Flush and replace brake fluid",
        cost: {
          amount: 75,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12355",
      vehicleDetails: {
        make: "BMW",
        model: "3 Series",
        year: 2018,
        licensePlate: "CDE789",
        vin: "VIN6789012345",
      },
      customerDetails: {
        name: "Jessica Martinez",
        contactNumber: "+1234567890",
        email: "jessica.martinez@example.com",
        address: "789 Pine St, Mountainview",
      },
      jobPriority: "Medium",
      jobType: "Commercial",
      customerIssueDescription: "Electrical issues",
      insuranceDetails: {
        provider: "DEF Insurance",
        policyNumber: "POL123456",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-10T10:30:00",
      servicesDetails: {
        name: "Electrical System Diagnostics",
        description: "Diagnose and repair electrical problems",
        cost: {
          amount: 85,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12356",
      vehicleDetails: {
        make: "Mercedes-Benz",
        model: "GLC",
        year: 2019,
        licensePlate: "DEF890",
        vin: "VIN8901234567",
      },
      customerDetails: {
        name: "Ryan Thompson",
        contactNumber: "+9988776655",
        email: "ryan.thompson@example.com",
        address: "987 Oak St, Riverdale",
      },
      jobPriority: "Low",
      jobType: "Personal",
      customerIssueDescription: "Air conditioning not cooling",
      insuranceDetails: {
        provider: "EFG Insurance",
        policyNumber: "POL234567",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-15T14:00:00",
      servicesDetails: {
        name: "AC System Service",
        description: "Check and service air conditioning system",
        cost: {
          amount: 70,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12357",
      vehicleDetails: {
        make: "Toyota",
        model: "Rav4",
        year: 2017,
        licensePlate: "EFG123",
        vin: "VIN9012345678",
      },
      customerDetails: {
        name: "Samuel Hernandez",
        contactNumber: "+3344556677",
        email: "samuel.hernandez@example.com",
        address: "321 Maple St, Sunnyside",
      },
      jobPriority: "High",
      jobType: "Commercial",
      customerIssueDescription: "Excessive exhaust smoke",
      insuranceDetails: {
        provider: "FGH Insurance",
        policyNumber: "POL345678",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-20T11:00:00",
      servicesDetails: {
        name: "Exhaust System Inspection",
        description: "Inspect and diagnose exhaust system issues",
        cost: {
          amount: 65,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12358",
      vehicleDetails: {
        make: "Honda",
        model: "Pilot",
        year: 2020,
        licensePlate: "GHI456",
        vin: "VIN0123456789",
      },
      customerDetails: {
        name: "Sophia Clark",
        contactNumber: "+5566778899",
        email: "sophia.clark@example.com",
        address: "654 Cedar St, Oceanview",
      },
      jobPriority: "Medium",
      jobType: "Personal",
      customerIssueDescription: "Strange engine noises",
      insuranceDetails: {
        provider: "GHI Insurance",
        policyNumber: "POL567890",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-25T13:00:00",
      servicesDetails: {
        name: "Engine Noise Diagnosis",
        description: "Diagnose and address engine noise issues",
        cost: {
          amount: 75,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12359",
      vehicleDetails: {
        make: "Ford",
        model: "Escape",
        year: 2018,
        licensePlate: "HIJ789",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Emma Rodriguez",
        contactNumber: "+1234567890",
        email: "emma.rodriguez@example.com",
        address: "789 Oak St, Hillside",
      },
      jobPriority: "Low",
      jobType: "Personal",
      customerIssueDescription: "Battery keeps draining",
      insuranceDetails: {
        provider: "IJK Insurance",
        policyNumber: "POL901234",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-04-30T10:30:00",
      servicesDetails: {
        name: "Battery Inspection",
        description: "Inspect and diagnose battery drain issue",
        cost: {
          amount: 50,
          currency: "USD",
        },
      },
    },
  },
  {
    serviceAppointmentCard: {
      serviceAppointmentID: "APTJC12360",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Equinox",
        year: 2019,
        licensePlate: "KLM901",
        vin: "VIN7890123456",
      },
      customerDetails: {
        name: "Daniel Wright",
        contactNumber: "+9988776655",
        email: "daniel.wright@example.com",
        address: "456 Maple St, Brookside",
      },
      jobPriority: "High",
      jobType: "Personal",
      customerIssueDescription: "Power steering failure",
      insuranceDetails: {
        provider: "LMN Insurance",
        policyNumber: "POL567890",
      },
      technicians: [],
      scheduledAppointmentDateTime: "2024-05-05T09:00:00",
      servicesDetails: {
        name: "Power Steering Repair",
        description: "Diagnose and repair power steering system",
        cost: {
          amount: 120,
          currency: "USD",
        },
      },
    },
  },
];
