const job_card = {
  registrationProcess: {
    steps: [
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
        options: ["individual", "corporate", "fleet"],
      },
      {
        stepNumber: 5,
        name: "Address Information",
        description: "Collect address details.",
        requiredFields: ["street_address", "city", "postal_code"],
      },
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

const job_card_eg1 = {
  registrationProcess: {
    steps: [
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
        options: ["individual", "corporate", "fleet"],
      },
      {
        stepNumber: 5,
        name: "Address Information",
        description: "Collect address details.",
        requiredFields: ["street_address", "city", "postal_code"],
      },
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

const job_card_eg2 = {
  jobCardCreationProcess: {
    steps: [
      {
        stepNumber: 1,
        name: "Customer Selection",
        description:
          "Select the customer for whom the job card is being created.",
        options: ["recent_customers", "search_customers", "new_customer"],
        requiredFields: ["customer_id"],
        dynamicFields: {
          recent_customers: {
            display: "Recent Customers",
            source: "database",
            limit: 5,
          },
          search_customers: {
            display: "Search Customers",
            fields: ["customer_name", "contact_number", "email"],
          },
          new_customer: {
            display: "New Customer",
            fields: ["full_name", "contact_number", "email", "address"],
          },
        },
      },
      {
        stepNumber: 2,
        name: "Vehicle Selection",
        description: "Choose the vehicle associated with the job card.",
        options: "dynamic_vehicle_list",
        requiredFields: ["vehicle_id"],
      },
      {
        stepNumber: 3,
        name: "Job Details",
        description: "Specify details of the job to be performed.",
        requiredFields: [
          "job_type",
          "description",
          "priority",
          "expected_completion_date",
          "mileage",
        ],
        optionalFields: ["status", "comments", "attachments"],
      },
      {
        stepNumber: 4,
        name: "Parts and Materials",
        description: "List the parts and materials required for the job.",
        optionalFields: [
          "part_name",
          "quantity",
          "unit_price",
          "estimated_cost",
          "vendor_details",
        ],
      },
      {
        stepNumber: 5,
        name: "Labor Details",
        description: "Specify labor details for the job.",
        optionalFields: [
          "technician_id",
          "hours_required",
          "hourly_rate",
          "skill_level",
          "comments",
        ],
      },
      {
        stepNumber: 6,
        name: "Additional Instructions",
        description:
          "Provide any additional instructions or notes for the job.",
      },
      {
        stepNumber: 7,
        name: "Review and Confirmation",
        description: "Review the job card details and confirm the creation.",
      },
    ],
    postCreationActions: [
      "Generate Job Card Number",
      "Notify Customer",
      "Assign Technician",
      "Print Job Card",
    ],
  },
};

const customer_selection = {
  customerSelectionModal: {
    options: ["recent_customers", "search_customers", "new_customer"],
    fields: {
      recent_customers: {
        display: "Recent Customers",
        source: "database",
        limit: 5,
        fields: ["customer_id", "full_name", "contact_number", "email"],
      },
      search_customers: {
        display: "Search Customers",
        fields: ["full_name", "contact_number", "email"],
        searchOptions: ["by_name", "by_contact", "by_email"],
      },
      new_customer: {
        display: "New Customer",
        fields: ["full_name", "contact_number", "email", "address"],
      },
    },
    searchOptions: {
      by_name: {
        display: "Search by Name",
        description: "Enter the customer's full or partial name for search.",
        example: "John Doe",
      },
      by_contact: {
        display: "Search by Contact Number",
        description: "Enter the customer's contact number for search.",
        example: "+1 555-1234",
      },
      by_email: {
        display: "Search by Email",
        description: "Enter the customer's email address for search.",
        example: "john.doe@example.com",
      },
    },
  },
};

const vehicle_selection = {
  vehicleSelectionModal: {
    options: "dynamic_vehicle_list",
    fields: {
      dynamic_vehicle_list: {
        display: "Dynamic Vehicle List",
        source: "database",
        fields: [
          "vehicle_id",
          "make",
          "model",
          "license_plate",
          "year",
          "color",
        ],
        searchOptions: [
          "by_license_plate",
          "by_make_model",
          "by_year",
          "by_color",
        ],
      },
    },
    searchOptions: {
      by_license_plate: {
        display: "Search by License Plate",
        description: "Enter the vehicle's license plate for search.",
        example: "ABC123",
      },
      by_make_model: {
        display: "Search by Make and Model",
        description: "Enter the vehicle's make and model for search.",
        example: "Toyota Camry",
      },
      by_year: {
        display: "Search by Year",
        description: "Enter the vehicle's manufacturing year for search.",
        example: "2018",
      },
      by_color: {
        display: "Search by Color",
        description: "Enter the vehicle's color for search.",
        example: "Blue",
      },
    },
  },
};
