import CustomAccordion from "@/components/ui/customs/accordion/CustomAccordion";
import React from "react";
import { PiBooksBold } from "react-icons/pi";

const Dictionary = () => {
  return (
    <div className="w-full border shadow-md p-3 rounded-md">
      <CustomAccordion
        className=" text-base font-bold"
        triggerMessage="Жеке сөздігіңіз"
        icon={<PiBooksBold className="text-xl" />}
      >
        <span>Сөздік</span>
      </CustomAccordion>
    </div>
  );
};

export default Dictionary;
