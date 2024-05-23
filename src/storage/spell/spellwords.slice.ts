import { ISpellWord } from "@/types/dashboard/spellword.type";
import { ISpellSlice } from "@/types/states/spell/spellWords.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: ISpellSlice = {
    words: []
}

const spellWordsSlice = createSlice(
    {
        name:'spellWords',
        initialState:initialState,
        reducers:{
            addWords: (state,action:PayloadAction<ISpellWord[]>)=>{
                state.words = action.payload
            },
            changeWord: (state,action:PayloadAction<{index:number,newWord:ISpellWord}>)=>{
                const data = action.payload
                state.words[data.index] = data.newWord
            }
        }

    }
)


export const {actions,reducer} = spellWordsSlice