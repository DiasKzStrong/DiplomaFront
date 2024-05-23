import { cn } from "@/lib/utils";
import React from "react";

const CustomSelect = ({
  onChange,
  className,
  defaultValue,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  defaultValue?: number;
}) => {
  return (
    <select
      name="condition"
      defaultValue={defaultValue}
      id=""
      className={cn("w-full h-full", className)}
      onChange={onChange}
    >
      <option value={0}>Автоматты</option>
      <option value={1}>Өзіндік таңдау</option>
    </select>
  );
};

export default CustomSelect;
