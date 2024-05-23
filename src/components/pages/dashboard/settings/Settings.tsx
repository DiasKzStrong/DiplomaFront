"use client";
import React, { useEffect } from "react";
import Changer from "./changer/Changer";
import Dictionary from "./Dictionary";
import Feedback from "./Feedback";

const Settings = () => {
  return (
    <aside className="flex flex-col justify-start items-center w-64 h-full gap-4">
      <Changer />
      <Dictionary />
      <Feedback />
    </aside>
  );
};

export default Settings;
