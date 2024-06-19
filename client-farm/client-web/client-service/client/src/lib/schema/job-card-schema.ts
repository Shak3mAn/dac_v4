import { z } from "zod";

// Helpers
import { formatNumberWithCommas } from "@/lib/utils/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/utils/variables";

const fieldValidators = {
  name: z
    .string()
    .min(2, { message: "Must be at least 2 characters" })
    .max(50, { message: "Must be at most 50 characters" }),
  address: z
    .string()
    .min(2, { message: "Must be at least 2 characters" })
    .max(70, { message: "Must be between 2 and 70 characters" }),
  email: z
    .string()
    .email({ message: "Email must be a valid email" })
    .min(5, { message: "Must be between 5 and 30 characters" })
    .max(30, { message: "Must be between 5 and 30 characters" }),
  phone: z
    .string()
    .min(1, { message: "Must be between 1 and 50 characters" })
    .max(50, {
      message: "Must be between 1 and 50 characters",
    }),
  // Dates
  date: z
    .date()
    .transform((date) =>
      new Date(date).toLocaleDateString("en-US", DATE_OPTIONS)
    ),

  // Strings
  string: z.string(),
  stringMin1: z.string().min(1, { message: "Must be at least 1 character" }),
  stringToNumber: z.coerce.number(),

  stringOptional: z.string().optional(),

  nonNegativeNumber: z.coerce.number().nonnegative({
    message: "Must be a positive number",
  }),
  isChecked: z
    .boolean()
    .transform((isChecked) => !!isChecked)
    .default(false),
};

const CustomInputSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const JobCardCustomerDetailsSchema = z.object({
  name: fieldValidators.name,
  contactNumber: fieldValidators.phone,
  email: fieldValidators.email,
  address: fieldValidators.address,
  customInputs: z.array(CustomInputSchema).optional(),
});

const JobCardShopDetailsSchema = z.object({
  name: fieldValidators.name,
  contactNumber: fieldValidators.phone,
  email: fieldValidators.email,
  address: fieldValidators.address,
  zipCode: fieldValidators.stringOptional,
  postalBox: fieldValidators.stringOptional,
  city: fieldValidators.stringOptional,
  country: fieldValidators.stringOptional,
  customInputs: z.array(CustomInputSchema).optional(),
})

const JobCardFleetDetailsSchema = z.object({
  companyName: fieldValidators.name,
  contactPerson: fieldValidators.name,
  contactNumber: fieldValidators.phone,
  email: fieldValidators.email,
  address: fieldValidators.address,
});

const JobCardInsurerDetailsSchema = z.object({
  insurerName: fieldValidators.name,
  contactPerson: fieldValidators.name,
  contactNumber: fieldValidators.phone,
  email: fieldValidators.email,
  address: fieldValidators.address,
});

const JobCardInsuranceDetailsSchema = z.object({
  provider: fieldValidators.string.optional(),
  policyNumber: fieldValidators.string.optional(),
});
const JobCardVehicleDetailsSchema = z.object({
  make: fieldValidators.string,
  model: fieldValidators.string,
  year: fieldValidators.nonNegativeNumber,
  licensePlate: fieldValidators.string,
  vin: fieldValidators.string,
  chassisNumber: fieldValidators.string.optional(),
  insuranceDetails: JobCardInsuranceDetailsSchema.optional(),
});

const JobCardCheckListInformationSchema = z.object({
  mileage: fieldValidators.string.optional(),
  fuelLevelId: fieldValidators.string.optional(),
  remarks: fieldValidators.string.optional(),
  additionalNotes: fieldValidators.string.optional(),
  customInputs: z.array(CustomInputSchema).optional(),
});

const JobCardCheckListTypeOneSchema = z.object({
  brakePadStatus: fieldValidators.string.optional(),
  fluids: fieldValidators.string.optional(),
  engineOilLevel: fieldValidators.string.optional(),
  coolantLevelId: fieldValidators.string.optional(),
  brakeClutchFluidLevelId: fieldValidators.string.optional(),
  powerSteeringLevelId: fieldValidators.string.optional(),
  batteryConditionId: fieldValidators.string.optional(),
  isOilWasteLeaks: fieldValidators.isChecked,
});

const JobCardCheckListTypeTwoSchema = z.object({
  isJack: fieldValidators.isChecked,
  isVehicleCharger: fieldValidators.isChecked,
  isWhlSpanner: fieldValidators.isChecked,
  isDoorMirrors: fieldValidators.isChecked,
  isSunvisor: fieldValidators.isChecked,
  isSteeringCover: fieldValidators.isChecked,
  isSeatCover: fieldValidators.isChecked,
  isCDChanger: fieldValidators.isChecked,
  isMatsCarpets: fieldValidators.isChecked,
  isCigaretteLighter: fieldValidators.isChecked,
  isRadio: fieldValidators.isChecked,
  isWheelCaps: fieldValidators.isChecked,
  isSpareWheel: fieldValidators.isChecked,
  isPunctureKit: fieldValidators.isChecked,
  isTriangle: fieldValidators.isChecked,
  isRimLock: fieldValidators.isChecked,
  isSpecialWhlNut: fieldValidators.isChecked,
  isBodyCover: fieldValidators.isChecked,
  isDocuments: fieldValidators.isChecked,
  isAirFreshner: fieldValidators.isChecked,
});

const JobCardCheckListSchema = z.object({
  information: JobCardCheckListInformationSchema.optional(),
  checkListTypeTwo: JobCardCheckListTypeTwoSchema.optional(),
  checkListTypeOne: JobCardCheckListTypeOneSchema.optional(),
});

const JobCardTechnicianDetailSchema = z.object({
  name: fieldValidators.name,
});

const JobCardServiceDetailsSchema = z.object({
  name: fieldValidators.name,
  description: fieldValidators.string,
});


const SignatureSchema = z.object({
  data: fieldValidators.string,
  fontFamily: fieldValidators.string.optional(),
});

const JobCardCardDetailsSchema = z.object({
  jobCardID: fieldValidators.stringOptional,
  jobType: fieldValidators.stringOptional,
  companyLogo: fieldValidators.stringOptional,
  jobCardDate: fieldValidators.date,
  jobStartDate: fieldValidators.date.optional(),
  jobEstimatedCompletionDate: fieldValidators.date.optional(),
  jobActualCompletionDate: fieldValidators.date.optional(),
  vehicleDeliveryDate: fieldValidators.date.optional(),
  customerIssueDescription: fieldValidators.stringOptional,
  servicesDetails: z.array(JobCardServiceDetailsSchema).optional(),
  actionTaken: fieldValidators.stringOptional,
  actualWorkshopFinding: fieldValidators.stringOptional,
  remarks: fieldValidators.stringOptional,
  technicians: z.array(JobCardTechnicianDetailSchema).optional(),
  customInputs: z.array(CustomInputSchema).optional(),
  termsAndConditions: fieldValidators.stringOptional,
});

const JobCardSchema = z.object({
  pdfTemplate: z.number(),
  shopDetails: JobCardShopDetailsSchema,
  customerDetails: JobCardCustomerDetailsSchema,
  fleetDetails: JobCardFleetDetailsSchema.optional(),
  insurerDetails: JobCardInsurerDetailsSchema.optional(),
  vehicleDetails: JobCardVehicleDetailsSchema.optional(),
  jobCardDetails: JobCardCardDetailsSchema.optional(),
  checkListForm: JobCardCheckListSchema.optional(),
  updatedAt: fieldValidators.stringOptional,
  signature: SignatureSchema.optional(),
});

export { JobCardSchema, JobCardServiceDetailsSchema };
