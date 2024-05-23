"use client";

import { motion } from "framer-motion";
import React from "react";

const TextAppear = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{ scale: 2.5 }}
      initial={{ scale: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default TextAppear;
