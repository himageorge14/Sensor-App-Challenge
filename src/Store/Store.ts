import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";
import logger from 'redux-logger'

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;