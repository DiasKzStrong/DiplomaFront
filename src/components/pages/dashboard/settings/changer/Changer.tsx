import useActions from "@/components/hooks/useActions";
import useSettings from "@/components/hooks/useSettings";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/ui/customs/select/CustomSelect";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import style from "./changer.module.scss";

const Changer = () => {
  const { changeMode, changeCondition, addWords } = useActions();
  const { mode, condition } = useSettings();
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    changeCondition(parseInt(e.target.value));
    addWords([]);
  };

  return (
    <section className="flex flex-col w-full h-54 border shadow-lg p-4 gap-6 rounded-md">
      <div className="flex justify-start items-center gap-4">
        <IoSettingsSharp className="text-2xl" />
        <h1 className="text-lg">Настройки</h1>
      </div>
      <div className="flex flex-col">
        <label>Режим таңдау</label>
        <div className="flex">
          <Button
            className={cn(style.button, { [style.selected]: mode == "spell" })}
            onClick={() => {
              changeMode("spell");
              router.push(`/dashboard?mode=${"spell"}`);
            }}
          >
            Spell
          </Button>
          <Button
            className={cn(style.button, {
              [style.selected]: mode == "sentiment",
            })}
            onClick={() => {
              changeMode("sentiment");
              router.push(`/dashboard?mode=${"sentiment"}`);
            }}
          >
            Sentiment
          </Button>
        </div>
      </div>
      {mode == "spell" && (
        <div>
          <label htmlFor="">Аудару режімін таңдау</label>
          <div className="w-full border rounded-md h-8 shadow-md">
            <CustomSelect
              defaultValue={condition}
              onChange={onChange}
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Changer;
