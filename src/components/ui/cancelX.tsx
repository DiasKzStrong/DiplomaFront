import { cn } from "@/lib/utils";
import React from "react";
import { GrClose } from "react-icons/gr";

const XButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex justify-center items-center", className)}
      onClick={onClick}
    >
      <GrClose className="" />
    </div>
  );
};

export default XButton;
