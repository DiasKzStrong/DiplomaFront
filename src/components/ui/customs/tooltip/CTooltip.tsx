import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const CTooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={12} alignOffset={12}>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CTooltip;
