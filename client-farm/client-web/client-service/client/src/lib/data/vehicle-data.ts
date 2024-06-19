export const vehicle_data = [
  {
    vehicleId: "101",
    make: " Toyota",
    model: "LX300",
    registrationNumber: "ABC123",
    insurancePolicyNumber: "INS456",
    fuelType: "Petrol",
    wheelBase: "Medium",
    vinChassisNumber: "VIN791022",
    vehicleType: "SUV",
    manufacturer: "Toyota Motors",
    mileage: "50000",
    status: "Active",
    manufacturedDate: "2018-03-10",
    garageVisitAmount: 3,
    customerDetails: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
    },
    jobCards: [
      {
        jobCardId: "JC001",
        status: "Active",
        lastUpdated: "2024-02-23",
        pendingAmount: 200.0,
        servicesOffered: ["General Service", "Body Shop", "Engine Work"],
        active: true,
        inspectionDetails: {
          inspectionDate: "2024-02-25",
          inspectionStatus: "Pending Approval",
          inspectorName: "Mark Smith",
          inspectionComments: "Needs engine check.",
        },
      },
    ],
  },
  {
    vehicleId: "201",
    make: "Honda",
    model: "Civic",
    registrationNumber: "XYZ456",
    insurancePolicyNumber: "INS789",
    fuelType: "Petrol",
    wheelBase: "Compact",
    vinChassisNumber: "VIN789012",
    vehicleType: "Sedan",
    manufacturer: "Honda Motors",
    mileage: "40000",
    status: "In Service",
    manufacturedDate: "2019-06-15",
    garageVisitAmount: 3,
    customerDetails: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+9876543210",
    },
    jobCards: [
      {
        jobCardId: 2001,
        status: "Active",
        lastUpdated: "2024-02-22",
        pendingAmount: 150.0,
        servicesOffered: ["Body Shop", "Engine Work"],
        inspectionDetails: {
          inspectionDate: "2024-02-18",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Johnson",
          inspectionComments: "Minor body repairs needed.",
        },
        allocatedTechnician: {
          technicianId: 502,
          technicianName: "Car Expert",
          specialization: ["Body Shop", "Engine Work"],
        },
        allocatedSupervisor: {
          supervisorId: 702,
          supervisorName: "Service Supervisor",
          department: "Service",
        },
      },
    ],
  },
  {
    vehicleId: "202",
    make: "Ford",
    model: "Escape",
    registrationNumber: "PQR789",
    insurancePolicyNumber: "INS101",
    fuelType: "Hybrid",
    wheelBase: "Medium",
    vinChassisNumber: "VIN345678",
    vehicleType: "SUV",
    manufacturer: "Ford Motors",
    mileage: "35000",
    status: "In Service",
    manufacturedDate: "2020-08-22",
    garageVisitAmount: 2,
    customerDetails: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+9876543210",
    },
    jobCards: [
      {
        jobCardId: 2002,
        status: "Active",
        lastUpdated: "2024-02-23",
        pendingAmount: 200.0,
        servicesOffered: ["General Service", "Transmission Work"],
        inspectionDetails: {
          inspectionDate: "2024-02-20",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Brown",
          inspectionComments: "Transmission overhaul recommended.",
        },
        allocatedTechnician: {
          technicianId: 503,
          technicianName: "Transmission Specialist",
          specialization: ["Transmission Work"],
        },
        allocatedSupervisor: {
          supervisorId: 703,
          supervisorName: "Garage Supervisor",
          department: "Garage",
        },
      },
    ],
  },
  {
    vehicleId: "301",
    make: "Ford",
    model: "F-150",
    registrationNumber: "XYZ456",
    insurancePolicyNumber: "INS789",
    fuelType: "Diesel",
    wheelBase: "Large",
    vinChassisNumber: "VIN789012",
    vehicleType: "Truck",
    manufacturer: "Ford Motors",
    mileage: "70000",
    status: "In Service",
    manufacturedDate: "2019-05-25",
    garageVisitAmount: 3,
    customerDetails: {
      name: "Alice Johnson",
      email: "alice.j@example.com",
      phone: "+9876543210",
    },
    jobCards: [
      {
        jobCardId: 3001,
        status: "Active",
        lastUpdated: "2024-02-25",
        pendingAmount: 150.0,
        servicesOffered: ["Transmission Work", "Mechanical Work"],
        inspectionDetails: {
          inspectionDate: "2024-02-20",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Johnson",
          inspectionComments: "Minor issues found and resolved.",
        },
        allocatedTechnician: {
          technicianId: 502,
          technicianName: "Tech Pro",
          specialization: ["Transmission Work", "Mechanical Work"],
        },
        allocatedSupervisor: {
          supervisorId: 702,
          supervisorName: "Super Alice",
          department: "Service",
        },
      },
    ],
  },
  {
    vehicleId: "401",
    make: "Chevrolet",
    model: "Equinox",
    registrationNumber: "PQR789",
    insurancePolicyNumber: "INS101",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN101112",
    vehicleType: "SUV",
    manufacturer: "Chevrolet Motors",
    mileage: "45000",
    status: "In Service",
    manufacturedDate: "2020-08-15",
    garageVisitAmount: 4,
    customerDetails: {
      name: "Eva Rodriguez",
      email: "eva.r@example.com",
      phone: "+1112223333",
    },
    jobCards: [
      {
        jobCardId: 4001,
        status: "Active",
        lastUpdated: "2024-03-15",
        pendingAmount: 200.0,
        servicesOffered: ["Engine Work", "Body Shop"],
        inspectionDetails: {
          inspectionDate: "2024-03-10",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Rodriguez",
          inspectionComments: "No major issues found during inspection.",
        },
        allocatedTechnician: {
          technicianId: 503,
          technicianName: "Tech Master",
          specialization: ["Engine Work", "Body Shop"],
        },
        allocatedSupervisor: {
          supervisorId: 703,
          supervisorName: "Super Eva",
          department: "Service",
        },
      },
    ],
  },
  {
    vehicleId: "501",
    make: "Honda",
    model: "Civic",
    registrationNumber: "DEF456",
    insurancePolicyNumber: "INS111",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN111222",
    vehicleType: "Sedan",
    manufacturer: "Honda Motors",
    mileage: "60000",
    status: "In Service",
    manufacturedDate: "2017-10-12",
    garageVisitAmount: 6,
    customerDetails: {
      name: "Sophie Williams",
      email: "sophie.w@example.com",
      phone: "+9876543210",
    },
    jobCards: [
      {
        jobCardId: 5001,
        status: "Active",
        lastUpdated: "2024-03-25",
        pendingAmount: 300.0,
        servicesOffered: ["General Service", "Body Shop"],
        inspectionDetails: {
          inspectionDate: "2024-03-20",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Williams",
          inspectionComments: "Minor issues identified and resolved.",
        },
        allocatedTechnician: {
          technicianId: 504,
          technicianName: "Tech Expert",
          specialization: ["General Service", "Body Shop"],
        },
        allocatedSupervisor: {
          supervisorId: 704,
          supervisorName: "Super Sophie",
          department: "Service",
        },
      },
    ],
  },
  {
    vehicleId: "502",
    make: "Toyota",
    model: "Rav4",
    registrationNumber: "GHI789",
    insurancePolicyNumber: "INS222",
    fuelType: "Hybrid",
    wheelBase: "Medium",
    vinChassisNumber: "VIN222333",
    vehicleType: "SUV",
    manufacturer: "Toyota Motors",
    mileage: "40000",
    status: "In Service",
    manufacturedDate: "2019-06-20",
    garageVisitAmount: 4,
    customerDetails: {
      name: "Sophie Williams",
      email: "sophie.w@example.com",
      phone: "+9876543210",
    },
    jobCards: [
      {
        jobCardId: 5002,
        status: "Active",
        lastUpdated: "2024-03-28",
        pendingAmount: 200.0,
        servicesOffered: ["Engine Work", "Paint Work"],
        inspectionDetails: {
          inspectionDate: "2024-03-23",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Williams",
          inspectionComments: "No major issues found.",
        },
        allocatedTechnician: {
          technicianId: 505,
          technicianName: "Tech Pro",
          specialization: ["Engine Work", "Paint Work"],
        },
        allocatedSupervisor: {
          supervisorId: 705,
          supervisorName: "Super Sophie",
          department: "Service",
        },
      },
    ],
  },
  {
    vehicleId: "503",
    make: "Ford",
    model: "Escape",
    registrationNumber: "JKL012",
    insurancePolicyNumber: "INS333",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN333444",
    vehicleType: "SUV",
    manufacturer: "Ford Motors",
    mileage: "55000",
    status: "In Service",
    manufacturedDate: "2018-09-15",
    garageVisitAmount: 5,
    customerDetails: {
      name: "Sophie Williams",
      email: "sophie.w@example.com",
      phone: "+9876543210",
    },
    jobCards: [
      {
        jobCardId: 5003,
        status: "Active",
        lastUpdated: "2024-04-01",
        pendingAmount: 250.0,
        servicesOffered: ["Transmission Work", "Mechanical Work"],
        inspectionDetails: {
          inspectionDate: "2024-03-30",
          inspectionStatus: "Completed",
          inspectorName: "Inspector Williams",
          inspectionComments: "Minor issues addressed.",
        },
        allocatedTechnician: {
          technicianId: 506,
          technicianName: "Tech Master",
          specialization: ["Transmission Work", "Mechanical Work"],
        },
        allocatedSupervisor: {
          supervisorId: 706,
          supervisorName: "Super Sophie",
          department: "Service",
        },
      },
    ],
  },
  {
    vehicleId: "601",
    make: "Nissan",
    model: "Altima",
    registrationNumber: "MNO789",
    insurancePolicyNumber: "INS444",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN444555",
    vehicleType: "Sedan",
    manufacturer: "Nissan Motors",
    mileage: "30000",
    status: "In Service",
    manufacturedDate: "2021-02-28",
    garageVisitAmount: 2,
    customerDetails: {
      name: "Michael Anderson",
      email: "michael.a@example.com",
      phone: "+1122334455",
    },
  },
  {
    vehicleId: "701",
    make: "Hyundai",
    model: "Elantra",
    registrationNumber: "PQR123",
    insurancePolicyNumber: "INS555",
    fuelType: "Hybrid",
    wheelBase: "Medium",
    vinChassisNumber: "VIN555666",
    vehicleType: "Sedan",
    manufacturer: "Hyundai Motors",
    mileage: "40000",
    status: "In Service",
    manufacturedDate: "2019-09-10",
    garageVisitAmount: 3,
    customerDetails: {
      name: "Emma Taylor",
      email: "emma.t@example.com",
      phone: "+9988776655",
    },
  },
  {
    vehicleId: "801",
    make: "Kia",
    model: "Soul",
    registrationNumber: "QRS456",
    insurancePolicyNumber: "INS666",
    fuelType: "Electric",
    wheelBase: "Medium",
    vinChassisNumber: "VIN666777",
    vehicleType: "SUV",
    manufacturer: "Kia Motors",
    mileage: "25000",
    status: "In Service",
    manufacturedDate: "2020-06-15",
    garageVisitAmount: 4,
    customerDetails: {
      name: "Olivia Moore",
      email: "olivia.m@example.com",
      phone: "+1122334455",
    },
  },
  {
    vehicleId: "901",
    make: "Mazda",
    model: "CX-5",
    registrationNumber: "UVW012",
    insurancePolicyNumber: "INS777",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN777888",
    vehicleType: "SUV",
    manufacturer: "Mazda Motors",
    mileage: "35000",
    status: "In Service",
    manufacturedDate: "2018-12-05",
    garageVisitAmount: 1,
    customerDetails: {
      name: "Daniel Smith",
      email: "daniel.s@example.com",
      phone: "+9988776655",
    },
  },
  {
    vehicleId: "1001",
    make: "Chevrolet",
    model: "Malibu",
    registrationNumber: "ABC012",
    insurancePolicyNumber: "INS888",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN888999",
    vehicleType: "Sedan",
    manufacturer: "Chevrolet Motors",
    mileage: "28000",
    status: "In Service",
    manufacturedDate: "2019-03-20",
    garageVisitAmount: 2,
    customerDetails: {
      name: "Ava Miller",
      email: "ava.m@example.com",
      phone: "+1122334455",
    },
  },
  {
    vehicleId: "1101",
    make: "Ford",
    model: "Focus",
    registrationNumber: "LMN012",
    insurancePolicyNumber: "INS999",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN999000",
    vehicleType: "Sedan",
    manufacturer: "Ford Motors",
    mileage: "32000",
    status: "In Service",
    manufacturedDate: "2020-08-25",
    garageVisitAmount: 3,
    customerDetails: {
      name: "Sophia Brown",
      email: "sophia.b@example.com",
      phone: "+1122334455",
    },
  },
  {
    vehicleId: "1201",
    make: "Toyota",
    model: "Corolla",
    registrationNumber: "OPQ456",
    insurancePolicyNumber: "INS111",
    fuelType: "Hybrid",
    wheelBase: "Medium",
    vinChassisNumber: "VIN111222",
    vehicleType: "Sedan",
    manufacturer: "Toyota Motors",
    mileage: "25000",
    status: "In Service",
    manufacturedDate: "2021-01-15",
    garageVisitAmount: 2,
    customerDetails: {
      name: "Benjamin Garcia",
      email: "benjamin.g@example.com",
      phone: "+9988776655",
    },
  },
  {
    vehicleId: "1301",
    make: "Honda",
    model: "CR-V",
    registrationNumber: "QRS789",
    insurancePolicyNumber: "INS222",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN222333",
    vehicleType: "SUV",
    manufacturer: "Honda Motors",
    mileage: "30000",
    status: "In Service",
    manufacturedDate: "2020-06-20",
    garageVisitAmount: 1,
    customerDetails: {
      name: "Isabella Martinez",
      email: "isabella.m@example.com",
      phone: "+1122334455",
    },
  },
  {
    vehicleId: "1401",
    make: "Chevrolet",
    model: "Cruze",
    registrationNumber: "UVW789",
    insurancePolicyNumber: "INS333",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN333444",
    vehicleType: "Sedan",
    manufacturer: "Chevrolet Motors",
    mileage: "28000",
    status: "In Service",
    manufacturedDate: "2019-09-10",
    garageVisitAmount: 2,
    customerDetails: {
      name: "Mia Wilson",
      email: "mia.w@example.com",
      phone: "+9988776655",
    },
  },
  {
    vehicleId: "1501",
    make: "Hyundai",
    model: "Tucson",
    registrationNumber: "ABC789",
    insurancePolicyNumber: "INS444",
    fuelType: "Gasoline",
    wheelBase: "Medium",
    vinChassisNumber: "VIN444555",
    vehicleType: "SUV",
    manufacturer: "Hyundai Motors",
    mileage: "35000",
    status: "In Service",
    manufacturedDate: "2018-12-05",
    garageVisitAmount: 3,
    customerDetails: {
      name: "Lucas Moore",
      email: "lucas.m@example.com",
      phone: "+1122334455",
    },
  },
];