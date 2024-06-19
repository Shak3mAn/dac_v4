import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";

const useToasts = () => {
    type SendErrorType = {
        email: string;
        sendPdfToMail: (email: string) => void;
    };

    {/* Invoices Toasts */}
    const newInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Generated new invoice",
            description: "Successfully created a new invoice",
        });
    };

    const pdfGenerationSuccess = () => {
        toast({
            variant: "default",
            title: "Your invoice has been generated!",
            description:
                "You can preview, download, or save it from the actions tab",
        });
    };

    const saveInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Saved Invoice",
            description: "Your invoice details are saved now",
        });
    };

    const modifiedInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Modified Invoice",
            description: "Successfully modified your invoice",
        });
    };

    const sendPdfSuccess = () => {
        toast({
            variant: "default",
            title: "Email sent",
            description: "Your invoice has been sent to the specified email",
        });
    };

    {/* Job Card Toasts */}
    const newJobCardSuccess = () => {
        toast({
            variant: "default",
            title: "Generated new job card",
            description: "Successfully created a new job card",
        });
    };

    const pdfGenerationJobCardSuccess = () => {
        toast({
            variant: "default",
            title: "Your job card has been generated!",
            description:
                "You can preview, download, or save it from the actions tab",
        });
    };

    const saveJobCardSuccess = () => {
        toast({
            variant: "default",
            title: "Saved Job Card",
            description: "Your job card details are saved now",
        });
    };

    const modifiedJobCardSuccess = () => {
        toast({
            variant: "default",
            title: "Modified Job Card",
            description: "Successfully modified your job card",
        });
    };

    const sendJobCardPdfSuccess = () => {
        toast({
            variant: "default",
            title: "Email sent",
            description: "Your job card has been sent to the specified email",
        });
    };
    {/* Gate Card Toasts */}
    const newGatePassSuccess = () => {
        toast({
            variant: "default",
            title: "Generated new gate pass",
            description: "Successfully created a new gate pass",
        });
    };

    const pdfGenerationGatePassSuccess = () => {
        toast({
            variant: "default",
            title: "Your gate pass has been generated!",
            description:
                "You can preview, download, or save it from the actions tab",
        });
    };

    const saveGatePassSuccess = () => {
        toast({
            variant: "default",
            title: "Saved Gate Pass",
            description: "Your gate pass details are saved now",
        });
    };

    const modifiedGatePassSuccess = () => {
        toast({
            variant: "default",
            title: "Modified Gate Pass",
            description: "Successfully modified your gate pass",
        });
    };

    const sendGatePassPdfSuccess = () => {
        toast({
            variant: "default",
            title: "Email sent",
            description: "Your gate pass has been sent to the specified email",
        });
    };

    {/* General Toasts */}

    const sendPdfError = ({ email, sendPdfToMail }: SendErrorType) => {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong. Try again in a moment",
            action: (
                <ToastAction
                    onClick={() => sendPdfToMail(email)}
                    altText="Try again"
                >
                    Try again
                </ToastAction>
            ),
        });
    };

    return {
        newInvoiceSuccess,
        pdfGenerationSuccess,
        saveInvoiceSuccess,
        modifiedInvoiceSuccess,
        sendPdfSuccess,
        sendPdfError,
        modifiedGatePassSuccess,
        newJobCardSuccess,
        pdfGenerationJobCardSuccess,
        saveJobCardSuccess,
        modifiedJobCardSuccess,
        sendJobCardPdfSuccess,
        newGatePassSuccess,
        pdfGenerationGatePassSuccess,
        saveGatePassSuccess,
        sendGatePassPdfSuccess
    };
};

export default useToasts;