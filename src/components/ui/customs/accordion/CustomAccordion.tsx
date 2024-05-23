import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const CustomAccordion = ({
  triggerMessage,
  children,
  icon,
  className,
}: {
  triggerMessage: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={cn("", className)}>
          {icon}
          {triggerMessage}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
