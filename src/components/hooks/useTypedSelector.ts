import { RootState } from "@/storage/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 