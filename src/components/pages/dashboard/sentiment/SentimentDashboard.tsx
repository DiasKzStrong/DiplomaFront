"use client";
import XButton from "@/components/ui/cancelX";
import Modal from "@/components/ui/modal/Modal";
import RSubmit from "@/components/ui/rounded-submit";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import SentimentService from "@/services/sentiment";
import { ISentimentResponse } from "@/types/services/sentiment/sentimentResponse.type";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCaretRight } from "react-icons/ai";

const SentimentDashboard = () => {
  const [lenght, setLenght] = useState(0);
  const [content, setContent] = useState("");
  const [result, setResult] = useState<ISentimentResponse | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const l = value.length;
    if (l > 1000) {
      event.preventDefault();
      return;
    }

    setResult(null);
    setContent(value);
    setLenght(l);
  };

  const onClear = () => {
    setLenght(0);
    setContent("");
  };

  const service = new SentimentService();

  const { handleSubmit, register } = useForm({
    mode: "onChange",
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (data: { text: string }) => {
    service.send_text(data).then((response) => setResult(response.data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col flex-1 items-center justify-center h-5/6 w-full p-8 gap-4 relative resize-y rounded-md border"
    >
      {result && (
        <Modal title="Нәтижесі">
          <pre>
            <p
              className={`${
                result.sentiment == 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {result.sentiment == 0 ? "Жаман" : "Жақсы"}
            </p>
            <p>Пайызы {result.procentage}</p>
          </pre>
        </Modal>
      )}
      <div className="w-full h-full">
        <div className="flex justify-end">
          <p
            className={cn(
              "hidden",
              lenght < 50 &&
                lenght !== 0 &&
                "absolute top-3 right-12 min-[720px]:flex"
            )}
          >
            Өтініш кем дегенде 50 символ енгізіңіз
          </p>
        </div>
        <Textarea
          {...register("text", { required: true })}
          className="w-full h-full border-none outline-none resize-none"
          placeholder="Осы жерге жазыңыз (кем дегенде 50 символ)"
          value={content}
          onChange={onChange}
        />
        {lenght > 0 ? (
          <XButton
            onClick={onClear}
            className="w-9 h-9 rounded-full text-black absolute top-1 right-2 hover:bg-slate-500"
          />
        ) : null}
      </div>
      <div className="flex justify-center items-center">
        <RSubmit
          className={`${lenght < 50 || result ? " bg-gray-600/50" : ""}`}
          disabled={lenght < 50}
        >
          <AiOutlineCaretRight className="text-white text-2xl" />
        </RSubmit>
      </div>
    </form>
  );
};

export default SentimentDashboard;
