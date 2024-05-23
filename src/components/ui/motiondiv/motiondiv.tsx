"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const MotionDiv = ({
  scale,
  children,
  className,
}: {
  scale?: number;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("", className)}
      whileHover={{ scale: scale ? scale : 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
