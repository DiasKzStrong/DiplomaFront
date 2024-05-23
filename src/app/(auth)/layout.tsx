import React from "react";
import logo from "@/../../public/logo.webp";
import Image from "next/image";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex w-screen h-screen justify-evenly max-[768px]:justify-center">
      <div className="flex w-full max-[768px]:hidden">
        <Image src={logo} alt="logo" className="bg-transparent object-cover" />
      </div>
      {children}
    </div>
  );
};

export default layout;
