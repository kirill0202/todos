import { combineReducers } from "@reduxjs/toolkit";
import { todosSlice } from "./todos";

export const rootReducer = combineReducers({
  todos: todosSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
