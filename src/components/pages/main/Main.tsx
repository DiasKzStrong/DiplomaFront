import Typer from "@/components/ui/typer/Typer";
import React from "react";
import { motion } from "framer-motion";
import TextAppear from "@/components/animations/textappear/TextAppear";
import { WavyBackground } from "@/components/ui/wavy-backgroud";

const Main = () => {
  const text = [
    "Кез келген текст",
    1000,
    "Сентиментті анализ",
    1000,
    "SpellChecker",
    1000,
  ];

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full h-screen relative snap-center">
      <WavyBackground className="absolute top-0 left-0" blur={4} />
      {/* <div className="absolute top-0 left-0 w-full h-full  bg-black/30 z-0"></div>
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1] shadow-2xl "
        autoPlay
        muted
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <TextAppear>
        <div className="flex flex-col gap-5 items-center justify-center z-10 text-white text-2xl">
          <h1 className="bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-pink-200">
            SPELL.KZ
          </h1>
          <p className="">Сөзіңді дұрыста</p>
        </div>
      </TextAppear>
      {/* <TextAppear>
        <div>
          <Typer text={text} className="text-white" />
        </div>
      </TextAppear> */}
    </div>
  );
};

export default Main;
