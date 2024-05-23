import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState = {
    access_token: '',
    refresh_token: ''
}



const authSlice = createSlice(
    {
        name:'auth',
        initialState: initialState,
        reducers:{
            setTokens: (state, action: PayloadAction<Tokens>) => {
                state.access_token = action.payload.access_token
                state.refresh_token = action.payload.refresh_token
            }

        }
    }
)

export const {reducer, actions} = authSlice


