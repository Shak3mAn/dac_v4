import { EXPORT_JOB_CARD_API } from "@/lib/utils/variables";

import { ExportTypes, JobCardType } from "@/lib/types/types";

/**
 * Export an invoice by sending a POST request to the server and initiating the download.
 *
 * @param {ExportTypes} exportAs - The format in which to export the invoice (e.g., JSON, CSV).
 * @param {JobCardType} formValues - The invoice form data to be exported.
 * @throws {Error} If there is an error during the export process.
 * @returns {Promise<void>} A promise that resolves when the export is completed.
 */

export const exportJobCard = async (
    exportAs: ExportTypes,
    formValues: JobCardType
) => {
    return fetch(`${EXPORT_JOB_CARD_API}?format=${exportAs}`, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `job-card.${exportAs.toLowerCase()}`;
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
            console.error("Error downloading:", error);
        });
}