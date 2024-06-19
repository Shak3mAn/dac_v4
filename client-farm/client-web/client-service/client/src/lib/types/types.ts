import z from "zod";
import { UniqueIdentifier } from "@dnd-kit/core";

import { FieldPath, UseFormReturn } from "react-hook-form";

// Zod schemas
import { InvoiceSchema, ItemSchema } from "@/lib/schema/invoice-schema";
import {
  JobCardSchema,
  JobCardServiceDetailsSchema,
} from "@/lib/schema/job-card-schema";

// Form types
export type InvoiceType = z.infer<typeof InvoiceSchema>;
export type ItemType = z.infer<typeof ItemSchema>;
export type JobCardType = z.infer<typeof JobCardSchema>;
export type JobCardServiceDetailsType = z.infer<
  typeof JobCardServiceDetailsSchema
>;
export type FormType = UseFormReturn<InvoiceType>;
export type NameType = FieldPath<InvoiceType>;
export type CurrencyType = {
  [currencyCode: string]: string;
};

// Signature Types
export type SignatureColor = {
  name: string;
  label: string;
  color: string;
};

export type SignatureFont = {
  name: string;
  variable: string;
};

export enum SignatureTabs {
  DRAW = "draw",
  TYPE = "type",
  UPLOAD = "upload",
}

// Wizard Types
export type WizardStepType = {
  id: number;
  label: string;
  isValid?: boolean;
};

// Export Types
export enum ExportTypes {
  JSON = "JSON",
  CSV = "CSV",
  XML = "XML",
  XLSX = "XLSX",
  DOCX = "DOCX",
}

// DND Types
export type DndType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
};

{/* --------------------------------------------------------- */}

{
  /* JC: Job Card */
}
{/* --------------------------------------------------------- */}
interface JCVehicleDetails {
  make: string;
  model: string;
  vehicleType: string;
  year?: number;
  licensePlate?: string;
  vin?: string;
}

interface JCCustomerDetails {
  name: string;
  contactNumber: string;
  email?: string;
  address: string;
}

interface JCInsuranceDetails {
  provider: string;
  policyNumber: string;
}

interface JCGeneralInspection {
  id: string;
  name: string;
  inspectionList: InspectionItem[];
}

export interface JCTechnician {
  id: string;
  name: string;
}

interface JCPartCost {
  amount: number;
  currency: string;
}

interface JCPart {
  name: string;
  quantity: number;
  cost: JCPartCost;
}

interface JCLogEntry {
  trigger: string;
  action: string;
  dateTime: string;
}

interface JCEventsLog {
  createdAtDateTime: string;
  startDateTime?: string;
  estimatedCompletionTime?: string;
  actualCompletionTime?: string;
  activityLog: JCLogEntry[];
  paymentLog?: JCLogEntry[];
}

export interface JCServiceCost {
  amount: number;
  currency: string;
}

interface JCBookingDetails {
  scheduledAppointmentDateTime: string;
  initialDeposit: number;
  paymentMethod: string;
  bookingType: string;
  vehicleDelivery: string;
}

interface JCBookingRequirements {
  insuranceNeeded: boolean;
  advancedBookingRequired: boolean;
  initialDepositPercentage: number;
      cancellationPolicy: string;
}

export type JCServiceDetail = {
  id: string;
  name: string;
  description: string;
  cost: JCServiceCost;
  quantity: number;
  status: string;
  authorization: string;
  category: string;
  technicians?: JCTechnician[];
};

interface JCCosting {
  parts: number;
  labor: number;
  vat_tax: number;
  total: number;
  currency: string;
}

interface JCPaymentTransactions {
  transactionID: string;
  invoiceID: string;
}

interface JCCustomerReviews {
  reviewID: string;
  customerName: string;
  reviewDate: string;
  rating: number;
  review: string;
}

interface JCComplementaryServices {
  complementaryServiceID: string;
  complementaryServiceName: string;
  description?: string;
}

export interface JobCardDetailsType {
  jobCardID: string;
  vehicleDetails?: JCVehicleDetails;
  customerDetails?: JCCustomerDetails;
  jobPriority?: string;
  jobType?: string;
  customerIssueDescription: string;
  insuranceDetails?: JCInsuranceDetails;
  inspectionChecklist?: JCGeneralInspection[];
  currentServiceBay?: number;
  technicians?: JCTechnician[];
  partsUsed?: JCPart[];
  createdAtDateTime: string;
  cardWriter: string;
  startDateTime?: string;
  estimatedCompletionTime?: string;
  actualCompletionTime?: string;
  eventsLog: JCEventsLog;
  servicesDetails?: JCServiceDetail[];
  bookingDetails?: JCBookingDetails;
  bookingRequirements?: JCBookingRequirements;
  actionTaken?: string;
  actualWorkshopFinding?: string;
  costing?: JCCosting;
  paymentStatus?: string;
  paymentTransactions?: JCPaymentTransactions[];
  remarks?: string;
  status?: string;
  workflowStatus: string;
  additionalFeatures?: string[];
  customerReviews?: JCCustomerReviews[];
  complementaryServices?: JCComplementaryServices[]
}

{/* --------------------------------------------------------- */}
{
  /* Inventory Data */
}
{/* --------------------------------------------------------- */}

interface InventoryPrice {
  amount: number;
  currency: string;
}

interface InventoryOrderDetails {
  orderID: string;
  orderDate: string;
  receivedDate: string;
  orderedQuantity: number;
}

export interface InventorySupplierDetails {
  supplierID: string;
  supplierName: string;
  contactNumber: string;
  email: string;
  address: string;
}

interface InventoryAbcAnalysis {
  itemID: string;
  category: string;
  annualConsumptionValue: number;
  percentageOfTotalItems: number;
  cumulativePercentage: number;
}

export interface InventoryItem {
  inventoryID: string;
  itemPartID: string;
  itemName: string;
  itemDescription: string;
  itemVehicleBrand?: string;
  itemVehicleVariant?: string;
  itemVehicleModel?: string;
  itemTotalQuantity: number;
  itemConsumedQuantity: number;
  itemAvailabilityQuantity: number;
  itemEstimatedQuantityMonthly: number;
  itemLocation?: string;
  purchasePrice: InventoryPrice;
  salesPrice: InventoryPrice;
  orderDetails?: InventoryOrderDetails;
  itemExpiryDate: string;
  itemCategory: string;
  itemType: string;
  itemThreshold: number;
  itemMinimumThreshold: number;
  itemMaximumThreshold: number;
  itemQuantity: string;
  itemUnit: string;
  itemCostPerUnit: InventoryPrice;
  reorderLevel: string;
  supplierDetails: InventorySupplierDetails;
  abcAnalysis: InventoryAbcAnalysis;
  lastRestockDate: string;
  location: string;
}

{/* --------------------------------------------------------- */}
{
  /* Job Card Service Item */
}
{/* --------------------------------------------------------- */}

interface SrvSubcontractorService {
  serviceID: string;
  serviceName: string;
  serviceCategory: string;
  description: string;
  hourlyRate: number;
  availability: string;
  averageDeliveryTime: string;
}

interface SrvSubcontractor {
  subcontractorID: string;
  subcontractorName: string;
  subcontractorCategoryServices: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  service: SrvSubcontractorService[];
}

interface SrvPartIncluded {
  inventoryID: string;
  partName: string;
  itemPartID: string;
  quantity: number;
  price: number;
  type: string;
  discountApplicable: boolean;
  discount: number;
}

interface SrvLabourCost {
  amount: number;
  currency: string;
  description?: string;
}

interface SrvTotalCost {
  amount: number;
  vat_tax: number;
  currency: string;
}

interface SrvWorkingHours {
  start: string;
  end: string;
}

interface SrvAvailability {
  daysRequired: number;
  startAvailability: string;
  endAvailability: string;
  workingHours: SrvWorkingHours;
}

export interface ServiceOption {
  id: string;
  catId: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: number;
  laborPrice: number;
  discount: number;
  vat_tax: number;
  laborPricing: string;
  subcontractor?: SrvSubcontractor[];
  serviceItems: SrvPartIncluded[];
  labourCost: SrvLabourCost;
  totalCost?: SrvTotalCost;
  availability?: SrvAvailability;
}

{/* --------------------------------------------------------- */}
{
  /* Subcontractor */
}
{/* --------------------------------------------------------- */}
export interface SubcontractorService {
  serviceID: string;
  serviceName: string;
  serviceCategory: string;
  description: string;
  hourlyRate?: number;
  availability?: string;
  averageDeliveryTime?: string;
}

export interface SubcontractorDataType {
  subcontractorID: string;
  subcontractorName: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  postalBox: string;
  zipCode?: string;
  subcontractorPriorityIndex?: number;
  subcontractorCategoryServices?: string;
  servicesOffered?: SubcontractorService[];
  subcontractorCompositeScoreOfPricing?: number;
  subcontractorPerformanceRatingSystem?: number;
  subcontractorSERVQUAL?: number;
}

{/* --------------------------------------------------------- */}
{
  /* Inspection Types */
}
{/* --------------------------------------------------------- */}
interface InspectionItem {
  id: string;
  inspectionItem: string;
}

export interface InspectionList {
  id: string;
  name: string;
  inspectionList: InspectionItem[];
}

{/* --------------------------------------------------------- */}
{/* Reorder Inventory Types */}
{/* --------------------------------------------------------- */}
export type InvOrderDetail = {
  inventoryID: string;
  itemPartID: string;
  itemName: string;
  itemCategory: string;
  itemType: string;
  currentStock?: number;
  reorderQuantity: number;
  itemUnit: string;
  estimatedMonthlyUsage?: number;
  minimumStockLevel?: number;
  maximumStockLevel?: number;
  reorderLevel: boolean;
};

export type InvSupplierDetails = {
  supplierID: string;
  supplierName: string;
  contactNumber: string;
  email: string;
  address: string;
};

export type InvShippingCost = {
  amount: number;
  currency: string;
};

export type InvShippingDetails = {
  shippingMethod: string;
  shippingAddress: string;
  expectedDeliveryDate: string;
  shippingCost: InvShippingCost;
};

export type InvOrderTotalAmount = {
  amount: number;
  vat_tax?: number;
  currency: string;
};

export type InvPurchasePricePerUnit = {
  amount: number;
  vat_tax?: number;
  currency: string;
};

export type InvBillingAddress = {
  street: string;
  city: string;
  state?: string;
  zipCode: string;
  country: string;
};

export type InvVatTax = {
  amount: number;
  currency: string;
};

export type InvPaymentInformation = {
  paymentMethod: string;
  paymentStatus: string;
  paymentDate: string;
  totalAmount: InvOrderTotalAmount;
  transactionID: string;
  billingAddress: InvBillingAddress;
  vatTax?: InvVatTax;
};

export type InvOrderTicketDetail = {
  inventoryID: string;
  itemName: string;
  reorderQuantity: number;
  itemUnit: string;
};

export type InvOrderTicket = {
  ticketID: string;
  createdDate: string;
  orderCreator: string;
  orderDetails: InvOrderTicketDetail[];
  supplierName: string;
  shippingAddress: string;
  shippingMethod: string;
  expectedDeliveryDate: string;
  orderStatus: string;
};

export type ReorderInvType = {
  orderID: string;
  orderDate: string;
  orderCreator: string;
  orderDetails: InvOrderDetail[];
  supplierDetails: InvSupplierDetails;
  shippingDetails: InvShippingDetails;
  orderTotalAmount: InvOrderTotalAmount;
  purchasePricePerUnit: InvPurchasePricePerUnit;
  orderStatus: string;
  paymentInformation: InvPaymentInformation;
  notes?: string;
  orderTicket: InvOrderTicket;
};

{/* ----------------------------------------------------- */}
{/* Broker Data Types */}
{/* ----------------------------------------------------- */}
export interface BrokerType {
  brokerID: string;
  brokerName: string;
  contactPerson: string;
  contactNumber?: string;
  secondContactNumber?: string;
  workEmail?: string;
  personalEmail?: string;
  address: string;
  kraTaxPin?: string;
  nhifNumber?: string;
  amountOfReferrals: number;
  brokerReferralCustomerGenerationScore?: number;
  brokerTotalReferralsRevenueGeneration?: number;
  brokerReferralsRevenueGenerationperAnnum?: number;
  brokerPriorityIndex?: number;
  lastReferralDateTime: string; // Assuming ISO 8601 format for date-time
  referralDetails?: BrokerReferral[];
}

interface BrokerReferral {
  referralId: string;
  referralName: string;
  referralDateTime: string; // Assuming ISO 8601 format for date-time
  referralType: string; // Assuming limited types for referral type
}

{/* ----------------------------------------------------- */}
{/* Cashier Data Types */}
{/* ----------------------------------------------------- */}
export interface CashierType {
  cashierId: string;
  dateOfBirth: string; // Assuming ISO 8601 format for date
  fullName: string;
  firstName: string;
  lastName: string;
  initial?: string;
  email: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  kraTaxPin?: string;
  nhifNumber?: string;
  address: string;
  leaveDates?: string[]; // Array of ISO 8601 date strings
  registrationDate: string; // Assuming ISO 8601 format for date
  commencementDate?: string; // Assuming ISO 8601 format for date
  annualLeaveAmount?: number;
  bonusState: "Eligible" | "Not Eligible"; // Assuming limited options for bonus state
  bonusAmount?: number;
  salesTarget?: number;
  totalJobCardsProcessed?: number;
  jobCardsProcessedMonthly?: {
    [key: string]: number; // Monthly job card processing counts
  };
  totalInvoicesProcessed?: number;
  totalBookingsProcessed?: number;
  totalFollowUpRequests?: number;
  certifications?: CashierCertification[];
}

interface CashierCertification {
  certificationName: string;
  attachment: string; // File path or URL to certification attachment
}

{/* ----------------------------------------------------- */}
{/* Customer Data Types */}
{/* ----------------------------------------------------- */}
export interface CustomerType {
  customerId: string;
  customerName: string;
  customerInitial: string;
  customerEmail: string;
  customerPhone: string;
  customerRegistrationDate: string; // Assuming ISO 8601 format for date
  customerStatus: "Active" | "Inactive"; // Assuming limited options for customer status
  customerPriority: string; // Assuming priority levels

  vehicles?: CustomerVehicle[];
}

interface CustomerVehicle {
  vehicleId: string;
  make: string;
  model: string;
  registrationNumber: string;
  insurancePolicyNumber?: string;
  fuelType: string;
  wheelBase?: string;
  vinChassisNumber: string;
  vehicleType: string;
  manufacturer: string;
  mileage: string; // Assuming mileage can be represented as a string
  status: string; // Assuming limited options for vehicle status
  manufacturedDate?: string; // Assuming ISO 8601 format for date
  garageVisitAmount: number;

  jobCards?: CustomerJobCard[];
}

interface CustomerJobCard {
  jobCardId: number;
  status?: string; // Assuming job card status options
  lastUpdated:string; // Assuming ISO 8601 format for date
  pendingAmount?: number;
  servicesOffered?: string[];
  inspectionDetails?: CustomerInspectionDetails;
  allocatedTechnician?: CustomerAllocatedTechnician;
  allocatedSupervisor?: CustomerAllocatedSupervisor;
}

interface CustomerInspectionDetails {
  inspectionDate: string; // Assuming ISO 8601 format for date
  inspectionStatus: string; // Assuming inspection status options
  inspectorName: string;
  inspectionComments: string;
}

interface CustomerAllocatedTechnician {
  technicianId: number;
  technicianName: string;
  specialization: string[];
}

interface CustomerAllocatedSupervisor {
  supervisorId: number;
  supervisorName: string;
  department: string;
}

{/* ----------------------------------------------------- */}
{/* Fleet Data Types */}
{/* ----------------------------------------------------- */}
export interface FleetType {
  companyID: string;
  companyName: string;
  contactPerson: string;
  contactNumber: string;
  contactNumberTwo?: string;
  email: string;
  address: string;
  clientPriority?: string; // Assuming priority levels
  clientJoiningDate: string; // Assuming ISO 8601 format for date
  amountOfJobs?: number;
  lastJobStartingDate?: string; // Assuming ISO 8601 format for date
  clientSatisfactionLevel?: number; // Assuming a scale from 1 to 5
  totalRevenueGenerated: number;
  clientComplaints?: number;
  clientFeedback?: string;
  fleetSize: number;

  fleetDetails: FleetVehicle[];
}

interface FleetVehicle {
  vehicleId: string;
  make: string;
  model: string;
  registrationNumber: string;
  insurancePolicyNumber?: string;
  fuelType: string;
  wheelBase?: string; // Example wheel base types
  vinChassisNumber: string;
  vehicleType: string;
  manufacturer: string;
  mileage: number;
  status?: string; // Assuming limited options for vehicle status
  manufacturedDate?: string; // Assuming ISO 8601 format for date
  garageVisitAmount: number;
  lastGarageVisit: string; // Assuming ISO 8601 format for date
  coldJobEnquiry: boolean;
  coldJobEnquiryDetails?: FleetColdJobDetails | null;
  activeJobCards: boolean;
  jobCardDetails?: FleetJobCardDetails | null;
}

interface FleetColdJobDetails {
  coldJobID: string;
  coldJobCreatedDateTime: string; // Assuming ISO 8601 format for date
  coldJobClientIssueDescription: string;
  coldJobServiceName: string;
  coldJobResponseDateTime?: string; // Assuming ISO 8601 format for date
  coldJobRemiderDateTime?: string; // Assuming ISO 8601 format for date
}

interface FleetJobCardDetails {
  jobCardId: string;
}

{/* ----------------------------------------------------- */}
{/* General Worker Data Types */}
{/* ----------------------------------------------------- */}
export interface GeneralWorkerType {
  employeeId: string;
  dateOfBirth: string; // Assuming ISO 8601 format for date
  fullName: string;
  firstName: string;
  lastName: string;
  initial?: string;
  email: string;
  phoneNumber: string;
  kraTaxPin?: string;
  nhifNumber?: string;
  address?: string;
  leaveDates?: string[]; // Array of leave dates in ISO 8601 format
  registrationDate: string; // Assuming ISO 8601 format for date
  commencementDate?: string; // Assuming ISO 8601 format for date
  annualLeaveAmount?: number;
  bonusState?: string; // Assuming bonus eligibility states
  bonusAmount?: number;
  role?: string; // Specific role within the auto shop
  certifications?: GeneralWorkerCertification[];
}

interface GeneralWorkerCertification {
  certificationName: string;
  attachment: string; // File path or URL to certification document
}

{/*------------------------------------------------------ */}
{/* Insurance Accident Data Type */}
{/* ----------------------------------------------------- */}
export interface InsuranceClaimType {
  insurerName: string;
  policyNumber: string;
  claimNumber: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  insuranceJobId: string;
  accidentDetails: InsuranceClaimAccidentDetails;
}

interface InsuranceClaimAccidentDetails {
  accidentDate: string; // Assuming ISO 8601 format for date
  accidentLocation?: string;
  vehicleDamage?: string;
  policyHolderName?: string;
  vehicleDetails: InsuranceClaimVehicleDetails;
  repairDetails?: InsuranceClaimRepairDetails;
}

interface InsuranceClaimVehicleDetails {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  vin: string;
}

interface InsuranceClaimRepairDetails {
  jobCommencementDate: string; // Assuming ISO 8601 format for date
  estimatedDateOfCompletion?: string; // Assuming ISO 8601 format for date
  actualDateOfCompletion?: string; // Assuming ISO 8601 format for date
  jobCardId: string;
  repairType: string;
  repairDescription?: string;
}

{/* --------------------------------------------------- */}
{/* Insurer Data Type */}
{/* ---------------------------------------------------- */}
export interface InsurerType {
  insurerID: string;
  insurerName: string;
  contactPerson: string;
  contactNumber: string;
  contactNumberTwo?: string;
  email: string;
  address: string;
  insurerAmountOfJobs?: number;
  insurerPaymentDelays?: number;
  activeInsuranceJobs?: number;
  insurerPendingPayments?: number;
  insurerTotalRevenueGenerated?: number;
}

{/* ----------------------------------------------------- */}
{/* Manager Data */}
{/*----------------------------------------------------- */}
export interface ManagerType {
  managerId: string;
  dateOfBirth: string;
  fullName: string;
  firstName: string;
  lastName: string;
  initial?: string;
  email: string;
  phoneNumber: string;
  kraTaxPin: string;
  nhifNumber: string;
  role: string;
  address: string;
  leaveDates: string[];
  registrationDate: string;
  commencementDate: string;
  annualLeaveAmount: number;
  bonusState: string;
  bonusAmount?: number;
}

{/* ---------------------------------------------------- */}
{/* Payment Transactions */}
{/* ---------------------------------------------------- */}
interface PaymentTransactionCustomerDetails {
  name: string;
  contactNumber: string;
  email: string;
  address: string;
}

interface PaymentTransactionDiscount {
  name: string;
  percentage?: number;
}

interface PaymentTransactionCoupon {
  code: string;
  discountAmount: number;
}

interface PaymentTransactionTotalCost {
  amount: number;
  currency: string;
}

interface PaymentTransactionCostBreakdown {
  vat_tax: number;
  discount?: number;
  taxable: number;
  nonTaxable: number;
  coupons?: number;
  parts: number;
  labor: number;
}

interface PaymentTransactionPaymentStage {
  stageID: string;
  amount: number;
  currency: string;
  paymentDate: string | null;
  paymentType: string;
  paymentTypeID: string;
}

interface PaymentTransactionPaymentReports {
  totalRevenue: {
    count?: number;
    amount: number;
    currency: string;
  };
  pendingPayments: {
    count?: number;
    amount: number;
    currency: string;
  };
  processingPayments: {
    count?: number;
    amount: number;
    currency: string;
  };
  clearedPayments: {
    count?: number;
    amount: number;
    currency: string;
  };
}

interface PaymentTransactionInvoiceDetails {
  issuedDate: string;
  dueDate: string;
  jobCardID: string;
  vehicleVIN: string;
  vehicleRegistration: string;
  customerDetails: PaymentTransactionCustomerDetails;
  paymentStatus?: string;
  paymentMethods?: string[];
  paymentGateway?: string;
  discountEligibility: boolean;
  couponsEligibility: boolean;
  discounts?: PaymentTransactionDiscount[];
  coupons?: PaymentTransactionCoupon[];
  totalCost: PaymentTransactionTotalCost;
  costBreakdown: PaymentTransactionCostBreakdown;
}

export interface PaymentTransactionType {
  transactionID: string;
  invoiceID: string;
  invoiceDetails: PaymentTransactionInvoiceDetails;
  paymentDueDate: string;
  paymentPaidInFull: boolean;
  paymentStages: PaymentTransactionPaymentStage[];
  paymentReports: PaymentTransactionPaymentReports;
  outstandingPayments?: number;
}

{/* -------------------------------------------------- */}
{/* Request Parts Data */}
{/* -------------------------------------------------- */}
export interface RequestPartData {
  request: {
    requestID: string;
    requesterRole: string;
    requesterDetails: {
      name: string;
      id: string;
    };
    requestDateTime: string;
    requestedPartName: string;
    requestedQuantity: number;
    requestedUnitPrice: {
      amount: number;
      currency: string;
    };
    requestStatus: string;
    requestPartCategory?: string;
    additionalInformation?: string;
  };
}

{/* --------------------------------------------------- */}
{/* Service Appointment Data */}
{/* -------------------------------------------------- */}
export interface ServiceAppointmentType {
  serviceAppointmentCard: {
    serviceAppointmentID: string;
    vehicleDetails: {
      make: string;
      model: string;
      year: number;
      licensePlate: string;
      vin: string;
    };
    customerDetails: {
      name: string;
      contactNumber: string;
      email: string;
      address: string;
    };
    jobPriority?: string;
    jobType?: string;
    customerIssueDescription?: string;
    insuranceDetails?: {
      provider: string;
      policyNumber: string;
    };
    technicians?: {
      id: string;
      name: string;
    }[];
    scheduledAppointmentDateTime: string;
    servicesDetails?: {
      name: string;
      description: string;
      cost: {
        amount: number;
        currency: string;
      };
    };
  };
}

{/* -------------------------------------------------- */}
{/* Service Data */}
{/* -------------------------------------------------- */}
export interface GeneralServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  laborPrice?: number;
  vat_tax?: number;
}

export interface GeneralServiceCategoryType {
  catId: string;
  category: string;
  services: GeneralServiceItem[];
}

{/* ------------------------------------------------- */}
{/* Supervisor Data */}
{/*-------------------------------------------------- */}
export interface SupervisorType {
  supervisorId: string;
  dateOfBirth: string;
  fullName: string;
  firstName: string;
  lastName: string;
  initial?: string;
  email: string;
  phoneNumber: string;
  kraTaxPin?: string;
  nhifNumber?: string;
  address?: string;
  leaveDates?: string[];
  registrationDate: string;
  totalSupervisedJobCards?: number;
  totalSupervisedTechnicians?: number;
  successfulSupervisedJobCards?: number;
  pendingSupervisedJobCards?: number;
  failedSupervisedJobCards?: number;
  estimatedCompletionDate?: string;
  annualLeaveAmount?: number;
  bonusState: string;
  bonusAmount?: number;
  expertise?: string[];
  certifications?: SupervisorCertification[];
}

interface SupervisorCertification {
  certificationName: string;
  attachment: string;
}

{/* -------------------------------------------------- */}
{/* Supplier Data */}
{/* ------------------------------------------------------ */}
export interface SupplierType {
  supplierID: string;
  supplierName: string;
  contactPerson: string;
  contactNumber: string;
  contactNumverTwo?: string;
  email: string;
  address: string;
  postalBox: string;
  zipCode?: string;
  supplierPriorityIndex?: number;
  productsCategory?: string;
  productsProvided?: SupplierProduct[];
  supplierCompositeScoreOfPricing?: number;
  supplierPerformanceRatingSystem?: number;
  supplierSERVQUAL?: number;
}

interface SupplierProduct {
  productID: string;
  productName: string;
  description?: string;
  unitPrice: number;
  quantityAvailable: number;
  productType?: string;
}

{/* ------------------------------------------------- */}
{/* Technician Data Type */}
{/* ------------------------------------------------- */}
export interface TechnicianDataType {
  technicianId: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  fullName: string;
  initial?: string;
  email?: string;
  phoneNumber: string;
  kraTaxPin?: string;
  nhifNumber?: string;
  address?: string;
  leaveDates?: string[];
  registrationDate: string;
  status?: string;
  totalJobCards?: number;
  successfulJobCards?: number;
  pendingJobCards?: number;
  failedJobCards?: number;
  estimatedCompletionDate?: string;
  annualLeaveAmount?: number;
  availability: boolean;
  bonusState?: string;
  bonusAmount?: number;
  expertise?: string[];
  certifications?: TechnicianCertification[];
}

interface TechnicianCertification {
  certificationName: string;
  attachment: string;
}

{/* ------------------------------------------------ */}
{/* Vehicle Data Types */}
{/* ------------------------------------------------ */}
export interface VehicleDataType {
  vehicleId: string;
  make: string;
  model: string;
  registrationNumber: string;
  insurancePolicyNumber?: string;
  fuelType?: string;
  wheelBase?: string;
  vinChassisNumber: string;
  vehicleType: string;
  manufacturer: string;
  mileage: string;
  status?: string;
  manufacturedDate?: string;
  garageVisitAmount: number;
  customerDetails: VehicleDataCustomerDetails;
  jobCards?: VehicleDataJobCard[];
}

interface VehicleDataCustomerDetails {
  name: string;
  email: string;
  phone: string;
}

interface VehicleDataJobCard {
  jobCardId: number;
  status?: string;
  lastUpdated?: string;
  pendingAmount?: number;
  servicesOffered?: string[];
  inspectionDetails?: VehicleDataInspectionDetails;
  allocatedTechnician?: VehicleDataTechnician;
  allocatedSupervisor?: VehicleDataSupervisor;
}

interface VehicleDataInspectionDetails {
  inspectionDate: string;
  inspectionStatus: string;
  inspectorName: string;
  inspectionComments?: string;
}

interface VehicleDataTechnician {
  technicianId: number;
  technicianName: string;
  specialization?: string[];
}

interface VehicleDataSupervisor {
  supervisorId: number;
  supervisorName: string;
  department?: string;
}
