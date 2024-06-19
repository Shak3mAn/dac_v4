"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { InvoiceSchema } from "../schema/invoice-schema";
import { JobCardSchema } from "../schema/job-card-schema";

import { JobCardContextProvider } from "./job-card-provider";
import { InvoiceContextProvider } from "./invoice-provider";
import { ChargesContextProvider } from "./charges-provider";
import { Toaster } from "@/components/ui/toaster";

import { InvoiceType } from "../types/types";
import { JobCardType } from "../types/types";

import { FORM_DEFAULT_VALUES } from "../utils/variables";
import { JOB_CARD_FORM_DEFAULT_VALUES } from "../utils/variables";
import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const form = useForm<InvoiceType & JobCardType>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const jobCardForm = useForm<JobCardType>({
    resolver: zodResolver(JobCardSchema),
    defaultValues: JOB_CARD_FORM_DEFAULT_VALUES,
  });
  return (
    <FormProvider {...form}>
      <InvoiceContextProvider>
        <ChargesContextProvider>
          <JobCardContextProvider>
            {children}
          </JobCardContextProvider>
        </ChargesContextProvider>
      </InvoiceContextProvider>
    </FormProvider>
  );
};

export default Providers;
