import {configureStore} from '@reduxjs/toolkit';
import countReducer from './slice/countSlice';
export const store = configureStore({
    reducer:{
      countDef:countReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;