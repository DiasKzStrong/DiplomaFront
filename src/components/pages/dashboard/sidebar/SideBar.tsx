"use client";
import React from "react";
import { SiMicrosoftword } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import IconButton from "@/components/ui/iconbutton";
import CTooltip from "@/components/ui/customs/tooltip/CTooltip";
import Modal from "@/components/ui/modal/Modal";
import FileDropZone from "@/components/ui/dropzone/file-dropzone";

const sideBarItems = [
  // {
  //   name: "Ворд жіберіңіз",
  //   component: SiMicrosoftword,
  // },
  {
    name: "Қалай қолдану керек",
    component: GiGraduateCap,
  },
  {
    name: "Тех. поддержка",
    component: HiOutlineQuestionMarkCircle,
  },
];

const SideBar = () => {
  return (
    <aside className="flex flex-col items-center gap-4">
      {sideBarItems.map((item) => (
        <div className="relative group">
          <IconButton className="w-11 h-11">
            {<item.component className="text-xl" />}
          </IconButton>
          <div className="absolute top-0 bg-slate-100 z-50 left-14 hidden group-hover:block transition-all">
            {item.name}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
