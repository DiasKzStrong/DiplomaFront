import React from "react";
import Variants from "./Variants";
import useSettings from "@/components/hooks/useSettings";
import { ISpellWord } from "@/types/dashboard/spellword.type";
import useActions from "@/components/hooks/useActions";

const SpellWord = ({ word, index }: { word: ISpellWord; index: number }) => {
  const { condition } = useSettings();

  const { changeWord } = useActions();

  const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLElement;
    const newWord = { ...word, word: element.textContent!, correct: true };
    changeWord({ index, newWord });
  };

  return (
    <span className="tracking-wide">
      {condition === 0 ? (
        word.correct === true || word.correct == null ? (
          word.word
        ) : (
          <span className="text-green-500">{word.correction}</span>
        )
      ) : word.correct === true || word.correct == null ? (
        <span
          className={
            word.correct == true && word.variants ? "text-green-500" : ""
          }
        >
          {word.word}
        </span>
      ) : (
        <>
          <Variants key={index} variants={word.variants!} onClick={onSelect}>
            <span className="text-red-500">{word.word}</span>
          </Variants>
        </>
      )}
      {!word.word.includes(".,?!") ? " " : null}
    </span>
  );
};

export default SpellWord;
