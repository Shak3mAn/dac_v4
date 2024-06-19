"use client";

import * as React from "react";
import { Inbox } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { messages } from "@/lib/data/data";
import TruncatedMessage from "./truncated-message";

interface InboxProps {}

interface InboxState {
  loading: boolean;
  open: boolean;
  read: boolean;
}

const PosInbox: React.FC<InboxProps> = () => {
  const [state, setState] = React.useState<InboxState>({
    loading: false,
    open: false,
    read: false,
  });
  React.useEffect(() => {
    if (state.read) {
      setState((prevState) => ({ ...prevState, read: false }));
    }
  }, [state.read]);

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div>
            <>
              <div className="absolute animate-ping ml-8 -mt-1 z-20 h-3 w-3 rounded-full bg-red-800 opacity-90" />
              <div className="absolute ml-8 -mt-1 z-20 h-3 w-3 rounded-full bg-red-800 opacity-90" />
            </>
            <Button variant="outline" size="icon">
              <Inbox className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </PopoverTrigger>

        <PopoverContent className="pb-2 px-4 pt-2  flex flex-col w-screen sm:w-[420px] sm:ml-0 h-full max-h-[550px]">
          <div className="flex justify-between items-start w-full">
            <Label className="px-2 py-1.5 text-lg font-semibold">Inbox</Label>

            <Label className="pr-4 pt-3 text-xs text-muted-foreground font-normal">
              423 Read
            </Label>
          </div>

          {/* Inbox */}
          <div className="pt-1 border-t border-b border-primary/10 pb-2">
            <Tabs defaultValue="primary">
              <TabsList className="grid w-full grid-cols-3 h-9 rounded-lg px-1 bg-primary/5">
                <TabsTrigger
                  value="primary"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  Primary
                </TabsTrigger>
                <TabsTrigger
                  value="starred"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  Starred
                </TabsTrigger>
                <TabsTrigger
                  value="urgent"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  Urgent
                </TabsTrigger>
              </TabsList>
              <TabsContent value="primary">
                <ScrollArea className="h-[350px]">
                  {messages.map((message) => (
                    <div
                      className="py-3 border-b border-primary/10 flex items-center"
                      key={message.id}
                    >
                      <div className="flex flex-col space-y-1 px-2">
                        <div className="flex justify-between w-full">
                          <span className="flex text-primary text-sm font-semibold uppercase">
                            {message.initials}
                          </span>
                          <span className="text-xs font-normal text-muted-foreground flex">
                            {message.time}
                          </span>
                        </div>
                        <div className="flex items-start text-primary text-xs font-semibold">
                          {message.subject}
                        </div>
                        <div className="font-normal text-muted-foreground flex items-start text-xs">
                          <TruncatedMessage text={message.message} />
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="starred">
                <ScrollArea className="h-[350px]">
                  {messages.map((message) => (
                    <div
                      className="py-3 border-b border-primary/10 flex items-center"
                      key={message.id}
                    >
                      <div className="flex flex-col space-y-1 px-2">
                        <div className="flex justify-between w-full">
                          <span className="flex text-primary text-sm font-semibold uppercase">
                            {message.initials}
                          </span>
                          <span className="text-xs font-normal text-muted-foreground flex">
                            {message.time}
                          </span>
                        </div>
                        <div className="flex items-start text-primary text-xs font-semibold">
                          {message.subject}
                        </div>
                        <div className="font-normal text-muted-foreground flex items-start text-xs">
                          <TruncatedMessage text={message.message} />
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="urgent">
                <ScrollArea className="h-[350px] pr-1">
                  {messages.map((message) => (
                    <div
                      className="py-3 border-b border-primary/10 flex items-center"
                      key={message.id}
                    >
                      <div className="flex flex-col space-y-1 px-2">
                        <div className="flex justify-between w-full">
                          <span className="flex text-primary text-sm font-semibold uppercase">
                            {message.initials}
                          </span>
                          <span className="text-xs font-normal text-muted-foreground flex">
                            {message.time}
                          </span>
                        </div>
                        <div className="flex items-start text-primary text-xs font-semibold">
                          {message.subject}
                        </div>
                        <div className="font-normal text-muted-foreground flex items-start text-xs">
                          <TruncatedMessage text={message.message} />
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>

          {/* Options */}
          <div className="pt-2">
            <Button variant="outline" size="default" className="w-full">
              View All Messages
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PosInbox;
