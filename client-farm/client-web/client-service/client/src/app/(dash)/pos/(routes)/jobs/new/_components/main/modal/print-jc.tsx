"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { Eye, Printer, Send } from "lucide-react";

import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  recipient: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
  isWhatsApp: z.boolean().default(false).optional(),
  isEmail: z.boolean().default(false).optional(),
});

type PrintSendJCFormValues = z.infer<typeof formSchema>;

interface PrintSendJCFormProps {}

export const PrinterSendJCForm: React.FC<PrintSendJCFormProps> = ({}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    recipient: "",
    subject: "",
    message: "",
    isWhatsApp: false,
    isEmail: false,
  };

  const form = useForm<PrintSendJCFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = () => {
    console.log("On Submitting...");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={loading} variant={"default"} size="default">
            <div className="flex items-center">Finish</div>
          </Button>
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 w-[800px] max-w-[900px]">
          <DialogHeader className="pt-2 flex flex-row items-center justify-between">
            <div className="flex space-x-2">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Send className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <DialogTitle>Print & Send Job Card</DialogTitle>
                <DialogDescription>
                  Generate and dispatch the job card
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center justify-normal pr-4">
              <Button disabled={loading} variant={"outline"} size={"default"}>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" /> Preview
                </div>
              </Button>
            </div>
          </DialogHeader>

          <div className="mt-0 mb-4">
            <Separator className="h-[0.5px]" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-2 pb-2">
                {/* Send Message */}
                <div className="flex flex-col -mt-3 space-y-4 pb-6 ">
                  <div className="flex flex-row items-center justify-between space-x-4">
                    <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                      Message
                    </div>
                    <div className="w-full">
                      <Separator
                        orientation="horizontal"
                        className="h-[0.5px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 pl-2">
                    <FormField
                      control={form.control}
                      name="recipient"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="font-medium">
                            Recipient
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="bg-primary/5"
                              disabled={loading}
                              placeholder="Recipient..."
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-primary/5"
                              disabled={loading}
                              placeholder="Subject..."
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              className="bg-primary/5"
                              disabled={loading}
                              placeholder="Message..."
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Send Options */}
                <div className="pl-2 flex flex-row space-x-2">
                <div className="px-4 h-full">
                    <Separator orientation="vertical" className="w-[0.5px]" />
                  </div>
                  <div className="flex flex-col w-full -mt-3 space-y-2">
                    <div className="flex flex-row items-center justify-between space-x-4">
                      <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                        Options
                      </div>
                      <div className="w-full">
                        <Separator
                          orientation="horizontal"
                          className="h-[0.5px]"
                        />
                      </div>
                    </div>
                    <div className="pr-2 flex flex-col space-y-1">
                      <FormField
                        control={form.control}
                        name="isEmail"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-2 pl-2">
                            <FormControl>
                              <Checkbox
                                className=""
                                checked={field.value}
                                // @ts-ignore
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium tracking-tight">Email</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="isWhatsApp"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                            <FormControl>
                              <Checkbox
                                className=""
                                checked={field.value}
                                // @ts-ignore
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium tracking-tight">
                                Whatsapp
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex py-4 w-full">
                      <Separator className="h-[0.5px]" />
                    </div>

                    <div className="flex flex-col space-y-2 w-full pr-2">
                      <DialogClose asChild>
                        <Button
                          disabled={loading}
                          variant={"outline"}
                          size={"default"}
                        >
                          <div className="flex items-start">Cancel</div>
                        </Button>
                      </DialogClose>
                      <Button
                        disabled={loading}
                        variant={"default"}
                        size={"default"}
                      >
                        <div className="flex items-start">
                          <Send className="h-4 w-4 mr-2" /> Send
                        </div>
                      </Button>
                      <Button
                        disabled={loading}
                        variant={"default"}
                        size={"default"}
                      >
                        <div className="flex items-start">
                          <Printer className="h-4 w-4 mr-2" /> Print
                        </div>
                      </Button>
                    </div>

                    <div className="flex py-4 w-full">
                      <Separator className="h-[0.5px]" />
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
