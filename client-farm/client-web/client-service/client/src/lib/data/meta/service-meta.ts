const service_v4 = {
  services: [
    {
      id: 1,
      category: "Engine Services",
      name: "Engine Diagnostics",
    },
    {
      id: 2,
      category: "Engine Services",
      name: "Oil Change",
    },
    {
      id: 3,
      category: "Engine Services",
      name: "Engine Rebuild",
    },
    {
      id: 4,
      category: "Engine Services",
      name: "Timing Belt Replacement",
    },
    {
      id: 5,
      category: "Engine Services",
      name: "Fuel System Cleaning",
    },
    {
      id: 6,
      category: "Brake Services",
      name: "Brake Pad Replacement",
    },
    {
      id: 7,
      category: "Brake Services",
      name: "Brake Fluid Flush",
    },
    {
      id: 8,
      category: "Brake Services",
      name: "Brake Rotor Resurfacing",
    },
    {
      id: 9,
      category: "Brake Services",
      name: "ABS System Repair",
    },
    {
      id: 10,
      category: "Brake Services",
      name: "Master Cylinder Replacement",
    },
    {
      id: 11,
      category: "Transmission Services",
      name: "Transmission Fluid Change",
    },
    {
      id: 12,
      category: "Transmission Services",
      name: "Transmission Flush",
    },
    {
      id: 13,
      category: "Transmission Services",
      name: "Clutch Replacement",
    },
    {
      id: 14,
      category: "Transmission Services",
      name: "Transmission Rebuild",
    },
    {
      id: 15,
      category: "Transmission Services",
      name: "CV Joint Repair",
    },
    {
      id: 16,
      category: "Suspension Services",
      name: "Shock Absorber Replacement",
    },
    {
      id: 17,
      category: "Suspension Services",
      name: "Strut Replacement",
    },
    {
      id: 18,
      category: "Suspension Services",
      name: "Wheel Alignment",
    },
    {
      id: 19,
      category: "Suspension Services",
      name: "Steering Rack Repair",
    },
    {
      id: 20,
      category: "Suspension Services",
      name: "Ball Joint Replacement",
    },
    {
      id: 21,
      category: "Tire Services",
      name: "Tire Rotation",
    },
    {
      id: 22,
      category: "Tire Services",
      name: "Tire Balancing",
    },
    {
      id: 23,
      category: "Tire Services",
      name: "Flat Tire Repair",
    },
    {
      id: 24,
      category: "Tire Services",
      name: "Wheel Alignment",
    },
    {
      id: 25,
      category: "Tire Services",
      name: "Tire Replacement",
    },
    {
      id: 26,
      category: "Exhaust Services",
      name: "Muffler Replacement",
    },
    {
      id: 27,
      category: "Exhaust Services",
      name: "Catalytic Converter Replacement",
    },
    {
      id: 28,
      category: "Exhaust Services",
      name: "Exhaust Pipe Repair",
    },
    {
      id: 29,
      category: "Exhaust Services",
      name: "Oxygen Sensor Replacement",
    },
    {
      id: 30,
      category: "Exhaust Services",
      name: "Emissions Testing",
    },
    {
      id: 31,
      category: "Electrical Services",
      name: "Battery Replacement",
    },
    {
      id: 32,
      category: "Electrical Services",
      name: "Alternator Replacement",
    },
    {
      id: 33,
      category: "Electrical Services",
      name: "Starter Motor Repair",
    },
    {
      id: 34,
      category: "Electrical Services",
      name: "Ignition Coil Replacement",
    },
    {
      id: 35,
      category: "Electrical Services",
      name: "Headlight Bulb Replacement",
    },
    {
      id: 36,
      category: "Air Conditioning Services",
      name: "AC Refrigerant Recharge",
    },
    {
      id: 37,
      category: "Air Conditioning Services",
      name: "AC Compressor Replacement",
    },
    {
      id: 38,
      category: "Air Conditioning Services",
      name: "Heater Core Replacement",
    },
    {
      id: 39,
      category: "Air Conditioning Services",
      name: "Blower Motor Repair",
    },
    {
      id: 40,
      category: "Air Conditioning Services",
      name: "AC Evaporator Replacement",
    },
    {
      id: 41,
      category: "Paint and Bodywork",
      name: "Dent Repair",
    },
    {
      id: 42,
      category: "Paint and Bodywork",
      name: "Paint Scratch Removal",
    },
    {
      id: 43,
      category: "Paint and Bodywork",
      name: "Bumper Replacement",
    },
    {
      id: 44,
      category: "Paint and Bodywork",
      name: "Panel Replacement",
    },
    {
      id: 45,
      category: "Paint and Bodywork",
      name: "Windshield Replacement",
    },
    {
      id: 46,
      category: "Paint and Bodywork",
      name: "Auto Detailing",
    },
    {
      id: 47,
      category: "Paint and Bodywork",
      name: "Rust Repair",
    },
  ],
};

const service_meta_v1 = {
  serviceFeatures: {
    id: "SRV002A",
    catId: "CAT001A",
    name: "Full Car Restoration",
    category: "Car Restoration Work",
    description:
      "Comprehensive restoration service to bring a vehicle to its original or customized glory.",
    duration: "Varies (weeks to months depending on the project scope)",
    subcontractor: [
      {
        subcontractorID: "SUBC010",
        subcontractorName: "Auto Electrical Solutions",
        subcontractorCategoryServices: "Auto Electrical Services",
        contactPerson: "Thomas Harris",
        contactNumber: "+1789543210",
        email: "thomas.harris@autoelectricalsolutions.com",
        address: "123 Voltage Avenue, Wattsville",
        service: [
          {
            serviceID: "SRV001J",
            serviceName: "Electrical Diagnostics",
            serviceCategory: "Electrical Service",
            description:
              "Diagnostic testing to identify and repair electrical issues in vehicles",
            hourlyRate: 85,
            availability: "Mon-Fri, 8am-5pm",
            averageDeliveryTime: "2 days",
          },
        ]
      },
    ],
    partsIncluded: [
      {
        inventoryID: "INV1001",
        partName: "Chassis Components",
        itemPartID: "SP123001",
        quantity: 1,
        price: 10,
        type: "Part",
        discountApplicable: false,
        discount: 0,
      },
      {
        inventoryID: "INV1007",
        partName: "Engine Assembly",
        itemPartID: "SP123001",
        quantity: 1,
        price: 10,
        type: "Part",
        discountApplicable: false,
        discount: 0,
      },
      {
        inventoryID: "INV1092",
        partName: "Interior Upholstery",
        itemPartID: "SP123001",
        quantity: 1,
        price: 10,
        type: "Part",
        discountApplicable: false,
        discount: 0,
      },
      {
        inventoryID: "INV1012",
        partName: "Exterior Body Panels",
        itemPartID: "SP123001",
        quantity: 1,
        price: 10,
        type: "Part",
        discountApplicable: false,
        discount: 0,
      },
      {
        inventoryID: "INV1013",
        partName: "Paint and Finish",
        itemPartID: "SP123001",
        quantity: 1,
        price: 10,
        type: "Part",
        discountApplicable: false,
        discount: 0,
      },
    ],
    additionalServices: [
      {
        additionalServiceID: "ADDSRV001A",
        additionalServiceName: "Period-Correct Detailing",
        description:
          "Detailed restoration to ensure that every aspect of the vehicle aligns with its original period.",
      },
      {
        additionalServiceID: "ADDSRV002A",
        additionalServiceName: "Customization and Modification",
        description:
          "Tailoring the restoration to include modern upgrades or personalization as per the client's preferences.",
      },
      {
        additionalServiceID: "ADDSRV003A",
        additionalServiceName: "Performance Tuning",
        description:
          "Enhancing the vehicle's performance through engine tuning, suspension upgrades, and brake enhancements.",
      },
    ],
    labourCost: {
      amount: 5000,
      currency: "USD",
      description:
        "Cost of skilled labor for disassembly, restoration, and reassembly of the vehicle.",
    },
    totalCostEstimation: {
      amount: 25000,
      currency: "USD",
      description:
        "Estimated total cost, including parts, labor, and additional services.",
    },
    bookingRequirements: {
      insuranceNeeded: true,
      advancedBookingRequired: true,
      initialDepositPercentage: 20,
      cancellationPolicy:
        "Cancellation allowed with a 7-day notice; deposit non-refundable after that.",
    },
    availability: {
      daysRequired: 90,
      startAvailability: "2024-07-01",
      endAvailability: "2024-09-28",
      workingHours: {
        start: "09:00 AM",
        end: "06:00 PM",
      },
    },
    contactInformation: {
      garageName: "Classic Revivals Auto Shop",
      contactNumber: "+1234567890",
      email: "info@classicrevivals.com",
      address: "123 Restoration Lane, Autoville, USA",
    },
    customerReviews: [
      {
        reviewID: 8001,
        customerName: "John ClassicCarEnthusiast",
        reviewDate: "2024-10-05",
        rating: 5,
        review:
          "Absolutely thrilled with the restoration work. The attention to detail is commendable.",
      },
      {
        reviewID: 8002,
        customerName: "CarRestorationFanatic",
        reviewDate: "2024-10-10",
        rating: 4,
        review:
          "Great craftsmanship, although the project took a bit longer than expected.",
      },
    ],
  },
};
