export const order_meta = [
  {
    orderID: "ORD240112-001",
    orderDate: "2024-06-15",
    orderDetails: [
      {
        inventoryID: "INV1001",
        itemPartID: "BP505",
        itemName: "Brake Pads",
        itemCategory: "Brakes",
        itemType: "Consumable",
        currentStock: 150,
        reorderQuantity: 100,
        itemUnit: "pcs",
        estimatedMonthlyUsage: 20,
        minimumStockLevel: 20,
        maximumStockLevel: 200,
        reorderLevel: true,
      },
    ],
    supplierDetails: {
      supplierID: "SUPP001",
      supplierName: "AutoParts Supplier Inc.",
      contactNumber: "+1234567890",
      email: "info@autopartsupplier.com",
      address: "456 Main St, Supplier City",
    },
    shippingDetails: {
      shippingMethod: "Standard",
      shippingAddress: "123 AutoShop St, AutoCity, AC 12345",
      expectedDeliveryDate: "2024-06-20",
      shippingCost: {
        amount: 50,
        currency: "USD",
      },
    },
      orderTotalAmount: {
        amount: 1500,
        currency: "USD",
      },
      purchasePricePerUnit: {
        amount: 15,
        currency: "USD",
      },
      orderStatus: "Pending",

    paymentInformation: {
      paymentMethod: "Credit Card",
      paymentStatus: "Pending",
      paymentDate: "",
      totalAmount: {
        amount: 1650,
        currency: "USD",
      },
      transactionID: "TXORD240112-001A",
      billingAddress: {
        street: "123 AutoShop St",
        city: "AutoCity",
        state: "AC",
        zipCode: "12345",
        country: "USA",
      },
      vatTax: {
        amount: 100,
        currency: "USD",
      },
    },
    notes: "Please expedite the delivery as we are running low on brake pads.",
    orderTicket: {
      ticketID: "TCK0RD240112-001",
      createdDate: "2024-06-15T14:30:00Z",
      orderDetails: [
        {
          inventoryID: "INV1001",
          itemName: "Brake Pads",
          reorderQuantity: 100,
          itemUnit: "pcs",
        },
      ],
      supplierName: "AutoParts Supplier Inc.",
      shippingAddress: "123 AutoShop St, AutoCity, AC 12345",
      shippingMethod: "Standard",
      expectedDeliveryDate: "2024-06-20",
      orderStatus: "Pending",
    },
  },
];
