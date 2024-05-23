import { Login } from "@/components/pages/auth";
import React from "react";

const page = async () => {
  return (
    <main className="w-full h-full flex justify-center items-center max-[768px]:bg-[url('/logo.webp')] bg-cover bg-no-repeat bg-center">
      <Login />
    </main>
  );
};

export default page;
