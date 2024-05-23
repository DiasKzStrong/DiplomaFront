import CustomAccordion from "@/components/ui/customs/accordion/CustomAccordion";
import React from "react";
import { RiChatQuoteLine } from "react-icons/ri";

const Feedback = () => {
  return (
    <div className="w-full border shadow-md rounded-md p-3">
      <CustomAccordion
        className="text-base font-bold"
        triggerMessage="Отзыв қалдырыңыз"
        icon={<RiChatQuoteLine className="text-2xl" />}
      >
        <span>Отзыв</span>
      </CustomAccordion>
    </div>
  );
};

export default Feedback;
