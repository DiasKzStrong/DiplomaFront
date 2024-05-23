"use client";

import RSubmit from "@/components/ui/rounded-submit";
import OutPut from "@/components/ui/spellword/OutPut";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ISpellSlice } from "@/types/states/spell/spellWords.type";
import SpellCheckerService from "@/services/spell/spellchecker.service";
import useSpell from "@/components/hooks/useSpell";
import useActions from "@/components/hooks/useActions";
import useSettings from "@/components/hooks/useSettings";
import XButton from "@/components/ui/cancelX";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [lenght, setLenght] = useState(0);
  const [content, setContent] = useState("");

  const { handleSubmit, register } = useForm({
    mode: "onChange",
    defaultValues: {
      text: "",
    },
  });

  const service = new SpellCheckerService();

  const { addWords } = useActions();
  const { mode, condition } = useSettings();
  const { words } = useSpell();

  const onSubmit = (data: { text: string }) => {
    service
      .send_text(data, condition!)
      .then((response) => addWords(response.data));
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const l = value.length;
    if (l > 1000) {
      event.preventDefault();
      return;
    }

    setContent(value);
    setLenght(l);
  };

  const onClear = () => {
    setLenght(0);
    setContent("");
    addWords([]);
  };

  useEffect(() => {
    onClear();
  }, [mode]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 items-center justify-center h-5/6 w-full px-4 gap-[1px] relative resize-y"
    >
      <RSubmit
        className={`absolute top-[22rem] left-0 right-0 mx-auto ${
          lenght < 50 ? " bg-gray-600/50" : ""
        }`}
        disabled={lenght < 50}
      >
        <AiOutlineCaretRight className="text-white text-2xl" />
      </RSubmit>
      <div className="flex flex-col w-full border rounded-md shadow-md h-full p-8 relative">
        <div className="flex justify-end">
          <p
            className={cn(
              "hidden",
              lenght < 50 &&
                lenght !== 0 &&
                "absolute top-3 right-10 min-[1280px]:flex"
            )}
          >
            Өтініш кем дегенде 50 символ енгізіңіз
          </p>
        </div>
        <Textarea
          {...register("text", { required: true })}
          className="w-full h-full resize-none border-none outline-none shadow-none overflow-auto"
          placeholder="Осы жерге жазыңыз (кем дегенде 50 символ)"
          value={content}
          onChange={onChange}
        />
        <p>{lenght}/1000</p>
        {/* <Textarea className="break-words border-none outline-none border-0 active:border-none  active:outline-none focus:border-none focus:outline-none border-transparent" /> */}
        {lenght > 0 ? (
          <XButton
            onClick={onClear}
            className="w-9 h-9 rounded-full text-black absolute top-1 right-2 hover:bg-slate-500"
          />
        ) : null}
      </div>
      <div className="flex w-full shadow-md border rounded-md h-full p-8">
        <OutPut words={words} />
      </div>
    </form>
  );
};

export default Dashboard;
