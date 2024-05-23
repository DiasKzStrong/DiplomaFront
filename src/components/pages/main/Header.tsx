import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineThunderbolt } from "react-icons/ai";
import CTooltip from "@/components/ui/customs/tooltip/CTooltip";

const Header = () => {
  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  return (
    <header className="flex flex-row justify-between items-center h-full w-full p-6 px-10 bg-transparent backdrop-blur-2xl  snap-align-none top-0 z-20 text-black-500 text-gray-600">
      <div
        id="logo"
        className="flex items-center justify-center gap-2 text-normal"
      >
        <AiOutlineThunderbolt className="text-[1.3rem]" />
        <h1>Spell.KZ</h1>
      </div>
      <div className="flex justify-center items-center gap-10 text-sm">
        <CTooltip content="hi">
          <Link className="" href="">
            Біз туралы
          </Link>
        </CTooltip>
        <Link href="">Қалай қолдану керек</Link>
        <Link href="">FAQ</Link>
      </div>
      <div className="flex gap-2">
        <Button className="bg-transparent text-black border border-black hover:bg-blue-800 active:bg-violet-600 hover:text-white">
          <Link href="/login">Кіру</Link>
        </Button>
        <Button className="bg-transparent text-black border border-black hover:bg-blue-800 active:bg-violet-600 hover:text-white">
          <Link href="/register">Тіркелу</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
