import React from "react";
import MotionDiv from "../motiondiv/motiondiv";
import { cn } from "@/lib/utils";

const IconButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <MotionDiv
      className={cn(
        "flex items-center justify-center border shadow-md rounded-full ",
        className
      )}
    >
      {children}
    </MotionDiv>
  );
};

export default IconButton;
