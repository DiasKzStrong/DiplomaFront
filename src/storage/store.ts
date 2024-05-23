import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dashboardPersisted } from "./dashboard-settings/ds-settings.slice";
import {reducer as spellReducer} from './spell/spellwords.slice'
import {reducer as authReducer} from './auth/auth.slice'
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboardSettings: dashboardPersisted,
  spell:spellReducer
})

export const store = configureStore(
    {reducer:rootReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),}
    
)

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
