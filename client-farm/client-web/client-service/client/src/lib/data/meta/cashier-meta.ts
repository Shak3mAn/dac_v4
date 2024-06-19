export const cashier_metadata = {
  cashierData: {
    employeeId: "CSH123",
    name: "John Doe",
    totalJobCards: 150,
    completedJobCards: 120,
    pendingJobCards: 30,
    totalBookings: 50,
    sales: {
      totalSales: 50000.0,
      lastMonthSales: 15000.0,
      currentMonthSales: 10000.0,
    },
    pickupsRequested: {
      totalPickups: 10,
      pendingPickups: 3,
      completedPickups: 7,
    },
    targets: {
      salesTarget: 75000.0,
      bookingTarget: 60,
      pickupTarget: 12,
    },
    performance: {
      salesPerformance: "80%",
      bookingPerformance: "83.33%",
      pickupPerformance: "58.33%",
    },
    notifications: [
      {
        type: "Alert",
        message: "Low on sales target for the month.",
      },
      {
        type: "Reminder",
      },
    ],
  },
};

export const cashier_meta = {
  cashierData: {
    totalTransactions: 1500,
    totalSales: {
      amount: 75000,
      currency: "USD",
    },
    bookings: {
      total: 200,
      pending: 15,
      completed: 185,
    },
    invoicesProcessed: 180,
    workshopRequests: 25,
    jobCards: {
      total: 170,
      inProgress: 30,
      completed: 140,
    },
    pendingPayments: {
      count: 5,
      amount: 2000,
      currency: "USD",
    },
    pickUpRequests: 10,
    techniciansAvailable: 6,
    performanceMetrics: {
      efficiency: 92.5,
      customerSatisfaction: 4.8,
      responseTime: {
        average: "1.5 hours",
        max: "4 hours",
      },
    },
    targets: {
      sales: {
        monthly: 10000,
        yearly: 120000,
      },
      bookings: {
        monthly: 25,
        yearly: 300,
      },
      jobCards: {
        monthly: 35,
        yearly: 420,
      },
    },
    serviceBays: {
      total: 12,
      available: 6,
    },
    readyForPickUps: 8,
    callbacksAndFollowUps: {
      pending: 3,
      completed: 10,
    },
    inventoryRequests: {
      count: 5,
      items: [
        {
          name: "Oil Filters",
          quantity: 20,
        },
        {
          name: "Brake Pads",
          quantity: 15,
        },
      ],
    },
    inventoryWarnings: {
      count: 2,
      items: [
        {
          name: "Engine Oil",
          quantity: 5,
        },
        {
          name: "Tire Inventory",
          quantity: 0,
        },
      ],
    },
    additionalFeatures: ["CustomFeature1", "CustomFeature2"],
  },
};

const cashier_meta1 = {
  cashier: {
    employeeId: "CSH123",
    name: "John Doe",
    role: "Cashier",
    shift: "Morning",
    targets: {
      dailySalesTarget: 1500.0,
      monthlySalesTarget: 35000.0,
    },
    performance: {
      currentSales: 1200.0,
      salesHistory: [
        { date: "2024-02-01", salesAmount: 1300.0 },
        { date: "2024-02-02", salesAmount: 1100.0 },
        // ... additional sales history
      ],
      averageSales: 1250.0,
      performanceRating: "Exceeds Expectations",
    },
    transactions: {
      totalTransactions: 50,
      voidTransactions: 2,
      refundTransactions: 1,
      successfulTransactions: 47,
    },
    cashHandling: {
      cashDrawerBalance: 500.0,
      cashSales: 1000.0,
      cashRefunds: 50.0,
      cashOverShort: -20.0,
    },
    customerService: {
      satisfiedCustomers: 45,
      dissatisfiedCustomers: 5,
      customerFeedback: [
        { date: "2024-02-15", feedback: "Great service!" },
        { date: "2024-02-20", feedback: "Slow checkout process" },
        // ... additional customer feedback
      ],
    },
    timeClock: {
      clockInTime: "08:00 AM",
      clockOutTime: "04:30 PM",
    },
  },
};

const cashier_meta2 = {
  cashier: {
    employee_id: "CSH123",
    full_name: "John Doe",
    contact_number: "+1 555-1234",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip_code: "12345",
    },
    shift: {
      start_time: "08:00 AM",
      end_time: "05:00 PM",
      days_of_week: ["Monday", "Wednesday", "Friday"],
    },
    wage: {
      hourly_rate: 15.0,
      overtime_rate: 22.5,
    },
    employment_status: "Full-time",
    role: "Cashier",
    supervisor: "Manager Name",
    working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    sales_transactions: [
      {
        transaction_id: "TRX001",
        date: "2024-02-29",
        customer: {
          name: "Jane Smith",
          contact_number: "+1 555-5678",
        },
        items_sold: [
          {
            item_id: "ITM001",
            description: "Oil Change",
            quantity: 1,
            unit_price: 30.0,
            total_price: 30.0,
          },
          {
            item_id: "ITM002",
            description: "Brake Pad Replacement",
            quantity: 2,
            unit_price: 50.0,
            total_price: 100.0,
          },
        ],
        subtotal: 130.0,
        tax_rate: 0.08,
        tax_amount: 10.4,
        total_amount: 140.4,
        payment_method: "Credit Card",
        comments: "Customer requested a receipt via email.",
      },
      // Additional transactions can be added here
    ],
    total_sales: {
      total_transactions: 5,
      total_amount: 750.0,
    },
    cash_handling: {
      cash_drawer_balance: 200.0,
      cash_received: 500.0,
      cash_given: 300.0,
      cash_shortage: 0.0,
      cash_surplus: 0.0,
    },
    attendance: {
      total_hours_worked: 40,
      overtime_hours: 5,
      total_hours_paid: 45,
    },
    performance_metrics: {
      accuracy_rate: 98.5,
      customer_satisfaction: 4.5,
      transaction_completion_time: "00:10:30",
    },
    notes:
      "Employee consistently performs well and handles cash transactions accurately.",
  },
};

export const cashier_meta3 = {
  cashier_data: {
    total_transactions: {
      January: 120,
      February: 150,
      March: 180,
      April: 160,
      May: 200,
      June: 190,
      July: 220,
      August: 210,
      September: 230,
      October: 240,
      November: 220,
      December: 250,
    },
    total_sales: {
      January: 20000,
      February: 25000,
      March: 28000,
      April: 26000,
      May: 30000,
      June: 29000,
      July: 32000,
      August: 31000,
      September: 33000,
      October: 34000,
      November: 32000,
      December: 35000,
    },
    bookings: {
      January: 150,
      February: 180,
      March: 200,
      April: 190,
      May: 220,
      June: 210,
      July: 240,
      August: 230,
      September: 250,
      October: 260,
      November: 240,
      December: 270,
    },
    invoices_processed: {
      January: 140,
      February: 170,
      March: 190,
      April: 180,
      May: 210,
      June: 200,
      July: 230,
      August: 220,
      September: 240,
      October: 250,
      November: 230,
      December: 260,
    },
    workshop_requests: {
      January: 100,
      February: 120,
      March: 140,
      April: 130,
      May: 160,
      June: 150,
      July: 180,
      August: 170,
      September: 190,
      October: 200,
      November: 180,
      December: 210,
    },
    job_cards: {
      January: 90,
      February: 110,
      March: 130,
      April: 120,
      May: 150,
      June: 140,
      July: 170,
      August: 160,
      September: 180,
      October: 190,
      November: 170,
      December: 200,
    },
    pending_payments: {
      January: 20,
      February: 15,
      March: 25,
      April: 18,
      May: 22,
      June: 17,
      July: 30,
      August: 28,
      September: 32,
      October: 29,
      November: 35,
      December: 31,
    },
    pick_up_requests: {
      January: 30,
      February: 35,
      March: 40,
      April: 38,
      May: 45,
      June: 42,
      July: 50,
      August: 48,
      September: 55,
      October: 60,
      November: 52,
      December: 65,
    },
    technicians_available: {
      January: 10,
      February: 10,
      March: 11,
      April: 11,
      May: 12,
      June: 12,
      July: 13,
      August: 13,
      September: 14,
      October: 14,
      November: 15,
      December: 15,
    },
    performance_metrics: {
      January: {
        revenue: 20000,
        transactions: 120,
        customer_satisfaction: 90,
        efficiency: 80,
      },
      February: {
        revenue: 25000,
        transactions: 150,
        customer_satisfaction: 92,
        efficiency: 82,
      },
      March: {
        revenue: 28000,
        transactions: 180,
        customer_satisfaction: 93,
        efficiency: 85,
      },
      April: {
        revenue: 26000,
        transactions: 160,
        customer_satisfaction: 91,
        efficiency: 83,
      },
      May: {
        revenue: 30000,
        transactions: 200,
        customer_satisfaction: 95,
        efficiency: 88,
      },
      June: {
        revenue: 29000,
        transactions: 190,
        customer_satisfaction: 94,
        efficiency: 87,
      },
      July: {
        revenue: 32000,
        transactions: 220,
        customer_satisfaction: 96,
        efficiency: 89,
      },
      August: {
        revenue: 31000,
        transactions: 210,
        customer_satisfaction: 95,
        efficiency: 88,
      },
      September: {
        revenue: 33000,
        transactions: 230,
        customer_satisfaction: 97,
        efficiency: 90,
      },
      October: {
        revenue: 34000,
        transactions: 240,
        customer_satisfaction: 98,
        efficiency: 92,
      },
      November: {
        revenue: 32000,
        transactions: 220,
        customer_satisfaction: 96,
        efficiency: 89,
      },
      December: {
        revenue: 35000,
        transactions: 250,
        customer_satisfaction: 99,
        efficiency: 94,
      },
    },
    various_targets: {
      revenue: 400000,
      transactions: 2500,
      customer_satisfaction: 95,
      efficiency: 85,
    },
    service_bays_available: 15,
    ready_for_pick_ups: 70,
    callbacks_followups: {
      callbacks: 25,
      followups: 20,
    },
    inventory_requests_warnings: {
      requests: 15,
      warnings: 5,
    },
    other_features: {
      maintenance_logs: true,
      customer_feedback: true,
      loyalty_program: true,
      referral_program: true,
      staff_training_records: true,
    },
  },
};

export const cashier_meta4 = {
  cashierData: {
    totalTransactions: 1200,
    totalSales: {
      January: 50000,
      February: 60000,
      March: 75000,
      // ... continued for each month
      December: 90000,
    },
    bookings: {
      totalBookings: 150,
      pendingBookings: 20,
      completedBookings: 130,
    },
    invoicesProcessed: {
      totalInvoices: 110,
      paidInvoices: 90,
      unpaidInvoices: 20,
    },
    workshopRequests: {
      totalRequests: 80,
      approvedRequests: 70,
      rejectedRequests: 10,
    },
    jobCards: {
      totalJobCards: 100,
      completedJobCards: 80,
      pendingJobCards: 20,
    },
    pendingPayments: 5,
    pickUpRequests: {
      totalRequests: 15,
      approvedRequests: 10,
      rejectedRequests: 5,
    },
    techniciansAvailable: 6,
    performanceMetrics: {
      January: {
        totalSales: 5000,
        profit: 2500,
        customerSatisfaction: 4.5,
        // ... other metrics
      },
      // ... continued for each month
      December: {
        // metrics for December
      },
    },
    targets: {
      monthlySalesTarget: 80000,
      customerSatisfactionTarget: 4.7,
      // ... other targets
    },
    serviceBaysAvailable: 10,
    readyForPickUps: 15,
    callbacksAndFollowUps: {
      totalCallbacks: 5,
      followUpNeeded: 3,
      followUpCompleted: 2,
    },
    inventoryRequests: {
      totalRequests: 25,
      approvedRequests: 20,
      rejectedRequests: 5,
    },
    inventoryWarnings: {
      lowStock: ["Oil", "Brake Pads"],
      expiredStock: ["Air Filters"],
    },
  },
};

export const cashier_meta5 = {
  cashier: {
    total_transactions: 1523,
    total_sales: 78500.0,
    bookings: {
      total_bookings: 312,
      workshop_requests: 65,
      job_cards: 247,
    },
    invoices_processed: {
      total_invoices: 1423,
      pending_payments: 65,
      ready_for_pickup: 48,
    },
    technicians_available: 8,
    performance_metrics: {
      customer_satisfaction: 92.5,
      service_quality: 87.3,
      "on-time_delivery": 94.8,
    },
    targets: {
      sales_target: 100000.0,
      booking_target: 350,
      invoice_target: 1500,
    },
    service_bays_available: 10,
    callbacks_follow_ups: {
      callbacks_required: 15,
      follow_ups_required: 20,
    },
    inventory: {
      inventory_requests: 35,
      inventory_warnings: 5,
    },
  },
};
