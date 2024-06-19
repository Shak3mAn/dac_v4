export const inventory = {
  inventoryManagement: {
    inventoryItems: [
      {
        id: "001",
        name: "Engine Oil",
        quantity: 100,
        unit: "liters",
        minimumThreshold: 20,
        location: "Shelf A",
        supplier: "Supplier X",
        costPerUnit: {
          amount: 10,
          currency: "USD",
        },
      },
      {
        id: "002",
        name: "Brake Pads",
        quantity: 50,
        unit: "sets",
        minimumThreshold: 10,
        location: "Shelf B",
        supplier: "Supplier Y",
        costPerUnit: {
          amount: 30,
          currency: "USD",
        },
      },
    ],
    inventoryActions: {
      addition: {
        description: "Add new inventory items to the system.",
        fields: [
          "name",
          "quantity",
          "unit",
          "minimumThreshold",
          "location",
          "supplier",
          "costPerUnit",
        ],
      },
      update: {
        description: "Update existing inventory items.",
        fields: [
          "name",
          "quantity",
          "unit",
          "minimumThreshold",
          "location",
          "supplier",
          "costPerUnit",
        ],
      },
      delete: {
        description: "Remove inventory items from the system.",
        fields: ["id"],
      },
      checkAvailability: {
        description: "Check the availability of inventory items.",
        input: ["id"],
        output: ["availability"],
      },
      requestRestock: {
        description: "Initiate a restock request for low inventory items.",
        input: ["id", "quantity"],
        output: ["status"],
      },
      viewInventory: {
        description: "View the complete inventory list.",
        output: ["inventoryItems"],
      },
      viewLowInventory: {
        description: "View inventory items below the minimum threshold.",
        output: ["lowInventoryItems"],
      },
      trackInventoryUsage: {
        description:
          "Track usage and consumption of inventory items over time.",
        input: ["id", "startDate", "endDate"],
        output: ["usageData"],
      },
    },
  },
};

const inv_mng1 = {
  inventoryManagement: {
    currentInventory: [
      {
        itemID: 1,
        itemName: "Engine Oil",
        quantity: 100,
        unit: "quarts",
        pricePerUnit: 10.5,
        lastUpdated: "2024-02-29T12:30:00Z",
      },
      {
        itemID: 2,
        itemName: "Brake Pads",
        quantity: 50,
        unit: "sets",
        pricePerUnit: 30.0,
        lastUpdated: "2024-02-29T12:30:00Z",
      },
      {
        itemID: 3,
        itemName: "Oil Filters",
        quantity: 75,
        unit: "pieces",
        pricePerUnit: 5.75,
        lastUpdated: "2024-02-29T12:30:00Z",
      },
    ],
    inventoryActions: {
      addItem: {
        itemName: "Transmission Fluid",
        initialQuantity: 50,
        unit: "quarts",
        pricePerUnit: 8.25,
        timestamp: "2024-02-29T14:45:00Z",
      },
      updateItem: {
        itemID: 1,
        newQuantity: 80,
        timestamp: "2024-02-29T15:15:00Z",
      },
      removeItem: {
        itemID: 3,
        quantity: 10,
        timestamp: "2024-02-29T16:30:00Z",
      },
    },
    lowInventoryThreshold: 20,
    inventoryWarnings: [
      {
        itemID: 1,
        itemName: "Engine Oil",
        quantity: 5,
        timestamp: "2024-02-29T16:45:00Z",
      },
      {
        itemID: 2,
        itemName: "Brake Pads",
        quantity: 0,
        timestamp: "2024-02-29T16:45:00Z",
      },
    ],
    inventoryRequests: [
      {
        requestID: 1,
        itemName: "Air Filters",
        quantity: 30,
        requester: "Technician #3",
        timestamp: "2024-02-29T17:00:00Z",
      },
      {
        requestID: 2,
        itemName: "Spark Plugs",
        quantity: 50,
        requester: "Technician #1",
        timestamp: "2024-02-29T17:30:00Z",
      },
    ],
    inventoryFulfillment: [
      {
        requestID: 1,
        fulfilledBy: "Warehouse A",
        fulfilledQuantity: 30,
        timestamp: "2024-02-29T18:00:00Z",
      },
      {
        requestID: 2,
        fulfilledBy: "Warehouse B",
        fulfilledQuantity: 50,
        timestamp: "2024-02-29T18:30:00Z",
      },
    ],
  },
};

const inv_mng2_abc = {
  inventoryManagement: {
    inventoryItems: [
      {
        name: "Oil Filters",
        quantity: 50,
        unit: "pieces",
        cost: {
          amount: 300,
          currency: "USD",
        },
      },
      {
        name: "Brake Pads",
        quantity: 30,
        unit: "sets",
        cost: {
          amount: 500,
          currency: "USD",
        },
      },
      {
        name: "Engine Oil",
        quantity: 20,
        unit: "quarts",
        cost: {
          amount: 200,
          currency: "USD",
        },
      },
      {
        name: "Tires",
        quantity: 40,
        unit: "pieces",
        cost: {
          amount: 2000,
          currency: "USD",
        },
      },
    ],
    inventoryWarnings: [
      {
        name: "Engine Oil",
        quantity: 5,
      },
      {
        name: "Tires",
        quantity: 0,
      },
    ],
    abcAnalysis: {
      categories: {
        A: {
          items: [
            {
              name: "Tires",
              annualConsumption: 1200,
              costPerUnit: 50,
              percentage: 40,
            },
            {
              name: "Brake Pads",
              annualConsumption: 360,
              costPerUnit: 16,
              percentage: 20,
            },
          ],
        },
        B: {
          items: [
            {
              name: "Oil Filters",
              annualConsumption: 200,
              costPerUnit: 6,
              percentage: 15,
            },
          ],
        },
        C: {
          items: [
            {
              name: "Engine Oil",
              annualConsumption: 80,
              costPerUnit: 10,
              percentage: 25,
            },
          ],
        },
      },
      reorderRecommendations: [
        {
          category: "A",
          items: [
            {
              name: "Tires",
              reorderQuantity: 30,
            },
            {
              name: "Brake Pads",
              reorderQuantity: 15,
            },
          ],
        },
        {
          category: "B",
          items: [
            {
              name: "Oil Filters",
              reorderQuantity: 10,
            },
          ],
        },
        {
          category: "C",
          items: [
            {
              name: "Engine Oil",
              reorderQuantity: 10,
            },
          ],
        },
      ],
    },
    actions: [
      "ViewInventory",
      "AddNewItem",
      "UpdateItemQuantity",
      "UpdateItemCost",
      "GenerateABCAnalysis",
      "ViewReorderRecommendations",
    ],
  },
};

const inv_mng3 = {
  inventory: {
    items: [
      {
        partID: "PART001",
        name: "Brake Pads",
        description: "High-performance brake pads for various vehicle models",
        quantity: 100,
        unit: "pcs",
        cost: {
          amount: 20,
          currency: "USD",
        },
        reorderThreshold: 20,
        supplier: {
          name: "Auto Parts Supplier Inc.",
          contactNumber: "+1234567890",
          email: "info@autopartsupplier.com",
        },
      },
      {
        partID: "PART002",
        name: "Engine Oil (5W-30)",
        description: "Synthetic engine oil suitable for most engines",
        quantity: 150,
        unit: "liters",
        cost: {
          amount: 25,
          currency: "USD",
        },
        reorderThreshold: 30,
        supplier: {
          name: "Oil Distributors Ltd.",
          contactNumber: "+9876543210",
          email: "sales@oildistributors.com",
        },
      },
      // Additional inventory items go here...
    ],
    categories: [
      "Brakes",
      "Engine",
      "Transmission",
      "Suspension",
      "Electrical",
      "Tires and Wheels",
      "Fluids",
    ],
    abcAnalysis: {
      A: ["PART001"],
      B: ["PART002"],
      C: [],
    },
  },
  purchaseOrders: [
    {
      orderID: "PO123",
      supplier: {
        name: "Auto Parts Supplier Inc.",
        contactNumber: "+1234567890",
        email: "info@autopartsupplier.com",
      },
      orderDate: "2024-04-01T14:30:00",
      deliveryDate: "2024-04-10T10:00:00",
      items: [
        {
          partID: "PART001",
          quantity: 50,
          cost: {
            amount: 18,
            currency: "USD",
          },
        },
        {
          partID: "PART002",
          quantity: 70,
          cost: {
            amount: 22,
            currency: "USD",
          },
        },
      ],
      totalCost: {
        amount: 2200,
        currency: "USD",
      },
      status: "Pending",
      additionalNotes: "Expedite delivery if possible.",
    },
    // Additional purchase orders go here...
  ],
  stockAdjustments: [
    {
      adjustmentID: "ADJ001",
      adjustmentDate: "2024-04-05T15:45:00",
      items: [
        {
          partID: "PART001",
          quantityAdjusted: -5,
          reason: "Defective items",
        },
        {
          partID: "PART002",
          quantityAdjusted: 10,
          reason: "Received additional stock",
        },
      ],
    },
    // Additional stock adjustments go here...
  ],
  inventoryUsage: [
    {
      usageID: "USAGE001",
      jobCardID: "JC12345",
      usedParts: [
        {
          partID: "PART001",
          quantityUsed: 2,
        },
        {
          partID: "PART002",
          quantityUsed: 3,
        },
      ],
      totalCost: {
        amount: 145,
        currency: "USD",
      },
    },
    // Additional inventory usages go here...
  ],
  inventoryReports: {
    totalValue: {
      amount: 5000,
      currency: "USD",
    },
    stockValueByCategory: {
      Brakes: 1200,
      Engine: 800,
      Transmission: 600,
      Suspension: 700,
      Electrical: 300,
      "Tires and Wheels": 600,
      Fluids: 100,
    },
    reorderRecommendations: [
      {
        partID: "PART001",
        quantityToOrder: 30,
      },
      {
        partID: "PART002",
        quantityToOrder: 40,
      },
    ],
  },
};

const inv_mng5 = {
  inventory: {
    parts: [
      {
        partID: "P001",
        name: "Brake Pads",
        description: "High-performance brake pads",
        quantity: 100,
        threshold: 20,
        cost: {
          amount: 30,
          currency: "USD",
        },
        supplier: "Auto Parts Supplier Inc.",
        lastRestockDate: "2024-03-01",
        location: "Shelf A",
      },
      {
        partID: "P002",
        name: "Engine Oil",
        description: "Synthetic motor oil",
        quantity: 150,
        threshold: 30,
        cost: {
          amount: 20,
          currency: "USD",
        },
        supplier: "Oil Distributors Ltd.",
        lastRestockDate: "2024-03-10",
        location: "Shelf B",
      },
      // Additional parts go here...
    ],
    tools: [
      {
        toolID: "T001",
        name: "Diagnostic Scanner",
        description: "Advanced vehicle diagnostic tool",
        quantity: 5,
        threshold: 2,
        cost: {
          amount: 500,
          currency: "USD",
        },
        supplier: "Tech Tools Co.",
        lastRestockDate: "2024-02-15",
        location: "Toolbox 1",
      },
      {
        toolID: "T002",
        name: "Impact Wrench",
        description: "High-torque impact wrench",
        quantity: 8,
        threshold: 3,
        cost: {
          amount: 150,
          currency: "USD",
        },
        supplier: "Mechanical Gear Supply",
        lastRestockDate: "2024-02-28",
        location: "Toolbox 2",
      },
      // Additional tools go here...
    ],
  },
  inventoryProcessing: {
    restockRequests: [
      {
        requestID: "RR001",
        parts: [
          {
            partID: "P001",
            quantity: 50,
          },
          {
            partID: "P002",
            quantity: 30,
          },
        ],
        tools: [
          {
            toolID: "T001",
            quantity: 2,
          },
        ],
        supplier: "Auto Parts Supplier Inc.",
        status: "Pending",
        requestedDate: "2024-03-15",
      },
      {
        requestID: "RR002",
        parts: [
          {
            partID: "P003",
            quantity: 40,
          },
        ],
        tools: [
          {
            toolID: "T002",
            quantity: 5,
          },
        ],
        supplier: "Mechanical Gear Supply",
        status: "Approved",
        requestedDate: "2024-03-20",
      },
      // Additional restock requests go here...
    ],
    restockHistory: [
      {
        requestID: "RR001",
        restockedDate: "2024-03-18",
        restockedBy: "John Mechanic",
      },
      {
        requestID: "RR002",
        restockedDate: "2024-03-25",
        restockedBy: "Emma Technician",
      },
      // Additional restock history entries go here...
    ],
    usageLogs: [
      {
        logID: "UL001",
        partID: "P001",
        quantityUsed: 10,
        usedIn: "Brake System Repair",
        usedBy: "Mike Smith",
        usageDate: "2024-03-05",
      },
      {
        logID: "UL002",
        toolID: "T002",
        quantityUsed: 2,
        usedIn: "Tire Rotation",
        usedBy: "Lisa Johnson",
        usageDate: "2024-03-12",
      },
      // Additional usage logs go here...
    ],
    inventoryReports: {
      totalPartsValue: {
        amount: 7500,
        currency: "USD",
      },
      totalToolsValue: {
        amount: 3000,
        currency: "USD",
      },
      totalInventoryValue: {
        amount: 10500,
        currency: "USD",
      },
    },
  },
};

const inv_mng6 = {
  inventoryManagement: {
    items: [
      {
        itemID: "ITM001",
        itemName: "Brake Pads",
        category: "Braking System",
        quantity: 50,
        unit: "pieces",
        costPerUnit: {
          amount: 20,
          currency: "USD",
        },
        reorderLevel: 10,
        supplierDetails: {
          supplierID: "SUP001",
          supplierName: "AutoParts Supplier Inc.",
          contactNumber: "+1234567890",
          email: "info@autopartsupplier.com",
        },
      },
      {
        itemID: "ITM002",
        itemName: "Engine Oil",
        category: "Engine Components",
        quantity: 100,
        unit: "liters",
        costPerUnit: {
          amount: 10,
          currency: "USD",
        },
        reorderLevel: 20,
        supplierDetails: {
          supplierID: "SUP002",
          supplierName: "Oil Distributors Ltd.",
          contactNumber: "+9876543210",
          email: "sales@oildistributors.com",
        },
      },
    ],
    suppliers: [
      {
        supplierID: "SUP001",
        supplierName: "AutoParts Supplier Inc.",
        contactNumber: "+1234567890",
        email: "info@autopartsupplier.com",
        address: "456 Main St, Supplier City",
      },
      {
        supplierID: "SUP002",
        supplierName: "Oil Distributors Ltd.",
        contactNumber: "+9876543210",
        email: "sales@oildistributors.com",
        address: "789 Supplier St, Oilville",
      },
    ],
    orders: [
      {
        orderID: "ORD001",
        orderDate: "2024-03-01T09:00:00",
        items: [
          {
            itemID: "ITM001",
            quantity: 20,
          },
          {
            itemID: "ITM002",
            quantity: 30,
          },
        ],
        totalCost: {
          amount: 500,
          currency: "USD",
        },
        supplierDetails: {
          supplierID: "SUP001",
          supplierName: "AutoParts Supplier Inc.",
          contactNumber: "+1234567890",
          email: "info@autopartsupplier.com",
        },
        deliveryStatus: "Pending",
        deliveryDate: null,
      },
    ],
    adjustments: [
      {
        adjustmentID: "ADJ001",
        adjustmentDate: "2024-03-15T15:30:00",
        items: [
          {
            itemID: "ITM001",
            adjustedQuantity: -5,
          },
          {
            itemID: "ITM002",
            adjustedQuantity: 10,
          },
        ],
        reason: "Quality check - damaged items",
        adjustedBy: "John Smith",
      },
    ],
    abcAnalysis: [
      {
        itemID: "ITM001",
        category: "A",
        annualConsumptionValue: 1000,
        percentageOfTotalItems: 20,
        cumulativePercentage: 20,
      },
      {
        itemID: "ITM002",
        category: "B",
        annualConsumptionValue: 500,
        percentageOfTotalItems: 10,
        cumulativePercentage: 30,
      },
    ],
  },
};

const inv_mgnt_fin1 = {
  inventoryManagement: {
    items: [
      {
        inventoryID: "INV001",
        itemPartID: "PART123",
        itemName: "Brake Pads",
        itemDescription: "High-performance brake pads for various vehicles",
        itemVehicleBrand: "Various",
        itemVehicleVariant: "",
        itemVehicleModel: "",
        itemTotalQuantity: 100,
        itemConsumedQuantity: 20,
        itemAvailabilityQuantity: 80,
        itemEstimatedQuantityMonthly: 30,
        itemLocation: "Shelf A",
        purchasePrice: {
          amount: 500,
          currency: "USD",
        },
        salesPrice: {
          amount: 700,
          currency: "USD",
        },
        orderDetails: {
          orderID: "ORD001",
          orderDate: "2024-04-01",
          orderedQuantity: 50,
        },
        itemExpiryDate: "2025-06-01",
        itemCategory: "Brake System",
        itemType: "Replacement Part",
        itemThreshold: 50,
        itemMinimumThreshold: 20,
        itemMaximumThreshold: 150,
        itemQuantity: 50,
        itemUnit: "pcs",
        itemCostPerUnit: {
          amount: 10,
          currency: "USD",
        },
        reorderLevel: "Medium",
        supplierDetails: {
          supplierID: "SUP001",
          supplierName: "AutoParts Supplier Inc.",
          contactNumber: "+1234567890",
          email: "info@autopartsupplier.com",
          address: "456 Supplier St, Cityville",
        },
      },
      // Additional Items go here...
    ],
    abcAnalysis: {
      abc: [
        {
          itemID: "INV001",
          category: "A",
          annualConsumptionValue: 15000,
          percentageOfTotalItems: 15,
          cumulativePercentage: 15,
        },
        // Additional ABC Analysis items go here...
      ],
    },
    lastRestockDate: "2024-03-15",
    location: {
      shelfA: {
        items: ["INV001", "INV002"],
      },
      shelfE: {
        items: ["INV003", "INV004"],
      },
    },
  },
};

const inv_mng_fin1 = {
  inventory: [
    {
      inventoryID: "INV12345",
      itemDetails: {
        itemPartID: "PRT001",
        itemName: "Brake Pads",
        itemDescription:
          "High-performance brake pads for various vehicle models.",
        itemVehicleBrand: "Various",
        itemVehicleVariant: null,
        itemVehicleModel: null,
        itemTotalQuantity: 200,
        itemConsumedQuantity: 50,
        itemAvailabilityQuantity: 150,
        itemEstimatedQuantityMonthly: 20,
        itemLocation: "Shelf A",
        purchasePrice: {
          amount: 30,
          currency: "USD",
        },
        salesPrice: {
          amount: 50,
          currency: "USD",
        },
        orderDetails: {
          orderID: "ORD5678",
          orderDate: "2024-03-15",
          supplierDetails: {
            supplierID: "SUP001",
            supplierName: "AutoParts Supplier Inc.",
            contactNumber: "+1234567890",
            email: "info@autopartsupplier.com",
            address: "456 Main St, Cityville",
          },
          quantityOrdered: 100,
          totalCost: {
            amount: 3000,
            currency: "USD",
          },
        },
        itemExpiryDate: null,
        itemCategory: "Brakes",
        itemType: "Replacement Part",
        itemThreshold: 20,
        itemMinimumThreshold: 10,
        itemMaximumThreshold: 200,
        itemQuantity: 150,
        itemUnit: "pcs",
        itemCostPerUnit: {
          amount: 20,
          currency: "USD",
        },
        reorderLevel: 30,
        supplierDetails: {
          supplierID: "SUP001",
          supplierName: "AutoParts Supplier Inc.",
          contactNumber: "+1234567890",
          email: "info@autopartsupplier.com",
          address: "456 Main St, Cityville",
        },
        abcAnalysis: {
          itemID: "PRT001",
          category: "A",
          annualConsumptionValue: 10000,
          percentageOfTotalItems: 20,
          cumulativePercentage: 20,
        },
        lastRestockDate: "2024-03-20",
        location: "Shelf A",
      },
    },
    // Additional Inventory Items go here...
  ],
};

