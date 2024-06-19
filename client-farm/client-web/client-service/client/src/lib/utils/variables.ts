import { SignatureColor, SignatureFont } from "../types/types";

/*
 * Environment
 */
export const ENV = process.env.NODE_ENV;

/**
 * API endpoints
 */
export const GENERATE_INVOICE_PDF_API = "/api/invoice/generate";
export const SEND_INVOICE_PDF_API = "/api/invoice/send";
export const EXPORT_INVOICE_API = "/api/invoice/export";
export const GENERATE_JOB_CARD_PDF_API = "/api/job-card/generate";
export const SEND_JOB_CARD_PDF_API = "/api/job-card/send";
export const EXPORT_JOB_CARD_API = "/api/job-card/export";
export const GENERATE_GATE_PASS_PDF_API = "/api/gate-pass/generate;";
export const SEND_GATE_PASS_PDF_API = "/api/gate-pass/send";
export const EXPORT_GATE_PASS_PDF_API = "/api/gate-pass/export";

/**
 * Chromium for Puppeteer
 */
export const CHROMIUM_EXECUTABLE_PATH =
  "https://github.com/Sparticuz/chromium/releases/download/v119.0.0/chromium-v119.0.0-pack.tar";

/**
 * Tailwind
 */
export const TAILWIND_CDN =
  "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

/**
 * External API endpoints
 */
export const CURRENCIES_API =
  "https://openexchangerates.org/api/currencies.json";

/**
 * Signature variables
 */
export const SIGNATURE_COLORS: SignatureColor[] = [
  { name: "black", label: "Black", color: "rgb(0, 0, 0)" },
  { name: "dark blue", label: "Dark Blue", color: "rgb(0, 0, 128)" },
  {
    name: "crimson",
    label: "Crimson",
    color: "#DC143C",
  },
];

export const SIGNATURE_FONTS: SignatureFont[] = [
  {
    name: "Dancing Script",
    variable: "var(--font-dancing-script)",
  },
  { name: "Parisienne", variable: "var(--font-parisienne)" },
  {
    name: "Great Vibes",
    variable: "var(--font-great-vibes)",
  },
  {
    name: "Alex Brush",
    variable: "var(--font-alex-brush)",
  },
];

/**
 * Form date options
 */
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

/**
 * Form defaults
 */
export const FORM_DEFAULT_VALUES = {
  sender: {
    name: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    customInputs: [],
  },
  receiver: {
    name: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    customInputs: [],
  },
  details: {
    invoiceLogo: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    items: [
      {
        name: "",
        description: "",
        quantity: 0,
        unitPrice: 0,
        total: 0,
      },
    ],
    currency: "USD",
    language: "English",
    taxDetails: {
      amount: 0,
      amountType: "amount",
      taxID: "",
    },
    discountDetails: {
      amount: 0,
      amountType: "amount",
    },
    shippingDetails: {
      cost: 0,
      costType: "amount",
    },
    paymentInformation: {
      bankName: "",
      accountName: "",
      accountNumber: "",
    },
    additionalNotes: "",
    paymentTerms: "",
    totalAmountInWords: "",
    pdfTemplate: 1,
  },
};

export const JOB_CARD_FORM_DEFAULT_VALUES = {
  pdfTemplate: 1,
  shopDetails: {
    name: "",
    address: "",
    zipCode: "",
    postalBox: "",
    city: "",
    country: "",
    email: "",
    contactNumber: "",
    customInputs: [],
  },
  customerDetails: {
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    customInputs: [],
  },
  fleetDetails: {
    companyName: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    address: "",
  },
  insurerDetails: {
    insurerName: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    address: "",
  },
  vehicleDetails: {
    make: "",
    model: "",
    year: 0,
    licensePlate: "",
    vin: "",
    chassisNumber: "",
    insuranceDetails: {
      provider: "",
      policyNumber: "",
    },
  },
  jobCardDetails: {
    jobCardID: "",
    jobType: "",
    companyLogo: "",
    jobCardDate: "",
    jobStartDate: "",
    jobEstimatedCompletionDate: "",
    jobActualCompletionDate: "",
    vehicleDeliveryDate: "",
    customerIssueDescription: "",
    servicesDetails: [
      {
        name: "",
        description: "",
      },
    ],
    actionTaken: "",
    actualWorkshopFinding: "",
    remarks: "",
    technicians: [{ name: "" }],
  },
  checkListForm: {
    information: {
      mileage: "",
      fuelLevelId: "",
      remarks: "",
      additionalNotes: "",
    },
    checkListTypeOne: {
      brakePadStatus: "",
      fluids: "",
      engineOilLevelId: "",
      coolantLevelId: "",
      brakeClutchFluidLevelId: "",
      powerSteeringLevelId: "",
      batteryConditionId: "",
      isOilWasteLeaks: false,
    },
    checkListTypeTwo: {
      isJack: false,
      isVehicleCharger: false,
      isWhlSpanner: false,
      isDoorMirrors: false,
      isSunvisor: false,
      isSteeringCover: false,
      isSeatCover: false,
      isCDChanger: false,
      isMatsCarpets: false,
      isCigaretteLighter: false,
      isRadio: false,
      isWheelCaps: false,
      isSpareWheel: false,
      isPunctureKit: false,
      isTriangle: false,
      isRimLock: false,
      isSpecialWhlNut: false,
      isBodyCover: false,
      isDocuments: false,
      isAirFreshner: false,
    },
  },
};

/**
 * ? DEV Only
 * Form auto fill values for testing
 */
export const FORM_FILL_VALUES = {
  sender: {
    name: "John Doe",
    address: "123 Main St",
    zipCode: "12345",
    city: "Anytown",
    country: "USA",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  },
  receiver: {
    name: "Jane Smith",
    address: "456 Elm St",
    zipCode: "54321",
    city: "Other Town",
    country: "Canada",
    email: "janesmith@example.com",
    phone: "987-654-3210",
  },
  details: {
    invoiceLogo: "",
    invoiceNumber: "INV0001",
    invoiceDate: new Date(),
    dueDate: new Date(),
    items: [
      {
        name: "Product 1",
        description: "Description of Product 1",
        quantity: 4,
        unitPrice: 50,
        total: 200,
      },
      {
        name: "Product 2",
        description: "Description of Product 2",
        quantity: 5,
        unitPrice: 50,
        total: 250,
      },
      {
        name: "Product 3",
        description: "Description of Product 3",
        quantity: 5,
        unitPrice: 80,
        total: 400,
      },
    ],
    currency: "USD",
    language: "English",
    taxDetails: {
      amount: 15,
      amountType: "percentage",
      taxID: "987654321",
    },
    discountDetails: {
      amount: 5,
      amountType: "percentage",
    },
    shippingDetails: {
      cost: 5,
      costType: "percentage",
    },
    paymentInformation: {
      bankName: "Bank Inc.",
      accountName: "John Doe",
      accountNumber: "445566998877",
    },
    additionalNotes: "Thank you for your business",
    paymentTerms: "Net 30",
    signature: {
      data: "",
    },
    subTotal: "850",
    totalAmount: "850",
    totalAmountInWords: "Eight Hundred Fifty",
    pdfTemplate: 1,
  },
};
