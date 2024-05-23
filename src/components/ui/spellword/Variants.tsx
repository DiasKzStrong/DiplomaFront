import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Variants = ({
  variants,
  children,
  onClick,
}: {
  variants: string[];
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-full">
        {
          <div className="flex flex-col justify-center items-center">
            {variants.map((variant) => (
              <div
                className="w-full h-full hover:bg-secondary cursor-pointer text-center text-sm p-2"
                onClick={onClick}
              >
                <span className="w-full h-full">{variant}</span>
              </div>
            ))}
          </div>
        }
      </PopoverContent>
    </Popover>
  );
};

export default Variants;
