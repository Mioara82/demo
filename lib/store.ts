import { configureStore, combineReducers } from "@reduxjs/toolkit";
import marketReducer from "../lib/features/todos/marketSlice";
import todosReducer from "./features/todos/todosSlice";

const reduxLogger = require("redux-logger");
const logger  =reduxLogger.createLogger();

export const rootReducer = combineReducers({
  market: marketReducer,
  todos:todosReducer
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];