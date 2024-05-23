import { cn } from "@/lib/utils";
import React from "react";
import SpellWord from "./SpellWord";
import { ISpellWord } from "@/types/dashboard/spellword.type";

const OutPut = ({
  words,
  className,
}: {
  words: ISpellWord[];
  className?: string;
}) => {
  return (
    <div className={cn("w-full h-full  break-words", className)}>
      {words.map((word: ISpellWord, index: number) => (
        <SpellWord key={index} index={index} word={word} />
      ))}
    </div>
  );
};

export default OutPut;
