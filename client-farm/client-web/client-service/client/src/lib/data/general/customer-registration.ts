const customer_registration = {
  registrationProcess: {
    steps: [
      // Field 1 (or Tab 1) customer details
      {
        stepNumber: 1,
        name: "Customer Access",
        description: "Provide access to the registration system.",
      },
      {
        stepNumber: 2,
        name: "Registration Start",
        description: "Display a 'New Customer Registration' option.",
      },
      {
        stepNumber: 3,
        name: "User Identification",
        description: "Request basic identification details.",
        requiredFields: ["full_name", "contact_number", "email"],
      },
      {
        stepNumber: 4,
        name: "Customer Type",
        description: "Identify the type of customer.",
        options: ["individual", "corporate (Tax Details)", "fleet (Tax Details)"],
      },
      {
        stepNumber: 5,
        name: "Address Information",
        description: "Collect address details.",
        requiredFields: ["street_address", "city", "postal_code", "zip code", "p.o.box"],
      },

      // Field 2 (Tab 2) Vehicle Information Fields
      {
        stepNumber: 6,
        name: "Vehicle Information",
        description: "Collect vehicle details for individual customers.",
        requiredFields: ["make", "model", "license_plate"],
        conditionalFields: {
          customerType: "fleet",
          requiredFields: ["fleet_size", "vehicle_types"],
        },
      },

      //Field 3 (Tab 3) Insurance Fields (If Applicable)
      {
        stepNumber: 7,
        name: "Insurance Details",
        description: "Gather any insurance information.",
      },

      //Field 4 (Tab 4) Additional Details Field
      {
        stepNumber: 7,
        name: "Additional Details",
        description: "Gather any additional necessary information.",
        optionalFields: ["preferred_communication", "emergency_contact"],
      },
      {
        stepNumber: 8,
        name: "Account Creation",
        description: "Have customers create a username and password.",
        requiredFields: ["username", "password"],
        confirmPassword: true,
      },
      {
        stepNumber: 9,
        name: "Verification",
        description:
          "Send a verification code for contact details confirmation.",
        requiredFields: ["verification_code"],
      },
      {
        stepNumber: 10,
        name: "Confirmation",
        description: "Display a confirmation message and provide next steps.",
      },
    ],
    customerTypes: {
      individual: {
        requiredFields: [
          "full_name",
          "contact_number",
          "email",
          "make",
          "model",
          "license_plate",
        ],
      },
      corporate: {
        requiredFields: [
          "full_name",
          "contact_number",
          "email",
          "business_name",
          "fleet_details",
        ],
      },
      fleet: {
        requiredFields: ["fleet_size", "vehicle_details", "point_of_contact"],
      },
    },
    postRegistrationActions: [
      "Account Activation",
      "Profile Management",
      "Communication Preferences",
      "Terms and Conditions",
      "Welcome Package",
    ],
  },
};
