import Dashboard from "@/components/pages/dashboard/spell/SpellDashboard";
import Settings from "@/components/pages/dashboard/settings/Settings";
import SideBar from "@/components/pages/dashboard/sidebar/SideBar";
import React from "react";
import SentimentDashboard from "@/components/pages/dashboard/sentiment/SentimentDashboard";
import { TMode } from "@/types/states/settings/settings.type";
import DashBoardWrapper from "@/components/wrappers/dashboardwrapper/DashBoardWrapper";
import FileDropZone from "@/components/ui/dropzone/file-dropzone";
import Modal from "@/components/ui/modal/Modal";

const page = ({ searchParams }: { searchParams: { mode: TMode } }) => {
  return (
    <DashBoardWrapper>
      <main className="flex justify-center w-full h-screen p-4 text-sm gap-2">
        <SideBar />
        {searchParams.mode == "sentiment" ? (
          <SentimentDashboard />
        ) : (
          <Dashboard />
        )}
        <Settings />
      </main>
    </DashBoardWrapper>
  );
};

export default page;
