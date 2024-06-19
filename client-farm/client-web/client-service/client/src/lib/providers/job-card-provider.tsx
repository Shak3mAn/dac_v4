"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter } from "next/navigation";

// RHF
import { useFormContext } from "react-hook-form";

// Hooks
import useToasts from "@/lib/hooks/useToasts";

import { exportJobCard } from "@/service/jc/client/exportJC";

import {
  JOB_CARD_FORM_DEFAULT_VALUES,
  GENERATE_JOB_CARD_PDF_API,
  SHORT_DATE_OPTIONS,
} from "@/lib/utils/variables";

import { ExportTypes, JobCardType } from "../types/types";

const defaultJobCardContext = {
  jobCardPdf: new Blob(),
  jobCardPdfLoading: false,
  savedJobCards: [] as JobCardType[],
  pdfUrl: null as string | null,
  onFormSubmit: (values: JobCardType) => {},
  newJobCard: () => {},
  generatePdf: async (data: JobCardType) => {},
  removeFinalPdf: () => {},
  downloadPdf: () => {},
  printPdf: () => {},
  previewPdfInTab: () => {},
  saveJobCard: () => {},
  deleteJobCard: (index: number) => {},
  exportJobCardAs: (exportAs: ExportTypes) => {},
};

export const JobCardContext = createContext(defaultJobCardContext);

export const useJobCardContext = () => {
  return useContext(JobCardContext);
};

type JobCardContextProviderProps = {
  children: React.ReactNode;
};

export const JobCardContextProvider = ({
  children,
}: JobCardContextProviderProps) => {
  const router = useRouter();

  // Toasts
  const {
    newJobCardSuccess,
    pdfGenerationJobCardSuccess,
    saveJobCardSuccess,
    modifiedJobCardSuccess,
    sendJobCardPdfSuccess,
    sendPdfError,
  } = useToasts();

  // Get form values and methods from form context
  const { getValues, reset } = useFormContext<JobCardType>();

  // Variables
  const [jobCardPdf, setJobCardPdf] = useState<Blob>(new Blob());
  const [jobCardPdfLoading, setJobCardPdfLoading] = useState<boolean>(false);

  // Saved Job Cards
  const [savedJobCards, setSavedJobCards] = useState<JobCardType[]>([]);

  useEffect(() => {
    let savedJobCardsDefault;
    if (typeof window !== undefined) {
      //Saved job cards variables
      const savedJobCardsJSON = window.localStorage.getItem("savedJobCards");
      savedJobCardsDefault = savedJobCardsJSON
        ? JSON.parse(savedJobCardsJSON)
        : [];
      setSavedJobCards(savedJobCardsDefault);
    }
  }, []);

  // Get pdf url from blob
  const pdfUrl = useMemo(() => {
    if (jobCardPdf.size > 0) {
      return window.URL.createObjectURL(jobCardPdf);
    }
    return null;
  }, [jobCardPdf]);

  /**
   * Handles form submission.
   *
   * @param {JobCardType} data - The form values used to generate the PDF.
   */
  const onFormSubmit = (data: JobCardType) => {
    console.log("Value");
    console.log(data);

    // Call generate pdf Method
    generatePdf(data);
  };

  /**
   * Generates a new job card.
   */
  const newJobCard = () => {
    reset(JOB_CARD_FORM_DEFAULT_VALUES);
    setJobCardPdf(new Blob());

    router.refresh();

    // Toast
    newJobCardSuccess();
  };

  /**
   * Generate a PDF document based on the provided data.
   *
   * @param {JobCardType} data - The data used to generate the PDF.
   * @returns {Promise<void>} - A promise that resolves when the PDF is successfully generated.
   * @throws {Error} - If an error occurs during the PDF generation process.
   */
  const generatePdf = useCallback(async (data: JobCardType) => {
    setJobCardPdfLoading(true);

    try {
      const response = await fetch(GENERATE_JOB_CARD_PDF_API, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.blob();
      setJobCardPdf(result);

      if (result.size > 0) {
        // Toast
        pdfGenerationJobCardSuccess();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setJobCardPdfLoading(false);
    }
  }, []);

  /**
   * Removes the final PDF file and switches to Live Preview
   */
  const removeFinalPdf = () => {
    setJobCardPdf(new Blob());
  };

  /**
   * Generates a preview of a PDF file and opens it in a new browser tab.
   */
  const previewPdfInTab = () => {
    if (jobCardPdf) {
      const url = window.URL.createObjectURL(jobCardPdf);
      window.open(url, "_blank");
    }
  };

  /**
   * Downloads a PDF file.
   */
  const downloadPdf = () => {
    // Only download if there is an job card
    if (jobCardPdf instanceof Blob && jobCardPdf.size > 0) {
      // Create a blob URL to trigger the download
      const url = window.URL.createObjectURL(jobCardPdf);

      // Create an anchor element to initiate the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "invoice.pdf";
      document.body.appendChild(a);

      // Trigger the download
      a.click();

      // Clean up the URL object
      window.URL.revokeObjectURL(url);
    }
  };

  /**
   * Prints a PDF file.
   */
  const printPdf = () => {
    if (jobCardPdf) {
      const pdfUrl = URL.createObjectURL(jobCardPdf);
      const printWindow = window.open(pdfUrl, "_blank");
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      }
    }
  };

  // TODO: Change function name. (saveJobCardData maybe?)
  /**
   * Saves the job card data to local storage.
   */
  const saveJobCard = () => {
    if (jobCardPdf) {
      // If get values function is provided, allow to save the job card
      if (getValues) {
        // Retrieve the existing array from local storage or initialize an empty array
        const savedJobCardsJSON = localStorage.getItem("savedJobCards");
        const savedJobCards = savedJobCardsJSON
          ? JSON.parse(savedJobCardsJSON)
          : [];

        const updatedDate = new Date().toLocaleDateString(
          "en-US",
          SHORT_DATE_OPTIONS
        );

        const formValues = getValues();
        formValues.updatedAt = updatedDate;

        const existingJobCardIndex = savedJobCards.findIndex(
          (jobCard: JobCardType) => {
            return (
              jobCard.jobCardDetails?.jobCardID ===
              formValues.jobCardDetails?.jobCardID
            );
          }
        );

        // If job card already exists
        if (existingJobCardIndex !== -1) {
          savedJobCards[existingJobCardIndex] = formValues;

          // Toast
          modifiedJobCardSuccess();
        } else {
          // Add the form values to the array
          savedJobCards.push(formValues);

          // Toast
          saveJobCardSuccess();
        }

        localStorage.setItem("savedJobCards", JSON.stringify(savedJobCards));

        setSavedJobCards(savedJobCards);
      }
    }
  };

  // TODO: Change function name. (deleteJobCardData maybe?)
  /**
   * Delete an job card from local storage based on the given index.
   *
   * @param {number} index - The index of the job card to be deleted.
   */
  const deleteJobCard = (index: number) => {
    if (index >= 0 && index < savedJobCards.length) {
      const updatedJobCards = [...savedJobCards];
      updatedJobCards.splice(index, 1);
      setSavedJobCards(updatedJobCards);

      const updatedJobCardsJSON = JSON.stringify(updatedJobCards);

      localStorage.setItem("savedJobCards", updatedJobCardsJSON);
    }
  };

  /**
   * Export an job cards in the specified format using the provided form values.
   *
   * This function initiates the export process with the chosen export format and the form data.
   *
   * @param {ExportTypes} exportAs - The format in which to export the job cards.
   */
  const exportJobCardAs = (exportAs: ExportTypes) => {
    const formValues = getValues();

    // Service to export job card with given parameters
    exportJobCard(exportAs, formValues);
  };

  return (
    <JobCardContext.Provider
      value={{
        jobCardPdf,
        deleteJobCard,
        downloadPdf,
        exportJobCardAs,
        generatePdf,
        jobCardPdfLoading,
        newJobCard,
        onFormSubmit,
        pdfUrl,
        previewPdfInTab,
        printPdf,
        removeFinalPdf,
        savedJobCards,
        saveJobCard,
      }}
    >
      {children}
    </JobCardContext.Provider>
  );
};
