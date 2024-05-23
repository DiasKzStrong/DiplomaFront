import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";
import { motion } from "framer-motion";

const RSubmit = ({
  className,
  children,
  disabled,
}: {
  className?: string;
  children: React.ReactNode;
  disabled: boolean;
}) => {
  return (
    <motion.button
      disabled={disabled}
      className={cn(
        "bg-blue-500 rounded-full w-12 h-12 z-10 flex items-center justify-center",
        className
      )}
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      {children}
    </motion.button>
  );
};

export default RSubmit;
