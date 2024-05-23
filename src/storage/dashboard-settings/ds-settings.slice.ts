import { ISettings, TCondtion, TMode } from '@/types/states/settings/settings.type'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'


const initialState: ISettings = {
    mode: 'spell',
    condition: 0
}

const settingsSlice = createSlice(
    {
        name:'settings',
        initialState:initialState,
        reducers:{
            changeMode: (state,action: PayloadAction<TMode>) => {
                state.mode = action.payload
            },
            changeCondition: (state,action: PayloadAction<number>) => {
                state.condition = action.payload
            },
        }
    }
)


export const {actions,reducer} = settingsSlice

const persistConfig = {
    key: 'settings',
    storage,
  }

export const dashboardPersisted = persistReducer(persistConfig, reducer)
