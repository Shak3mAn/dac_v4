export const jobs_data = [
  {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-02-29T10:00:00",
        estimatedCompletionTime: "2024-02-29T15:00:00",
        actualCompletionTime: "2024-02-29T14:45:00",
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Brake System Repair",
          description: "Replace Brake Pads",
          quantity: 1,
          status: "Completed",
          authorization: "Authorized",
          cost: {
            amount: 100,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech001",
              name: "Mike Smith",
            },
          ],
        },
        {
          category: "Engine Services",
          id: "SRV1B",
          name: "Oil Change",
          description: "Engine Oil Replacement",
          quantity: 1,
          status: "Pending",
          authorization: "Pending",
          cost: {
            amount: 50,
            currency: "USD",
          },
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
        vat_tax: 20,
        parts: 80,
        labor: 70,
        total: 150,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
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
    },
  },
  {
    jobCard: {
      jobCardID: "JC56789",
      vehicleDetails: {
        make: "Ford",
        model: "Mustang",
        vehicleType: "Sport",
        year: 2015,
        licensePlate: "XYZ456",
        vin: "VIN0987654321",
      },
      customerDetails: {
        name: "Sarah Williams",
        contactNumber: "+9876543210",
        email: "sarah.w@example.com",
        address: "456 Oak St, Suburbia",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Slipping gears, rough shifting",
      insuranceDetails: null,
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
          id: "INL001F",
          name: "Transmission Inspection",
          inspectionList: [
            {
              id: "01F",
              inspectionItem: "Transmission Fluid Level",
            },
            {
              id: "02F",
              inspectionItem: "Transmission Filter",
            },
            {
              id: "03F",
              inspectionItem: "Drive Shaft",
            },
            {
              id: "04F",
              inspectionItem: "CV Joints",
            },
            {
              id: "05F",
              inspectionItem: "Transmission Mounts",
            },
            {
              id: "06F",
              inspectionItem: "Clutch Operation",
            },
            {
              id: "07F",
              inspectionItem: "Transmission Cooler",
            },
          ],
        },
      ],
      currentServiceBay: 5,
      technicians: [
        {
          id: "Tech003",
          name: "Chris Brown",
        },
        {
          id: "Tech004",
          name: "Emily White",
        },
      ],
      partsUsed: [
        {
          name: "Transmission Fluid",
          quantity: 8,
          cost: {
            amount: 80,
            currency: "USD",
          },
        },
        {
          name: "Clutch Kit",
          quantity: 1,
          cost: {
            amount: 120,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-01T11:30:00",
      estimatedCompletionTime: "2024-03-01T17:00:00",
      actualCompletionTime: "2024-03-01T17:00:00",
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-01T11:30:00",
        estimatedCompletionTime: "2024-03-01T17:00:00",
        actualCompletionTime: "2024-03-01T17:00:00",
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Transmission Overhaul",
          description: "Replace Clutch Kit and Transmission Fluid",
          quantity: 1,
          status: "Pending",
          authorization: "Pending",
          cost: {
            amount: 200,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech003",
              name: "Chris Brown",
            },
            {
              id: "Tech004",
              name: "Emily White",
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
      actionTaken:
        "Started transmission overhaul, disassembled and inspected components.",
      actualWorkshopFinding:
        "Worn-out clutch components, transmission fluid contamination.",
      costing: {
        vat_tax: 20,
        parts: 200,
        labor: 100,
        total: 300,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
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
      remarks:
        "Customer notified about extended repair time due to complex transmission issues.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature3", "CustomFeature4"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC98765",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Equinox",
        vehicleType: "SUV",
        year: 2017,
        licensePlate: "PQR789",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Mark Taylor",
        contactNumber: "+1122334455",
        email: "mark.t@example.com",
        address: "789 Elm St, Townsville",
      },
      jobPriority: "High",
      jobType: "Commercial",
      customerIssueDescription:
        "Electrical failures, warning lights on dashboard",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL002C",
          name: "Drive Train Electrical Inspection",
          inspectionList: [
            { id: "01C", inspectionItem: "Battery Voltage" },
            {
              id: "02C",
              inspectionItem: "Alternator Output",
            },
            {
              id: "03C",
              inspectionItem: "Starter Motor",
            },
            {
              id: "04C",
              inspectionItem: "Ignition System",
            },
            {
              id: "05C",
              inspectionItem: "Lights and Indicators",
            },
            {
              id: "06C",
              inspectionItem: "Wiring Inspection",
            },
            {
              id: "07C",
              inspectionItem: "Fuse Checks",
            },
          ],
        },
      ],
      currentServiceBay: 2,
      technicians: [
        {
          id: "Tech005",
          name: "David Wilson",
        },
        {
          id: "Tech006",
          name: "Jennifer Davis",
        },
      ],
      partsUsed: [
        {
          name: "Battery",
          quantity: 1,
          cost: {
            amount: 100,
            currency: "USD",
          },
        },
        {
          name: "Alternator",
          quantity: 1,
          cost: {
            amount: 150,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-02T09:00:00",
      estimatedCompletionTime: "2024-03-02T14:30:00",
      actualCompletionTime: "2024-03-02T14:15:00",
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-02T09:00:00",
        estimatedCompletionTime: "2024-03-02T14:30:00",
        actualCompletionTime: "2024-03-02T14:15:00",
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Electrical System Repair",
          description: "Replace Battery and Alternator",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorized",
          cost: {
            amount: 250,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech005",
              name: "David Wilson",
            },
            {
              id: "Tech006",
              name: "Jennifer Davis",
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
      actionTaken:
        "Replaced faulty battery and alternator, conducted comprehensive electrical system diagnostics.",
      actualWorkshopFinding:
        "Battery failure, alternator not charging properly.",
      costing: {
        vat_tax: 20,
        parts: 250,
        labor: 80,
        total: 330,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
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
      remarks:
        "Commercial vehicle ready for pick-up. Customer satisfied with repairs.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature5", "CustomFeature6"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC13579",
      vehicleDetails: {
        make: "Honda",
        model: "Accord",
        vehicleType: "Hatchback",
        year: 2019,
        licensePlate: "JKL789",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Amanda Miller",
        contactNumber: "+9876543210",
        email: "amanda.m@example.com",
        address: "567 Pine St, Villagetown",
      },
      jobPriority: "Low",
      jobType: "Private",
      customerIssueDescription: "Vehicle pulling to one side, uneven tire wear",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001D",
          name: "Suspension Inspection",
          inspectionList: [
            {
              id: "01D",
              inspectionItem: "Shocks and Struts",
            },
            {
              id: "02D",
              inspectionItem: "Ball Joints",
            },
            {
              id: "03D",
              inspectionItem: "Control Arms",
            },
            {
              id: "04D",
              inspectionItem: "Bushings",
            },
            {
              id: "05D",
              inspectionItem: "Steering Components",
            },
            {
              id: "06D",
              inspectionItem: "Springs",
            },
            {
              id: "07D",
              inspectionItem: "Wheel Alignment",
            },
          ],
        },
      ],
      currentServiceBay: 7,
      technicians: [
        {
          id: "Tech007",
          name: "Brian Harris",
        },
        {
          id: "Tech008",
          name: "Mia Wilson",
        },
      ],
      partsUsed: [
        {
          name: "Wheel Weights",
          quantity: 1,
          cost: {
            amount: 10,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-03T10:30:00",
      estimatedCompletionTime: "2024-03-03T13:00:00",
      actualCompletionTime: "2024-03-03T12:45:00",
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-03T10:30:00",
        estimatedCompletionTime: "2024-03-03T13:00:00",
        actualCompletionTime: "2024-03-03T12:45:00",
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Wheel Alignment and Balancing",
          description: "Adjust Alignment and Balance Wheels",
          quantity: 2,
          status: "Completed",
          authorization: "Authorized",
          cost: {
            amount: 50,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech007",
              name: "Brian Harris",
            },
            {
              id: "Tech008",
              name: "Mia Wilson",
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
      actionTaken:
        "Performed wheel alignment and balancing, adjusted tire pressures.",
      actualWorkshopFinding:
        "Misaligned wheels, unbalanced tires causing uneven wear.",
      costing: {
        vat_tax: 20,
        parts: 10,
        labor: 40,
        total: 50,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
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
      remarks:
        "Customer advised on regular wheel maintenance for prolonged tire life.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature7", "CustomFeature8"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC24680",
      vehicleDetails: {
        make: "Mercedes-Benz",
        model: "C-Class",
        vehicleType: "Sedan",
        year: 2020,
        licensePlate: "MBZ123",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Alex Turner",
        contactNumber: "+1122334455",
        email: "alex.t@example.com",
        address: "890 Maple St, Suburbville",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Check Engine Light, Reduced Power",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL002D",
          name: "Performance Inspection",
          inspectionList: [
            { id: "01D", inspectionItem: "Engine Performance" },
            { id: "02D", inspectionItem: "Exhaust System" },
            { id: "03D", inspectionItem: "Fuel System" },
            { id: "04D", inspectionItem: "Ignition System" },
            { id: "05D", inspectionItem: "Oxygen Sensor" },
            { id: "06D", inspectionItem: "Emission Controls" },
            { id: "07D", inspectionItem: "Diagnostic Trouble Codes (DTCs)" },
          ],
        },
      ],
      currentServiceBay: 1,
      technicians: [
        {
          id: "Tech009",
          name: "Emma Taylor",
        },
        {
          id: "Tech010",
          name: "Matthew Harris",
        },
      ],
      partsUsed: [
        {
          name: "Oxygen Sensor",
          quantity: 1,
          cost: {
            amount: 40,
            currency: "USD",
          },
        },
        {
          name: "Air Filter",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-04T09:15:00",
      estimatedCompletionTime: "2024-03-04T14:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-04T09:15:00",
        estimatedCompletionTime: "2024-03-04T14:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Engine Diagnostics",
          description: "Replace Oxygen Sensor and Air Filter",
          quantity: 1,
          status: "Completed",
          authorization: "Authorized",
          cost: {
            amount: 60,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech009",
              name: "Emma Taylor",
            },
            {
              id: "Tech010",
              name: "Matthew Harris",
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
      actionTaken:
        "Conducted comprehensive engine diagnostics, replaced faulty components.",
      actualWorkshopFinding:
        "Oxygen sensor malfunction, clogged air filter affecting performance.",
      costing: {
        vat_tax: 20,
        parts: 55,
        labor: 65,
        total: 120,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
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
      remarks:
        "Customer informed about recommended scheduled maintenance for optimal performance.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature9", "CustomFeature10"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC36912",
      vehicleDetails: {
        make: "Audi",
        model: "A4",
        vehicleType: "Sedan",
        year: 2016,
        licensePlate: "AUD678",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Olivia Green",
        contactNumber: "+9876543210",
        email: "olivia.g@example.com",
        address: "123 Cedar St, Metropolis",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Overheating, coolant leak",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001H",
          name: "Cooling System Inspection",
          inspectionList: [
            {
              id: "01H",
              inspectionItem: "Radiator Condition",
            },
            {
              id: "02H",
              inspectionItem: "Coolant Level and Condition",
            },
            {
              id: "03H",
              inspectionItem: "Thermostat Operation",
            },
            {
              id: "04H",
              inspectionItem: "Water Pump",
            },
            {
              id: "05H",
              inspectionItem: "Cooling Fans",
            },
            {
              id: "06H",
              inspectionItem: "Hoses and Clamps",
            },
            {
              id: "07H",
              inspectionItem: "Heater Core",
            },
          ],
        },
      ],
      currentServiceBay: 4,
      technicians: [
        {
          id: "Tech011",
          name: "Sophia Davis",
        },
        {
          id: "Tech012",
          name: "Nathan Wilson",
        },
      ],
      partsUsed: [
        {
          name: "Thermostat",
          quantity: 1,
          cost: {
            amount: 25,
            currency: "USD",
          },
        },
        {
          name: "Coolant",
          quantity: 2,
          cost: {
            amount: 30,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-05T10:00:00",
      estimatedCompletionTime: "2024-03-05T14:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-05T10:00:00",
        estimatedCompletionTime: "2024-03-05T14:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Cooling System Repairs",
          description: "Replace Thermostat and Coolant",
          quantity: 1,
          status: "Pending",
          authorization: "Authorized",
          cost: {
            amount: 55,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech011",
              name: "Sophia Davis",
            },
            {
              id: "Tech012",
              name: "Nathan Wilson",
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
      actionTaken:
        "Addressed coolant leak, replaced thermostat and topped up coolant.",
      actualWorkshopFinding:
        "Faulty thermostat causing overheating, minor coolant leak detected.",
      costing: {
        vat_tax: 20,
        parts: 55,
        labor: 70,
        total: 125,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
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
      remarks:
        "Customer advised on regular coolant checks for optimal engine health.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature11", "CustomFeature12"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC11122",
      vehicleDetails: {
        make: "Volkswagen",
        model: "Golf",
        vehicleType: "Compact",
        year: 2017,
        licensePlate: "VWG456",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Daniel Brown",
        contactNumber: "+1122334455",
        email: "daniel.b@example.com",
        address: "456 Birch St, Townsville",
      },
      jobPriority: "High",
      jobType: "Commercial",
      customerIssueDescription: "Excessive bouncing, uneven ride",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001O",
          name: "Suspension(B) Inspection",
          inspectionList: [
            {
              id: "01D",
              inspectionItem: "Shocks and Struts",
            },
            {
              id: "02D",
              inspectionItem: "Ball Joints",
            },
            {
              id: "03D",
              inspectionItem: "Control Arms",
            },
            {
              id: "04D",
              inspectionItem: "Bushings",
            },
            {
              id: "05D",
              inspectionItem: "Steering Components",
            },
            {
              id: "06D",
              inspectionItem: "Springs",
            },
            {
              id: "07D",
              inspectionItem: "Wheel Alignment",
            },
          ],
        },
      ],
      currentServiceBay: 6,
      technicians: [
        {
          id: "Tech013",
          name: "Ella Robinson",
        },
        {
          id: "Tech014",
          name: "Liam Taylor",
        },
      ],
      partsUsed: [
        {
          name: "Strut Assembly",
          quantity: 2,
          cost: {
            amount: 150,
            currency: "USD",
          },
        },
        {
          name: "Control Arm",
          quantity: 2,
          cost: {
            amount: 120,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-06T09:30:00",
      estimatedCompletionTime: "2024-03-06T15:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-06T09:30:00",
        estimatedCompletionTime: "2024-03-06T15:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Suspension System Overhaul",
          description: "Replace Strut Assemblies and Control Arms",
          quantity: 2,
          status: "InProgress",
          authorization: "Authorized",
          cost: {
            amount: 270,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech013",
              name: "Ella Robinson",
            },
            {
              id: "Tech014",
              name: "Liam Taylor",
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
      actionTaken:
        "Initiated suspension system overhaul, removed worn-out components.",
      actualWorkshopFinding:
        "Struts and control arms showing signs of wear, impacting ride quality.",
      costing: {
        vat_tax: 20,
        parts: 270,
        labor: 120,
        total: 390,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
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
      remarks:
        "Commercial vehicle undergoing extensive suspension repairs, customer informed about timeline.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature13", "CustomFeature14"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC131313",
      vehicleDetails: {
        make: "Hyundai",
        model: "Elantra",
        vehicleType: "Sedan",
        year: 2016,
        licensePlate: "HYU987",
        vin: "VIN6543210987",
      },
      customerDetails: {
        name: "Sophie Turner",
        contactNumber: "+9876543210",
        email: "sophie.t@example.com",
        address: "789 Pine St, Cityville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Poor fuel efficiency, rough idling",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001J",
          name: "Fuel System Inspection",
          inspectionList: [
            {
              id: "01J",
              inspectionItem: "Fuel Pump",
            },
            {
              id: "02J",
              inspectionItem: "Fuel Filter",
            },
            {
              id: "03J",
              inspectionItem: "Fuel Injectors",
            },
            {
              id: "04J",
              inspectionItem: "Fuel Lines",
            },
            {
              id: "05J",
              inspectionItem: "Fuel Tank",
            },
            {
              id: "06J",
              inspectionItem: "Fuel Pressure Regulator",
            },
            {
              id: "07J",
              inspectionItem: "Fuel Gauge",
            },
          ],
        },
      ],
      currentServiceBay: 8,
      technicians: [
        {
          id: "Tech015",
          name: "Oliver Johnson",
        },
        {
          id: "Tech016",
          name: "Chloe Davis",
        },
      ],
      partsUsed: [
        {
          name: "Fuel Injector Cleaner",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
        {
          name: "Fuel Filter",
          quantity: 1,
          cost: {
            amount: 20,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-07T10:30:00",
      estimatedCompletionTime: "2024-03-07T13:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-07T10:30:00",
        estimatedCompletionTime: "2024-03-07T13:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Fuel System Cleaning",
          description: "Clean Fuel Injectors and Replace Fuel Filter",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorized",
          cost: {
            amount: 35,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech015",
              name: "Oliver Johnson",
            },
            {
              id: "Tech016",
              name: "Chloe Davis",
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
      actionTaken:
        "Performed fuel system cleaning, replaced fuel filter for optimal performance.",
      actualWorkshopFinding:
        "Clogged fuel injectors and dirty fuel filter affecting engine performance.",
      costing: {
        vat_tax: 20,
        parts: 35,
        labor: 40,
        total: 75,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
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
      remarks:
        "Customer advised on regular fuel system maintenance for better fuel efficiency.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature15", "CustomFeature16"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC151515",
      vehicleDetails: {
        make: "Mazda",
        model: "CX-5",
        vehicleType: "SUV",
        year: 2019,
        licensePlate: "MZX789",
        vin: "VIN4567890123",
      },
      customerDetails: {
        name: "Connor Miller",
        contactNumber: "+1122334455",
        email: "connor.m@example.com",
        address: "456 Cedar St, Suburbia",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Soft brake pedal, reduced braking efficiency",
      insuranceDetails: null,
      inspectionChecklist: [
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
      currentServiceBay: 2,
      technicians: [
        {
          id: "Tech017",
          name: "Ava Wilson",
        },
        {
          id: "Tech018",
          name: "Noah Brown",
        },
      ],
      partsUsed: [
        {
          name: "Brake Fluid",
          quantity: 1,
          cost: {
            amount: 20,
            currency: "USD",
          },
        },
        {
          name: "Brake Caliper Kit",
          quantity: 1,
          cost: {
            amount: 40,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-08T11:00:00",
      estimatedCompletionTime: "2024-03-08T14:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-08T11:00:00",
        estimatedCompletionTime: "2024-03-08T14:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Brake Fluid Flush",
          description: "Replace Brake Fluid and Caliper Kit",
          quantity: 1,
          status: "Pending",
          authorization: "Pending",
          cost: {
            amount: 60,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech017",
              name: "Ava Wilson",
            },
            {
              id: "Tech018",
              name: "Noah Brown",
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
      actionTaken:
        "Performed brake fluid flush, replaced brake caliper kit for improved braking performance.",
      actualWorkshopFinding:
        "Brake fluid contaminated, worn-out caliper components affecting brake response.",
      costing: {
        vat_tax: 20,
        parts: 60,
        labor: 50,
        total: 110,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
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
      remarks:
        "Customer informed about recommended brake system checks at regular intervals.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature17", "CustomFeature18"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC171717",
      vehicleDetails: {
        make: "Toyota",
        model: "RAV4",
        vehicleType: "SUV",
        year: 2017,
        licensePlate: "TOY456",
        vin: "VIN7890123456",
      },
      customerDetails: {
        name: "Emma Harris",
        contactNumber: "+9876543210",
        email: "emma.h@example.com",
        address: "789 Birch St, Villagetown",
      },
      jobPriority: "Medium",
      jobType: "Commercial",
      customerIssueDescription: "Loud exhaust noise, visible smoke",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001E",
          name: "Exhaust System Inspection",
          inspectionList: [
            {
              id: "01E",
              inspectionItem: "Exhaust Manifold",
            },
            {
              id: "02E",
              inspectionItem: "Muffler",
            },
            {
              id: "03E",
              inspectionItem: "Catalytic Converter",
            },
            {
              id: "04E",
              inspectionItem: "Oxygen Sensors",
            },
            {
              id: "05E",
              inspectionItem: "Exhaust Pipes",
            },
            {
              id: "06E",
              inspectionItem: "Heat Shields",
            },
            {
              id: "07E",
              inspectionItem: "Hangers and Clamps",
            },
          ],
        },
      ],
      currentServiceBay: 6,
      technicians: [
        {
          id: "Tech019",
          name: "Liam Davis",
        },
        {
          id: "Tech020",
          name: "Mia Wilson",
        },
      ],
      partsUsed: [
        {
          name: "Exhaust Pipe",
          quantity: 1,
          cost: {
            amount: 30,
            currency: "USD",
          },
        },
        {
          name: "Catalytic Converter",
          quantity: 1,
          cost: {
            amount: 120,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-09T09:30:00",
      estimatedCompletionTime: "2024-03-09T13:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-09T09:30:00",
        estimatedCompletionTime: "2024-03-09T13:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Exhaust System Repair",
          description: "Replace Exhaust Pipe and Catalytic Converter",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 150,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech019",
              name: "Liam Davis",
            },
            {
              id: "Tech020",
              name: "Mia Wilson",
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
      actionTaken:
        "Initiated exhaust system repair, replaced damaged components for noise reduction.",
      actualWorkshopFinding:
        "Cracked exhaust pipe, malfunctioning catalytic converter causing excessive noise and smoke.",
      costing: {
        vat_tax: 20,
        parts: 150,
        labor: 60,
        total: 210,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
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
      remarks:
        "Commercial vehicle ready for pick-up. Customer satisfied with repairs.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature19", "CustomFeature20"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC191919",
      vehicleDetails: {
        make: "Nissan",
        model: "Altima",
        vehicleType: "Sedan",
        year: 2015,
        licensePlate: "NSN123",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "James White",
        contactNumber: "+1122334455",
        email: "james.w@example.com",
        address: "890 Cedar St, Suburbville",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Transmission slipping, delayed shifting",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001F",
          name: "Transmission Inspection",
          inspectionList: [
            {
              id: "01F",
              inspectionItem: "Transmission Fluid Level",
            },
            {
              id: "02F",
              inspectionItem: "Transmission Filter",
            },
            {
              id: "03F",
              inspectionItem: "Drive Shaft",
            },
            {
              id: "04F",
              inspectionItem: "CV Joints",
            },
            {
              id: "05F",
              inspectionItem: "Transmission Mounts",
            },
            {
              id: "06F",
              inspectionItem: "Clutch Operation",
            },
            {
              id: "07F",
              inspectionItem: "Transmission Cooler",
            },
          ],
        },
      ],
      currentServiceBay: 3,
      technicians: [
        {
          id: "Tech021",
          name: "Emma Robinson",
        },
        {
          id: "Tech022",
          name: "Ethan Taylor",
        },
      ],
      partsUsed: [
        {
          name: "Transmission Fluid",
          quantity: 5,
          cost: {
            amount: 50,
            currency: "USD",
          },
        },
        {
          name: "Transmission Filter",
          quantity: 1,
          cost: {
            amount: 25,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-10T10:00:00",
      estimatedCompletionTime: "2024-03-10T14:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-10T10:00:00",
        estimatedCompletionTime: "2024-03-10T14:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Transmission Fluid Change",
          description: "Replace Transmission Fluid and Filter",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 75,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech021",
              name: "Emma Robinson",
            },
            {
              id: "Tech022",
              name: "Ethan Taylor",
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
      actionTaken:
        "Initiated transmission fluid change, replaced filter for improved shifting.",
      actualWorkshopFinding:
        "Low transmission fluid, dirty filter affecting gear engagement.",
      costing: {
        vat_tax: 20,
        parts: 75,
        labor: 55,
        total: 130,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
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
      remarks:
        "Customer informed about the importance of regular transmission maintenance.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature21", "CustomFeature22"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC212121",
      vehicleDetails: {
        make: "Subaru",
        model: "Outback",
        vehicleType: "Station Wagon",
        year: 2018,
        licensePlate: "SBR456",
        vin: "VIN9012345678",
      },
      customerDetails: {
        name: "Sophia Wilson",
        contactNumber: "+9876543210",
        email: "sophia.w@example.com",
        address: "123 Oak St, Cityville",
      },
      jobPriority: "Low",
      jobType: "Private",
      customerIssueDescription: "Difficulty steering, whining noise",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001R",
          name: "Steering and Suspension Inspection",
          inspectionList: [
            {
              id: "01R",
              inspectionItem: "Steering Wheel Play",
            },
            {
              id: "02R",
              inspectionItem: "Power Steering Fluid",
            },
            {
              id: "03R",
              inspectionItem: "Steering Rack",
            },
            {
              id: "04R",
              inspectionItem: "Tie Rod Ends",
            },
            {
              id: "05R",
              inspectionItem: "Control Arms",
            },
            {
              id: "06R",
              inspectionItem: "Ball Joints",
            },
            {
              id: "07R",
              inspectionItem: "Bushings",
            },
          ],
        },
      ],
      currentServiceBay: 7,
      technicians: [
        {
          id: "Tech023",
          name: "Lily Davis",
        },
        {
          id: "Tech024",
          name: "Mason Brown",
        },
      ],
      partsUsed: [
        {
          name: "Power Steering Pump",
          quantity: 1,
          cost: {
            amount: 80,
            currency: "USD",
          },
        },
        {
          name: "Power Steering Fluid",
          quantity: 2,
          cost: {
            amount: 30,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-11T11:30:00",
      estimatedCompletionTime: "2024-03-11T15:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-11T11:30:00",
        estimatedCompletionTime: "2024-03-11T15:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Power Steering Pump Replacement",
          description: "Replace Power Steering Pump and Fluid",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 110,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech023",
              name: "Lily Davis",
            },
            {
              id: "Tech024",
              name: "Mason Brown",
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
      actionTaken:
        "Initiated power steering pump replacement, flushed and replaced fluid for smoother steering.",
      actualWorkshopFinding:
        "Faulty power steering pump causing difficulty in steering, low fluid level.",
      costing: {
        vat_tax: 20,
        parts: 110,
        labor: 50,
        total: 160,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
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
      remarks:
        "Customer informed about regular power steering system checks for optimal performance.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature23", "CustomFeature24"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC232323",
      vehicleDetails: {
        make: "Honda",
        model: "Civic",
        vehicleType: "Sedan",
        year: 2020,
        licensePlate: "HON567",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Ethan Wilson",
        contactNumber: "+1122334455",
        email: "ethan.w@example.com",
        address: "456 Maple St, Suburbia",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Weak air conditioning, strange odor",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001L",
          name: "AC System Inspection",
          inspectionList: [
            {
              id: "01L",
              inspectionItem: "Compressor",
            },
            {
              id: "02L",
              inspectionItem: "Condenser",
            },
            {
              id: "03L",
              inspectionItem: "Evaporator",
            },
            {
              id: "04L",
              inspectionItem: "Refrigerant Level",
            },
            {
              id: "05L",
              inspectionItem: "AC Hoses",
            },
            {
              id: "06L",
              inspectionItem: "AC Belts",
            },
            {
              id: "07L",
              inspectionItem: "AC Clutch",
            },
          ],
        },
      ],
      currentServiceBay: 5,
      technicians: [
        {
          id: "Tech025",
          name: "Ella Wilson",
        },
        {
          id: "Tech026",
          name: "Noah Harris",
        },
      ],
      partsUsed: [
        {
          name: "A/C Refrigerant",
          quantity: 1,
          cost: {
            amount: 40,
            currency: "USD",
          },
        },
        {
          name: "Cabin Air Filter",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-12T09:45:00",
      estimatedCompletionTime: "2024-03-12T13:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-12T09:45:00",
        estimatedCompletionTime: "2024-03-12T13:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Air Conditioning Service",
          description: "Recharge A/C Refrigerant and Replace Cabin Air Filter",
          quantity: 1,
          status: "Pending",
          authorization: "Pending",
          cost: {
            amount: 55,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech025",
              name: "Ella Wilson",
            },
            {
              id: "Tech026",
              name: "Noah Harris",
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
      actionTaken:
        "Performed air conditioning service, recharged refrigerant and replaced cabin air filter.",
      actualWorkshopFinding:
        "Low refrigerant level, dirty cabin air filter impacting A/C performance.",
      costing: {
        vat_tax: 20,
        parts: 55,
        labor: 45,
        total: 100,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
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
      remarks:
        "Customer advised on regular A/C maintenance for optimal cooling.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature25", "CustomFeature26"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC232323",
      vehicleDetails: {
        make: "Honda",
        model: "Civic",
        vehicleType: "Sedan",
        year: 2020,
        licensePlate: "HON567",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Ethan Wilson",
        contactNumber: "+1122334455",
        email: "ethan.w@example.com",
        address: "456 Maple St, Suburbia",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Weak air conditioning, strange odor",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001L",
          name: "AC System Inspection",
          inspectionList: [
            {
              id: "01L",
              inspectionItem: "Compressor",
            },
            {
              id: "02L",
              inspectionItem: "Condenser",
            },
            {
              id: "03L",
              inspectionItem: "Evaporator",
            },
            {
              id: "04L",
              inspectionItem: "Refrigerant Level",
            },
            {
              id: "05L",
              inspectionItem: "AC Hoses",
            },
            {
              id: "06L",
              inspectionItem: "AC Belts",
            },
            {
              id: "07L",
              inspectionItem: "AC Clutch",
            },
          ],
        },
      ],
      currentServiceBay: 5,
      technicians: [
        {
          id: "Tech025",
          name: "Ella Wilson",
        },
        {
          id: "Tech026",
          name: "Noah Harris",
        },
      ],
      partsUsed: [
        {
          name: "A/C Refrigerant",
          quantity: 1,
          cost: {
            amount: 40,
            currency: "USD",
          },
        },
        {
          name: "Cabin Air Filter",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-12T09:45:00",
      estimatedCompletionTime: "2024-03-12T13:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-12T09:45:00",
        estimatedCompletionTime: "2024-03-12T13:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Air Conditioning Service",
          description: "Recharge A/C Refrigerant and Replace Cabin Air Filter",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 55,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech025",
              name: "Ella Wilson",
            },
            {
              id: "Tech026",
              name: "Noah Harris",
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
      actionTaken:
        "Performed air conditioning service, recharged refrigerant and replaced cabin air filter.",
      actualWorkshopFinding:
        "Low refrigerant level, dirty cabin air filter impacting A/C performance.",
      costing: {
        vat_tax: 20,
        parts: 55,
        labor: 45,
        total: 100,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
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
      remarks:
        "Customer advised on regular A/C maintenance for optimal cooling.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature25", "CustomFeature26"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC252525",
      vehicleDetails: {
        make: "Ford",
        model: "Fusion",
        vehicleType: "Hatchback",
        year: 2015,
        licensePlate: "FRD901",
        vin: "VIN6789012345",
      },
      customerDetails: {
        name: "Mia Turner",
        contactNumber: "+9876543210",
        email: "mia.t@example.com",
        address: "789 Pine St, Cityville",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Electrical failures, multiple warning lights",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001G",
          name: "Electrical Inspection",
          inspectionList: [
            {
              id: "01G",
              inspectionItem: "Battery Condition",
            },
            {
              id: "02G",
              inspectionItem: "Alternator Output",
            },
            {
              id: "03G",
              inspectionItem: "Starter Motor",
            },
            {
              id: "04G",
              inspectionItem: "Fuses and Relays",
            },
            {
              id: "05G",
              inspectionItem: "Wiring and Connections",
            },
            {
              id: "06G",
              inspectionItem: "Lighting System",
            },
            {
              id: "07G",
              inspectionItem: "Instrument Panel",
            },
          ],
        },
      ],
      currentServiceBay: 1,
      technicians: [
        {
          id: "Tech027",
          name: "Liam Wilson",
        },
        {
          id: "Tech028",
          name: "Chloe Taylor",
        },
      ],
      partsUsed: [
        {
          name: "Battery",
          quantity: 1,
          cost: {
            amount: 70,
            currency: "USD",
          },
        },
        {
          name: "Alternator",
          quantity: 1,
          cost: {
            amount: 120,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-13T10:15:00",
      estimatedCompletionTime: "2024-03-13T14:45:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-13T10:15:00",
        estimatedCompletionTime: "2024-03-13T14:45:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Electrical System Diagnostics",
          description: "Replace Battery and Alternator",
          quantity: 1,
          status: "Pending",
          authorization: "Authorize",
          cost: {
            amount: 190,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech027",
              name: "Liam Wilson",
            },
            {
              id: "Tech028",
              name: "Chloe Taylor",
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
      actionTaken:
        "Conducted electrical diagnostics, replaced faulty battery and alternator.",
      actualWorkshopFinding:
        "Dead battery, malfunctioning alternator causing electrical failures.",
      costing: {
        vat_tax: 20,
        parts: 190,
        labor: 60,
        total: 250,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
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
      remarks:
        "Customer informed about periodic electrical system checks for reliable performance.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature27", "CustomFeature28"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC272727",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Malibu",
        vehicleType: "Sedan",
        year: 2022,
        licensePlate: "CHV345",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Ella Robinson",
        contactNumber: "+1122334455",
        email: "ella.r@example.com",
        address: "456 Birch St, Townsville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Vehicle pulling to one side, uneven tire wear",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001O",
          name: "Suspension(B) Inspection",
          inspectionList: [
            {
              id: "01D",
              inspectionItem: "Shocks and Struts",
            },
            {
              id: "02D",
              inspectionItem: "Ball Joints",
            },
            {
              id: "03D",
              inspectionItem: "Control Arms",
            },
            {
              id: "04D",
              inspectionItem: "Bushings",
            },
            {
              id: "05D",
              inspectionItem: "Steering Components",
            },
            {
              id: "06D",
              inspectionItem: "Springs",
            },
            {
              id: "07D",
              inspectionItem: "Wheel Alignment",
            },
          ],
        },
      ],
      currentServiceBay: 4,
      technicians: [
        {
          id: "Tech029",
          name: "Noah Davis",
        },
        {
          id: "Tech030",
          name: "Mia Taylor",
        },
      ],
      partsUsed: [
        {
          name: "Wheel Weights",
          quantity: 1,
          cost: {
            amount: 10,
            currency: "USD",
          },
        },
        {
          name: "Alignment Adjustment Kit",
          quantity: 1,
          cost: {
            amount: 30,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-14T09:00:00",
      estimatedCompletionTime: "2024-03-14T12:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-14T09:00:00",
        estimatedCompletionTime: "2024-03-14T12:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Wheel Alignment and Balancing",
          description: "Adjust Wheel Alignment and Balance Tires",
          quantity: 2,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 40,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech029",
              name: "Noah Davis",
            },
            {
              id: "Tech030",
              name: "Mia Taylor",
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
      actionTaken:
        "Conducted wheel alignment and balancing, adjusted components for optimal tire performance.",
      actualWorkshopFinding:
        "Misaligned wheels, uneven tire wear due to imbalanced tires.",
      costing: {
        vat_tax: 20,
        parts: 40,
        labor: 35,
        total: 75,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
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
      remarks:
        "Customer informed about regular wheel maintenance for extended tire life.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature29", "CustomFeature30"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC282828",
      vehicleDetails: {
        make: "BMW",
        model: "3 Series",
        year: 2019,
        licensePlate: "BMW987",
        vin: "VIN8901234567",
      },
      customerDetails: {
        name: "Olivia Turner",
        contactNumber: "+9876543210",
        email: "olivia.t@example.com",
        address: "789 Oak St, Suburbville",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Check Engine Light On, Poor Fuel Economy",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001B",
          name: "Engine Inspection",
          inspectionList: [
            {
              id: "01B",
              inspectionItem: "Oil Level and Condition",
            },
            {
              id: "02B",
              inspectionItem: "Cooling System",
            },
            {
              id: "03B",
              inspectionItem: "Air Filter",
            },
            {
              id: "04B",
              inspectionItem: "Fuel System",
            },
            {
              id: "05B",
              inspectionItem: "Spark Plugs",
            },
            {
              id: "06B",
              inspectionItem: "Belts and Hoses",
            },
            {
              id: "07B",
              inspectionItem: "Emissions",
            },
          ],
        },
      ],
      currentServiceBay: 2,
      technicians: [
        {
          id: "Tech031",
          name: "Ethan Davis",
        },
        {
          id: "Tech032",
          name: "Lily Taylor",
        },
      ],
      partsUsed: [
        {
          name: "Spark Plugs",
          quantity: 4,
          cost: {
            amount: 40,
            currency: "USD",
          },
        },
        {
          name: "Air Filter",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-15T10:45:00",
      estimatedCompletionTime: "2024-03-15T14:15:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-15T10:45:00",
        estimatedCompletionTime: "2024-03-15T14:15:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Engine Diagnostics and Tune-Up",
          description: "Replace Spark Plugs and Air Filter, Perform ECM Scan",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 55,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech031",
              name: "Ethan Davis",
            },
            {
              id: "Tech032",
              name: "Lily Taylor",
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
      actionTaken:
        "Conducted engine diagnostics, replaced spark plugs and air filter, tuned-up engine for optimal performance.",
      actualWorkshopFinding:
        "Faulty spark plugs, dirty air filter impacting engine efficiency.",
      costing: {
        vat_tax: 20,
        parts: 55,
        labor: 50,
        total: 105,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
      remarks:
        "Customer advised on regular engine tune-ups for fuel efficiency.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature31", "CustomFeature32"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC303030",
      vehicleDetails: {
        make: "Mercedes-Benz",
        model: "C-Class",
        vehicleType: "Sedan",
        year: 2017,
        licensePlate: "MBZ456",
        vin: "VIN9012345678",
      },
      customerDetails: {
        name: "Mason Robinson",
        contactNumber: "+1122334455",
        email: "mason.r@example.com",
        address: "123 Pine St, Cityville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Engine Overheating, Coolant Leak",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001H",
          name: "Cooling System Inspection",
          inspectionList: [
            {
              id: "01H",
              inspectionItem: "Radiator Condition",
            },
            {
              id: "02H",
              inspectionItem: "Coolant Level and Condition",
            },
            {
              id: "03H",
              inspectionItem: "Thermostat Operation",
            },
            {
              id: "04H",
              inspectionItem: "Water Pump",
            },
            {
              id: "05H",
              inspectionItem: "Cooling Fans",
            },
            {
              id: "06H",
              inspectionItem: "Hoses and Clamps",
            },
            {
              id: "07H",
              inspectionItem: "Heater Core",
            },
          ],
        },
      ],
      currentServiceBay: 7,
      technicians: [
        {
          id: "Tech033",
          name: "Chloe Davis",
        },
        {
          id: "Tech034",
          name: "Mia Taylor",
        },
      ],
      partsUsed: [
        {
          name: "Radiator",
          quantity: 1,
          cost: {
            amount: 80,
            currency: "USD",
          },
        },
        {
          name: "Water Pump",
          quantity: 1,
          cost: {
            amount: 60,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-16T11:15:00",
      estimatedCompletionTime: "2024-03-16T15:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-16T11:15:00",
        estimatedCompletionTime: "2024-03-16T15:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Cooling System Overhaul",
          description: "Replace Radiator and Water Pump, Perform Pressure Test",
          quantity: 1,
          status: "Pending",
          authorization: "Authorize",
          cost: {
            amount: 140,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech033",
              name: "Chloe Davis",
            },
            {
              id: "Tech034",
              name: "Mia Taylor",
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
      actionTaken:
        "Initiated cooling system overhaul, replaced radiator and water pump, performed pressure test for leaks.",
      actualWorkshopFinding:
        "Leaking radiator, malfunctioning water pump causing coolant loss and engine overheating.",
      costing: {
        vat_tax: 20,
        parts: 140,
        labor: 70,
        total: 210,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer informed about regular coolant system checks for engine health.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature33", "CustomFeature34"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC323232",
      vehicleDetails: {
        make: "Ford",
        model: "Escape",
        vehicleType: "SUV",
        year: 2016,
        licensePlate: "FRD789",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Chloe Harris",
        contactNumber: "+9876543210",
        email: "chloe.h@example.com",
        address: "789 Cedar St, Suburbia",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Spongy Brake Pedal, Brake Fluid Leak",
      insuranceDetails: null,
      inspectionChecklist: [
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
          id: "Tech035",
          name: "Noah Robinson",
        },
        {
          id: "Tech036",
          name: "Emma Turner",
        },
      ],
      partsUsed: [
        {
          name: "Brake Caliper",
          quantity: 2,
          cost: {
            amount: 100,
            currency: "USD",
          },
        },
        {
          name: "Brake Fluid",
          quantity: 1,
          cost: {
            amount: 20,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-17T10:30:00",
      estimatedCompletionTime: "2024-03-17T14:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-17T10:30:00",
        estimatedCompletionTime: "2024-03-17T14:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Brake Caliper Replacement",
          description: "Replace Faulty Brake Calipers and Brake Fluid",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 120,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech035",
              name: "Noah Robinson",
            },
            {
              id: "Tech036",
              name: "Emma Turner",
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
      actionTaken:
        "Initiated brake caliper replacement, bled brake system for optimal performance.",
      actualWorkshopFinding:
        "Leaking brake calipers, low brake fluid causing spongy pedal.",
      costing: {
        vat_tax: 20,
        parts: 120,
        labor: 60,
        total: 180,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
      remarks: "Customer advised on regular brake system checks for safety.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature35", "CustomFeature36"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC343434",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Equinox",
        vehicleType: "SUV",
        year: 2020,
        licensePlate: "CHV678",
        vin: "VIN1234567890",
      },
      customerDetails: {
        name: "Noah Wilson",
        contactNumber: "+1122334455",
        email: "noah.w@example.com",
        address: "456 Cedar St, Townsville",
      },
      jobPriority: "Medium",
      jobType: "Commercial",
      customerIssueDescription: "Excessive Bouncing, Uneven Ride",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001O",
          name: "Suspension(B) Inspection",
          inspectionList: [
            {
              id: "01D",
              inspectionItem: "Shocks and Struts",
            },
            {
              id: "02D",
              inspectionItem: "Ball Joints",
            },
            {
              id: "03D",
              inspectionItem: "Control Arms",
            },
            {
              id: "04D",
              inspectionItem: "Bushings",
            },
            {
              id: "05D",
              inspectionItem: "Steering Components",
            },
            {
              id: "06D",
              inspectionItem: "Springs",
            },
            {
              id: "07D",
              inspectionItem: "Wheel Alignment",
            },
          ],
        },
      ],
      currentServiceBay: 5,
      technicians: [
        {
          id: "Tech037",
          name: "Ella Robinson",
        },
        {
          id: "Tech038",
          name: "Liam Turner",
        },
      ],
      partsUsed: [
        {
          name: "Struts",
          quantity: 2,
          cost: {
            amount: 80,
            currency: "USD",
          },
        },
        {
          name: "Control Arms",
          quantity: 2,
          cost: {
            amount: 60,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-18T09:15:00",
      estimatedCompletionTime: "2024-03-18T12:45:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-18T09:15:00",
        estimatedCompletionTime: "2024-03-18T12:45:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Suspension System Check",
          description:
            "Replace Struts and Control Arms, Perform Alignment Check",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 100,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech037",
              name: "Ella Robinson",
            },
            {
              id: "Tech038",
              name: "Liam Turner",
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
      actionTaken:
        "Conducted suspension system check, replaced struts and control arms for improved ride quality.",
      actualWorkshopFinding:
        "Worn-out struts, damaged control arms affecting suspension performance.",
      costing: {
        vat_tax: 20,
        parts: 100,
        labor: 45,
        total: 145,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
      remarks:
        "Commercial vehicle ready for alignment check. Customer advised on periodic suspension inspections.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature37", "CustomFeature38"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC363636",
      vehicleDetails: {
        make: "Toyota",
        model: "Highlander",
        vehicleType: "SUV",
        year: 2016,
        licensePlate: "TOY123",
        vin: "VIN2345678901",
      },
      customerDetails: {
        name: "Lily Turner",
        contactNumber: "+9876543210",
        email: "lily.t@example.com",
        address: "789 Maple St, Cityville",
      },
      jobPriority: "Low",
      jobType: "Private",
      customerIssueDescription: "Rough Idling, Reduced Fuel Efficiency",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001J",
          name: "Fuel System Inspection",
          inspectionList: [
            {
              id: "01J",
              inspectionItem: "Fuel Pump",
            },
            {
              id: "02J",
              inspectionItem: "Fuel Filter",
            },
            {
              id: "03J",
              inspectionItem: "Fuel Injectors",
            },
            {
              id: "04J",
              inspectionItem: "Fuel Lines",
            },
            {
              id: "05J",
              inspectionItem: "Fuel Tank",
            },
            {
              id: "06J",
              inspectionItem: "Fuel Pressure Regulator",
            },
            {
              id: "07J",
              inspectionItem: "Fuel Gauge",
            },
          ],
        },
      ],
      currentServiceBay: 1,
      technicians: [
        {
          id: "Tech039",
          name: "Mia Davis",
        },
        {
          id: "Tech040",
          name: "Noah Robinson",
        },
      ],
      partsUsed: [
        {
          name: "Fuel Injector Cleaner",
          quantity: 1,
          cost: {
            amount: 20,
            currency: "USD",
          },
        },
        {
          name: "Air Filter",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-19T10:30:00",
      estimatedCompletionTime: "2024-03-19T13:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-19T10:30:00",
        estimatedCompletionTime: "2024-03-19T13:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Fuel System Cleaning",
          description:
            "Clean Fuel Injector and Replace Air Filter, Perform ECM Scan",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 35,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech039",
              name: "Mia Davis",
            },
            {
              id: "Tech040",
              name: "Noah Robinson",
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
      actionTaken:
        "Initiated fuel system cleaning, cleaned fuel injector, replaced air filter for improved engine performance.",
      actualWorkshopFinding:
        "Clogged fuel injector, dirty air filter affecting fuel delivery and combustion.",
      costing: {
        vat_tax: 20,
        parts: 35,
        labor: 40,
        total: 75,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer informed about regular fuel system maintenance for optimal fuel efficiency.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature39", "CustomFeature40"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC383838",
      vehicleDetails: {
        make: "Honda",
        model: "Pilot",
        vehicleType: "SUV",
        year: 2019,
        licensePlate: "HON456",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Emma Harris",
        contactNumber: "+1122334455",
        email: "emma.h@example.com",
        address: "456 Oak St, Suburbville",
      },
      jobPriority: "Medium",
      jobType: "Commercial",
      customerIssueDescription: "Slipping Gears, Transmission Fluid Leak",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001F",
          name: "Transmission Inspection",
          inspectionList: [
            {
              id: "01F",
              inspectionItem: "Transmission Fluid Level",
            },
            {
              id: "02F",
              inspectionItem: "Transmission Filter",
            },
            {
              id: "03F",
              inspectionItem: "Drive Shaft",
            },
            {
              id: "04F",
              inspectionItem: "CV Joints",
            },
            {
              id: "05F",
              inspectionItem: "Transmission Mounts",
            },
            {
              id: "06F",
              inspectionItem: "Clutch Operation",
            },
            {
              id: "07F",
              inspectionItem: "Transmission Cooler",
            },
          ],
        },
      ],
      currentServiceBay: 4,
      technicians: [
        {
          id: "Tech041",
          name: "Liam Robinson",
        },
        {
          id: "Tech042",
          name: "Ella Turner",
        },
      ],
      partsUsed: [
        {
          name: "Transmission Fluid",
          quantity: 5,
          cost: {
            amount: 50,
            currency: "USD",
          },
        },
        {
          name: "Transmission Filter",
          quantity: 1,
          cost: {
            amount: 25,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-20T09:45:00",
      estimatedCompletionTime: "2024-03-20T13:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-20T09:45:00",
        estimatedCompletionTime: "2024-03-20T13:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Transmission Fluid Flush",
          description:
            "Flush Transmission Fluid, Replace Filter, Perform TCM Scan",
          quantity: 1,
          status: "Pending",
          authorization: "Pending",
          cost: {
            amount: 75,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech041",
              name: "Liam Robinson",
            },
            {
              id: "Tech042",
              name: "Ella Turner",
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
      actionTaken:
        "Initiated transmission fluid flush, replaced filter, conducted TCM scan for smooth gear shifting.",
      actualWorkshopFinding:
        "Low transmission fluid, leaking filter causing slipping gears.",
      costing: {
        vat_tax: 20,
        parts: 75,
        labor: 55,
        total: 130,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
      remarks:
        "Commercial vehicle ready for road test. Customer advised on periodic transmission fluid checks for durability.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature41", "CustomFeature42"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC404040",
      vehicleDetails: {
        make: "Nissan",
        model: "Rogue",
        vehicleType: "SUV",
        year: 2018,
        licensePlate: "NSN789",
        vin: "VIN9012345678",
      },
      customerDetails: {
        name: "Chloe Robinson",
        contactNumber: "+1122334455",
        email: "chloe.r@example.com",
        address: "123 Birch St, Townsville",
      },
      jobPriority: "Low",
      jobType: "Private",
      customerIssueDescription: "Loud Exhaust Noise, Visible Exhaust Leak",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001E",
          name: "Exhaust System Inspection",
          inspectionList: [
            {
              id: "01E",
              inspectionItem: "Exhaust Manifold",
            },
            {
              id: "02E",
              inspectionItem: "Muffler",
            },
            {
              id: "03E",
              inspectionItem: "Catalytic Converter",
            },
            {
              id: "04E",
              inspectionItem: "Oxygen Sensors",
            },
            {
              id: "05E",
              inspectionItem: "Exhaust Pipes",
            },
            {
              id: "06E",
              inspectionItem: "Heat Shields",
            },
            {
              id: "07E",
              inspectionItem: "Hangers and Clamps",
            },
          ],
        },
      ],
      currentServiceBay: 6,
      technicians: [
        {
          id: "Tech043",
          name: "Mia Harris",
        },
        {
          id: "Tech044",
          name: "Noah Turner",
        },
      ],
      partsUsed: [
        {
          name: "Exhaust Pipe",
          quantity: 1,
          cost: {
            amount: 40,
            currency: "USD",
          },
        },
        {
          name: "Muffler",
          quantity: 1,
          cost: {
            amount: 60,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-21T11:00:00",
      estimatedCompletionTime: "2024-03-21T14:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-21T11:00:00",
        estimatedCompletionTime: "2024-03-21T14:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Exhaust System Repairs",
          description:
            "Replace Exhaust Pipe and Muffler, Perform Emissions Test",
          quantity: 1,
          status: "Pending",
          authorization: "Authorize",
          cost: {
            amount: 100,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech043",
              name: "Mia Harris",
            },
            {
              id: "Tech044",
              name: "Noah Turner",
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
      actionTaken:
        "Initiated exhaust system repairs, replaced damaged pipe and muffler, conducted emissions test for compliance.",
      actualWorkshopFinding:
        "Corroded exhaust pipe, damaged muffler causing excessive noise and emissions.",
      costing: {
        vat_tax: 20,
        parts: 100,
        labor: 45,
        total: 145,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer informed about regular exhaust system checks for vehicle performance and environmental impact.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature43", "CustomFeature44"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC424242",
      vehicleDetails: {
        make: "Ford",
        model: "Explorer",
        vehicleType: "SUV",
        year: 2017,
        licensePlate: "FRD567",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Noah Harris",
        contactNumber: "+9876543210",
        email: "noah.h@example.com",
        address: "789 Pine St, Cityville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription:
        "Inoperative Windshield Wipers, Streaking on Windshield",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001P",
          name: "Windshield Wiper Inspection",
          inspectionList: [
            {
              id: "01P",
              inspectionItem: "Wiper Blades",
            },
            {
              id: "02P",
              inspectionItem: "Wiper Motor",
            },
            {
              id: "03P",
              inspectionItem: "Wiper Arms",
            },
            {
              id: "04P",
              inspectionItem: "Washer Fluid Level",
            },
            {
              id: "05P",
              inspectionItem: "Washer Spray Nozzles",
            },
            {
              id: "06P",
              inspectionItem: "Rear Wiper (if applicable)",
            },
            {
              id: "07P",
              inspectionItem: "Wiper Control Switch",
            },
          ],
        },
      ],
      currentServiceBay: 2,
      technicians: [
        {
          id: "Tech045",
          name: "Ella Davis",
        },
        {
          id: "Tech046",
          name: "Liam Robinson",
        },
      ],
      partsUsed: [
        {
          name: "Wiper Blades",
          quantity: 2,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
        {
          name: "Windshield Washer Pump",
          quantity: 1,
          cost: {
            amount: 25,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-22T10:15:00",
      estimatedCompletionTime: "2024-03-22T13:45:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-22T10:15:00",
        estimatedCompletionTime: "2024-03-22T13:45:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Windshield Wiper System Repair",
          description: "Replace Wiper Blades and Washer Pump, Test Wiper Motor",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 40,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech045",
              name: "Ella Davis",
            },
            {
              id: "Tech046",
              name: "Liam Robinson",
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
      actionTaken:
        "Initiated windshield wiper system repair, replaced blades and washer pump, tested motor for optimal functionality.",
      actualWorkshopFinding:
        "Worn-out wiper blades, faulty washer pump causing streaks on the windshield.",
      costing: {
        vat_tax: 20,
        parts: 40,
        labor: 35,
        total: 75,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
      remarks:
        "Customer advised on regular wiper system checks for clear visibility during adverse weather conditions.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature45", "CustomFeature46"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC444444",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Silverado",
        vehicleType: "Pickup",
        year: 2020,
        licensePlate: "CHV123",
        vin: "VIN2345678901",
      },
      customerDetails: {
        name: "Liam Wilson",
        contactNumber: "+1122334455",
        email: "liam.w@example.com",
        address: "456 Maple St, Townsville",
      },
      jobPriority: "High",
      jobType: "Commercial",
      customerIssueDescription: "Electrical Failures, Warning Lights On",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001G",
          name: "Electrical Inspection",
          inspectionList: [
            {
              id: "01G",
              inspectionItem: "Battery Condition",
            },
            {
              id: "02G",
              inspectionItem: "Alternator Output",
            },
            {
              id: "03G",
              inspectionItem: "Starter Motor",
            },
            {
              id: "04G",
              inspectionItem: "Fuses and Relays",
            },
            {
              id: "05G",
              inspectionItem: "Wiring and Connections",
            },
            {
              id: "06G",
              inspectionItem: "Lighting System",
            },
            {
              id: "07G",
              inspectionItem: "Instrument Panel",
            },
          ],
        },
      ],
      currentServiceBay: 1,
      technicians: [
        {
          id: "Tech047",
          name: "Mia Harris",
        },
        {
          id: "Tech048",
          name: "Noah Turner",
        },
      ],
      partsUsed: [
        {
          name: "Battery",
          quantity: 1,
          cost: {
            amount: 70,
            currency: "USD",
          },
        },
        {
          name: "Alternator",
          quantity: 1,
          cost: {
            amount: 120,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-23T09:30:00",
      estimatedCompletionTime: "2024-03-23T13:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-23T09:30:00",
        estimatedCompletionTime: "2024-03-23T13:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Electrical System Diagnostic",
          description:
            "Replace Faulty Battery and Alternator, Perform Computer Diagnostics",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 190,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech047",
              name: "Mia Harris",
            },
            {
              id: "Tech048",
              name: "Noah Turner",
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
      actionTaken:
        "Initiated electrical system diagnostic, replaced faulty battery and alternator, performed computer diagnostics for comprehensive analysis.",
      actualWorkshopFinding:
        "Dead battery, malfunctioning alternator causing electrical failures.",
      costing: {
        vat_tax: 20,
        parts: 190,
        labor: 60,
        total: 250,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer informed about periodic electrical system checks for reliable performance.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature47", "CustomFeature48"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC464646",
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
      ],
      currentServiceBay: 3,
      technicians: [
        {
          id: "Tech049",
          name: "Mike Smith",
        },
        {
          id: "Tech050",
          name: "Lisa Johnson",
        },
      ],
      partsUsed: [
        {
          name: "Wheel Weights",
          quantity: 1,
          cost: {
            amount: 10,
            currency: "USD",
          },
        },
        {
          name: "Alignment Adjustment Kit",
          quantity: 1,
          cost: {
            amount: 30,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-24T09:00:00",
      estimatedCompletionTime: "2024-03-24T12:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-24T09:00:00",
        estimatedCompletionTime: "2024-03-24T12:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Wheel Alignment and Balancing",
          description: "Adjust Wheel Alignment and Balance Tires",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 40,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech049",
              name: "Mike Smith",
            },
            {
              id: "Tech050",
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
      actionTaken:
        "Conducted wheel alignment and balancing, adjusted components for optimal tire performance.",
      actualWorkshopFinding:
        "Misaligned wheels causing braking issues and noise.",
      costing: {
        vat_tax: 20,
        parts: 40,
        labor: 50,
        total: 90,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
      remarks:
        "Commercial vehicle ready for road test. Customer advised on regular wheel alignments for extended tire life.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature49", "CustomFeature50"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC484848",
      vehicleDetails: {
        make: "Ford",
        model: "Escape",
        vehicleType: "SUV",
        year: 2015,
        licensePlate: "FRD456",
        vin: "VIN5678901234",
      },
      customerDetails: {
        name: "Emma Turner",
        contactNumber: "+9876543210",
        email: "emma.t@example.com",
        address: "789 Cedar St, Suburbville",
      },
      jobPriority: "Low",
      jobType: "Private",
      customerIssueDescription: "Difficulty Starting, Dim Lights",
      insuranceDetails: null,
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
      ],
      currentServiceBay: 2,
      technicians: [
        {
          id: "Tech051",
          name: "Liam Harris",
        },
        {
          id: "Tech052",
          name: "Ella Robinson",
        },
      ],
      partsUsed: [
        {
          name: "Car Battery",
          quantity: 1,
          cost: {
            amount: 80,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-25T10:30:00",
      estimatedCompletionTime: "2024-03-25T12:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-25T10:30:00",
        estimatedCompletionTime: "2024-03-25T12:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Battery Replacement",
          description: "Replace Faulty Car Battery",
          quantity: 1,
          status: "Pending",
          authorization: "Authorize",
          cost: {
            amount: 80,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech051",
              name: "Liam Harris",
            },
            {
              id: "Tech052",
              name: "Ella Robinson",
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
      actionTaken:
        "Initiated battery replacement, installed new battery for improved starting performance.",
      actualWorkshopFinding:
        "Dead battery affecting starting capability, low voltage impacting lights.",
      costing: {
        vat_tax: 20,
        parts: 80,
        labor: 30,
        total: 110,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer advised on periodic battery checks for reliable vehicle operation.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature51", "CustomFeature52"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC505050",
      vehicleDetails: {
        make: "Chevrolet",
        model: "Malibu",
        vehicleType: "Sedan",
        year: 2017,
        licensePlate: "CHV345",
        vin: "VIN9012345678",
      },
      customerDetails: {
        name: "Chloe Turner",
        contactNumber: "+1234567890",
        email: "chloe.t@example.com",
        address: "123 Oak St, Cityville",
      },
      jobPriority: "High",
      jobType: "Commercial",
      customerIssueDescription: "Engine Overheating, Coolant Leaks",
      insuranceDetails: {
        provider: "ABC Insurance",
        policyNumber: "POL987654",
      },
      inspectionChecklist: [
        {
          id: "INL001H",
          name: "Cooling System Inspection",
          inspectionList: [
            {
              id: "01H",
              inspectionItem: "Radiator Condition",
            },
            {
              id: "02H",
              inspectionItem: "Coolant Level and Condition",
            },
            {
              id: "03H",
              inspectionItem: "Thermostat Operation",
            },
            {
              id: "04H",
              inspectionItem: "Water Pump",
            },
            {
              id: "05H",
              inspectionItem: "Cooling Fans",
            },
            {
              id: "06H",
              inspectionItem: "Hoses and Clamps",
            },
            {
              id: "07H",
              inspectionItem: "Heater Core",
            },
          ],
        },
      ],
      currentServiceBay: 1,
      technicians: [
        {
          id: "Tech053",
          name: "Mia Davis",
        },
        {
          id: "Tech054",
          name: "Noah Robinson",
        },
      ],
      partsUsed: [
        {
          name: "Radiator",
          quantity: 1,
          cost: {
            amount: 120,
            currency: "USD",
          },
        },
        {
          name: "Water Pump",
          quantity: 1,
          cost: {
            amount: 80,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-26T09:00:00",
      estimatedCompletionTime: "2024-03-26T13:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-26T09:00:00",
        estimatedCompletionTime: "2024-03-26T13:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Cooling System Overhaul",
          description: "Replace Radiator and Water Pump, Perform Pressure Test",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 200,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech053",
              name: "Mia Davis",
            },
            {
              id: "Tech054",
              name: "Noah Robinson",
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
      actionTaken:
        "Initiated cooling system overhaul, replaced radiator and water pump, conducted pressure test for leaks.",
      actualWorkshopFinding:
        "Faulty radiator leaking coolant, worn-out water pump causing overheating.",
      costing: {
        vat_tax: 20,
        parts: 200,
        labor: 70,
        total: 270,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
      remarks:
        "Commercial vehicle ready for pressure test. Customer advised on regular coolant checks for engine health.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature53", "CustomFeature54"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC525252",
      vehicleDetails: {
        make: "Toyota",
        model: "Corolla",
        vehicleType: "Sedan",
        year: 2019,
        licensePlate: "ABC456",
        vin: "VIN1234567890",
      },
      customerDetails: {
        name: "Noah Harris",
        contactNumber: "+9876543210",
        email: "noah.h@example.com",
        address: "456 Pine St, Suburbville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Uneven Tire Wear, Vibration at High Speeds",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001I",
          name: "Tire and Wheel Inspection",
          inspectionList: [
            {
              id: "01I",
              inspectionItem: "Tire Tread Depth",
            },
            {
              id: "02I",
              inspectionItem: "Tire Pressure",
            },
            {
              id: "03I",
              inspectionItem: "Wheel Alignment",
            },
            {
              id: "04I",
              inspectionItem: "Wheel Balancing",
            },
            {
              id: "05I",
              inspectionItem: "Wheel Bearings",
            },
            {
              id: "06I",
              inspectionItem: "Rim Condition",
            },
            {
              id: "07I",
              inspectionItem: "Spare Tire",
            },
          ],
        },
      ],
      currentServiceBay: 3,
      technicians: [
        {
          id: "Tech055",
          name: "Ella Robinson",
        },
        {
          id: "Tech056",
          name: "Liam Harris",
        },
      ],
      partsUsed: [
        {
          name: "Wheel Weights",
          quantity: 1,
          cost: {
            amount: 10,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-27T11:30:00",
      estimatedCompletionTime: "2024-03-27T14:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-27T11:30:00",
        estimatedCompletionTime: "2024-03-27T14:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Tire Rotation and Balancing",
          description: "Rotate Tires, Balance Wheels, Check Alignment",
          quantity: 1,
          status: "Pending",
          authorization: "Pending",
          cost: {
            amount: 40,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech055",
              name: "Ella Robinson",
            },
            {
              id: "Tech056",
              name: "Liam Harris",
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
      actionTaken:
        "Conducted tire rotation and balancing, checked wheel alignment for even tire wear.",
      actualWorkshopFinding:
        "Uneven tire wear due to lack of rotation, imbalanced wheels causing vibrations.",
      costing: {
        vat_tax: 20,
        parts: 40,
        labor: 35,
        total: 75,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer advised on regular tire rotations for extended tire life and smooth driving experience.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature55", "CustomFeature56"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC545454",
      vehicleDetails: {
        make: "Honda",
        model: "Civic",
        vehicleType: "Hatchback",
        year: 2016,
        licensePlate: "HON789",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Mia Harris",
        contactNumber: "+1234567890",
        email: "mia.h@example.com",
        address: "123 Birch St, Townsville",
      },
      jobPriority: "High",
      jobType: "Private",
      customerIssueDescription: "Spongy Brake Pedal, Brake Warning Light",
      insuranceDetails: null,
      inspectionChecklist: [
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
      currentServiceBay: 4,
      technicians: [
        {
          id: "Tech057",
          name: "Noah Robinson",
        },
        {
          id: "Tech058",
          name: "Chloe Turner",
        },
      ],
      partsUsed: [
        {
          name: "Brake Fluid",
          quantity: 1,
          cost: {
            amount: 20,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-28T10:00:00",
      estimatedCompletionTime: "2024-03-28T13:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-28T10:00:00",
        estimatedCompletionTime: "2024-03-28T13:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Brake System Inspection",
          description:
            "Inspect Brake Pads, Discs, Fluid, and Lines. Bleed Brake System.",
          quantity: 1,
          status: "Completed",
          authorization: "Authorize",
          cost: {
            amount: 30,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech057",
              name: "Noah Robinson",
            },
            {
              id: "Tech058",
              name: "Chloe Turner",
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
      actionTaken:
        "Initiated brake system inspection, checked and bled brake system for optimal performance.",
      actualWorkshopFinding:
        "Worn-out brake pads, low brake fluid causing spongy pedal.",
      costing: {
        vat_tax: 20,
        parts: 30,
        labor: 40,
        total: 70,
        currency: "USD",
      },
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
      paymentStatus: "Cleared",
      remarks:
        "Customer informed about periodic brake fluid checks for responsive braking.",
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
      status: "Completed",
      workflowStatus: "invoice",
      additionalFeatures: ["CustomFeature57", "CustomFeature58"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC565656",
      vehicleDetails: {
        make: "Nissan",
        model: "Altima",
        vehicleType: "Sedan",
        year: 2020,
        licensePlate: "NSN901",
        vin: "VIN6789012345",
      },
      customerDetails: {
        name: "Liam Turner",
        contactNumber: "+9876543210",
        email: "liam.t@example.com",
        address: "789 Elm St, Suburbville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Weak Airflow, Unpleasant Odor",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001L",
          name: "AC System Inspection",
          inspectionList: [
            {
              id: "01L",
              inspectionItem: "Compressor",
            },
            {
              id: "02L",
              inspectionItem: "Condenser",
            },
            {
              id: "03L",
              inspectionItem: "Evaporator",
            },
            {
              id: "04L",
              inspectionItem: "Refrigerant Level",
            },
            {
              id: "05L",
              inspectionItem: "AC Hoses",
            },
            {
              id: "06L",
              inspectionItem: "AC Belts",
            },
            {
              id: "07L",
              inspectionItem: "AC Clutch",
            },
          ],
        },
      ],
      currentServiceBay: 6,
      technicians: [
        {
          id: "Tech059",
          name: "Chloe Harris",
        },
        {
          id: "Tech060",
          name: "Emma Robinson",
        },
      ],
      partsUsed: [
        {
          name: "AC Refrigerant",
          quantity: 2,
          cost: {
            amount: 60,
            currency: "USD",
          },
        },
        {
          name: "Cabin Air Filter",
          quantity: 1,
          cost: {
            amount: 15,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-29T09:30:00",
      estimatedCompletionTime: "2024-03-29T12:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-29T09:30:00",
        estimatedCompletionTime: "2024-03-29T12:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Air Conditioning Service",
          description: "Recharge AC Refrigerant, Replace Cabin Air Filter",
          quantity: 1,
          status: "Pending",
          authorization: "Authorize",
          cost: {
            amount: 75,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech059",
              name: "Chloe Harris",
            },
            {
              id: "Tech060",
              name: "Emma Robinson",
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
      actionTaken:
        "Initiated air conditioning service, recharged refrigerant and replaced cabin air filter for improved airflow.",
      actualWorkshopFinding:
        "Low refrigerant level, dirty cabin air filter causing weak airflow and odor.",
      costing: {
        vat_tax: 20,
        parts: 75,
        labor: 45,
        total: 120,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
      remarks:
        "Customer informed about regular cabin air filter replacements for fresh and clean airflow.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature59", "CustomFeature60"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC585858",
      vehicleDetails: {
        make: "Toyota",
        model: "Highlander",
        vehicleType: "SUV",
        year: 2016,
        licensePlate: "ABC789",
        vin: "VIN3456789012",
      },
      customerDetails: {
        name: "Emma Harris",
        contactNumber: "+1234567890",
        email: "emma.h@example.com",
        address: "123 Cedar St, Townsville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Heavy Steering, Unusual Noises",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001R",
          name: "Steering and Suspension Inspection",
          inspectionList: [
            {
              id: "01R",
              inspectionItem: "Steering Wheel Play",
            },
            {
              id: "02R",
              inspectionItem: "Power Steering Fluid",
            },
            {
              id: "03R",
              inspectionItem: "Steering Rack",
            },
            {
              id: "04R",
              inspectionItem: "Tie Rod Ends",
            },
            {
              id: "05R",
              inspectionItem: "Control Arms",
            },
            {
              id: "06R",
              inspectionItem: "Ball Joints",
            },
            {
              id: "07R",
              inspectionItem: "Bushings",
            },
          ],
        },
      ],
      currentServiceBay: 5,
      technicians: [
        {
          id: "Tech061",
          name: "Liam Robinson",
        },
        {
          id: "Tech062",
          name: "Ella Turner",
        },
      ],
      partsUsed: [
        {
          name: "Power Steering Fluid",
          quantity: 2,
          cost: {
            amount: 25,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-30T11:00:00",
      estimatedCompletionTime: "2024-03-30T14:00:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-30T11:00:00",
        estimatedCompletionTime: "2024-03-30T14:00:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Power Steering Fluid Flush",
          description:
            "Drain and Replace Power Steering Fluid, Check Components",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 40,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech061",
              name: "Liam Robinson",
            },
            {
              id: "Tech062",
              name: "Ella Turner",
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
      actionTaken:
        "Initiated power steering fluid flush, drained and replaced fluid, checked components for smooth steering.",
      actualWorkshopFinding:
        "Low power steering fluid level, aged fluid causing heavy steering and noise.",
      costing: {
        vat_tax: 20,
        parts: 40,
        labor: 35,
        total: 75,
        currency: "USD",
      },
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
      paymentStatus: "Pending",
      remarks:
        "Customer advised on regular power steering fluid flush for smooth steering performance.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature61", "CustomFeature62"],
    },
  },
  {
    jobCard: {
      jobCardID: "JC606060",
      vehicleDetails: {
        make: "Honda",
        model: "Accord",
        vehicleType: "Sedan",
        year: 2019,
        licensePlate: "HON567",
        vin: "VIN6789012345",
      },
      customerDetails: {
        name: "Chloe Turner",
        contactNumber: "+9876543210",
        email: "chloe.t@example.com",
        address: "789 Birch St, Suburbville",
      },
      jobPriority: "Medium",
      jobType: "Private",
      customerIssueDescription: "Slipping Gears, Delayed Shifting",
      insuranceDetails: null,
      inspectionChecklist: [
        {
          id: "INL001F",
          name: "Transmission Inspection",
          inspectionList: [
            {
              id: "01F",
              inspectionItem: "Transmission Fluid Level",
            },
            {
              id: "02F",
              inspectionItem: "Transmission Filter",
            },
            {
              id: "03F",
              inspectionItem: "Drive Shaft",
            },
            {
              id: "04F",
              inspectionItem: "CV Joints",
            },
            {
              id: "05F",
              inspectionItem: "Transmission Mounts",
            },
            {
              id: "06F",
              inspectionItem: "Clutch Operation",
            },
            {
              id: "07F",
              inspectionItem: "Transmission Cooler",
            },
          ],
        },
      ],
      currentServiceBay: 2,
      technicians: [
        {
          id: "Tech063",
          name: "Emma Robinson",
        },
        {
          id: "Tech064",
          name: "Noah Harris",
        },
      ],
      partsUsed: [
        {
          name: "Transmission Fluid",
          quantity: 4,
          cost: {
            amount: 60,
            currency: "USD",
          },
        },
        {
          name: "Transmission Filter Kit",
          quantity: 1,
          cost: {
            amount: 25,
            currency: "USD",
          },
        },
      ],
      createdAtDateTime: "2024-02-29T10:00:00",
      cardWriter: "Jim Romeo",
      startDateTime: "2024-03-31T09:30:00",
      estimatedCompletionTime: "2024-03-31T13:30:00",
      actualCompletionTime: null,
      eventsLog: {
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
        createdAtDateTime: "2024-02-29T10:00:00",
        startDateTime: "2024-03-31T09:30:00",
        estimatedCompletionTime: "2024-03-31T13:30:00",
        actualCompletionTime: null,
      },
      servicesDetails: [
        {
          category: "Engine Services",
          id: "SRV1A",
          name: "Transmission Fluid Change",
          description: "Replace Transmission Fluid and Filter",
          quantity: 1,
          status: "InProgress",
          authorization: "Authorize",
          cost: {
            amount: 85,
            currency: "USD",
          },
          technicians: [
            {
              id: "Tech063",
              name: "Emma Robinson",
            },
            {
              id: "Tech064",
              name: "Noah Harris",
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
      actionTaken:
        "Initiated transmission fluid change, replaced fluid and filter for smoother shifting.",
      actualWorkshopFinding:
        "Low transmission fluid level, dirty filter causing gear slipping and delays.",
      costing: {
        vat_tax: 20,
        parts: 50,
        labor: 35,
        total: 85,
        currency: "USD",
      },
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
      paymentStatus: "Deposit",
      remarks:
        "Customer informed about periodic transmission fluid changes for optimal gearbox performance.",
      status: "InProgress",
      workflowStatus: "inProgress",
      additionalFeatures: ["CustomFeature63", "CustomFeature64"],
    },
  },
];
