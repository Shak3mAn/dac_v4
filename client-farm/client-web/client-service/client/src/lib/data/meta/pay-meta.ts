export const pay_process_meta = {
  paymentManagement: {
    transactions: [
      {
        transactionID: "TRN123456",
        jobCardID: "JC12345",
        customerName: "John Doe",
        amount: {
          total: 150,
          currency: "USD",
        },
        status: "Pending",
        paymentMethod: "Credit Card",
        paymentDate: null,
        dueDate: "2024-03-05",
        paymentNotes:
          "Customer informed about pending payment, awaiting confirmation.",
      },
      {
        transactionID: "TRN789012",
        jobCardID: "JC23232",
        customerName: "Emma Turner",
        amount: {
          total: 110,
          currency: "USD",
        },
        status: "Processing",
        paymentMethod: "Cash",
        paymentDate: null,
        dueDate: "2024-03-10",
        paymentNotes: "Cash payment received, processing documentation.",
      },
      {
        transactionID: "TRN345678",
        jobCardID: "JC40404",
        customerName: "Chloe Harris",
        amount: {
          total: 270,
          currency: "USD",
        },
        status: "Pending",
        paymentMethod: "Bank Transfer",
        paymentDate: null,
        dueDate: "2024-03-15",
        paymentNotes: "Bank transfer initiated, awaiting confirmation.",
      },
      // Add more transactions as needed
    ],
    paymentMethods: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer",
      "Cheque",
      // Add more payment methods as needed
    ],
    paymentStatuses: [
      "Pending",
      "Processing",
      "Cleared",
      "Cancelled",
      // Add more payment statuses as needed
    ],
    paymentReports: {
      totalRevenue: {
        amount: 5000,
        currency: "USD",
      },
      pendingPayments: {
        count: 8,
        amount: 1200,
        currency: "USD",
      },
      processingPayments: {
        count: 4,
        amount: 550,
        currency: "USD",
      },
      clearedPayments: {
        count: 18,
        amount: 3250,
        currency: "USD",
      },
    },
  },
};

const pay_process_2 = {
  payment: {
    paymentID: "PAY123456",
    invoiceDetails: {
      invoiceID: "INV789012",
      jobCardID: "JC606060",
      customerDetails: {
        name: "Chloe Turner",
        contactNumber: "+9876543210",
        email: "chloe.t@example.com",
        address: "789 Birch St, Suburbville",
      },
      totalCost: {
        amount: 85,
        currency: "USD",
      },
      servicesDetails: [
        {
          name: "Transmission Fluid Change",
          description: "Replace Transmission Fluid and Filter",
          cost: {
            amount: 85,
            currency: "USD",
          },
        },
      ],
    },
    paymentAmount: {
      amount: 50,
      currency: "USD",
    },
    paymentStatus: "PaymentPending",
    paymentMethod: "CreditCard",
    paymentTimestamp: "2024-03-31T11:45:00",
    additionalDetails: ["CustomDetail1", "CustomDetail2"],
  },
};

export const payment_process_meta = {
  paymentTransactions: [
    {
      transactionID: "TXN123",
      invoiceID: "INV567",
      invoiceDetails: {
        issuedDate: "2024-04-01T15:30:00",
        dueDate: "2024-04-15T23:59:59",
        jobCardID: "JC606060",
        vehicleVIN: "VIN6789012345",
        vehicleRegistration: "HON567",
        customerDetails: {
          name: "Chloe Turner",
          contactNumber: "+9876543210",
          email: "chloe.t@example.com",
          address: "789 Birch St, Suburbville",
        },
        paymentStatus: "Pending",
        paymentMethods: ["Credit Card", "Bank Transfer"],
        paymentGateway: "ShopifyPayments",
        discountEligibility: true,
        couponsEligibility: true,
        discounts: [
          {
            name: "Early Payment Discount",
            percentage: 5,
          },
        ],
        coupons: [
          {
            code: "NEWCUSTOMER10",
            discountAmount: 10,
          },
        ],
        totalCost: {
          amount: 85,
          currency: "USD",
        },
        costBreakdown: {
          parts: 60,
          labor: 25,
        },
      },
      paymentDueDate: "2024-04-15T23:59:59",
      paymentPaidInFull: false,
      paymentStages: [
        {
          stageID: "STAGE1",
          amount: 40,
          currency: "USD",
          paymentDate: "2024-04-10T12:30:00",
          paymentType: "Credit Card",
          paymentTypeID: "CC1234",
        },
        {
          stageID: "STAGE2",
          amount: 45,
          currency: "USD",
          paymentDate: null,
          paymentType: "Bank Transfer",
          paymentTypeID: "BT5678",
        },
      ],
    },
    {
      transactionID: "TXN124",
      invoiceID: "INV568",
      invoiceDetails: {
        issuedDate: "2024-04-02T09:00:00",
        dueDate: "2024-04-16T23:59:59",
        jobCardID: "JC585858",
        vehicleVIN: "VIN3456789012",
        vehicleRegistration: "ABC789",
        customerDetails: {
          name: "Emma Harris",
          contactNumber: "+1234567890",
          email: "emma.h@example.com",
          address: "123 Cedar St, Townsville",
        },
        paymentStatus: "Processing",
        paymentMethods: ["Cash", "Cheque"],
        paymentGateway: "Square",
        discountEligibility: false,
        couponsEligibility: false,
        discounts: [],
        coupons: [],
        totalCost: {
          amount: 75,
          currency: "USD",
        },
        costBreakdown: {
          parts: 40,
          labor: 35,
        },
      },
      paymentDueDate: "2024-04-16T23:59:59",
      paymentPaidInFull: false,
      paymentStages: [
        {
          stageID: "STAGE3",
          amount: 40,
          currency: "USD",
          paymentDate: "2024-04-11T14:45:00",
          paymentType: "Cash",
          paymentTypeID: "CSH4321",
        },
        {
          stageID: "STAGE4",
          amount: 35,
          currency: "USD",
          paymentDate: null,
          paymentType: "Cheque",
          paymentTypeID: "CHQ8765",
        },
      ],
    },
  ],
  paymentReports: {
    totalRevenue: {
      count: 25,
      amount: 3000,
      currency: "USD",
    },
    pendingPayments: {
      count: 10,
      amount: 1200,
      currency: "USD",
    },
    processingPayments: {
      count: 8,
      amount: 800,
      currency: "USD",
    },
    clearedPayments: {
      count: 7,
      amount: 1000,
      currency: "USD",
    },
  },
};
