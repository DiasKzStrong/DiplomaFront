"use client";
import useSettings from "@/components/hooks/useSettings";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const DashBoardWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const params = useSearchParams();

  const qmode = params.get("mode");
  const { mode } = useSettings();

  useEffect(() => {
    if (!qmode || mode != "spell" || "sentiment") {
      router.push(`/dashboard?mode=${mode}`);
    }
  }, []);
  return <>{children}</>;
};

export default DashBoardWrapper;
