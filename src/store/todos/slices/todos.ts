import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodos, ITodosState } from "../types";

const initialState: ITodosState = {
  data: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, { payload }: PayloadAction<ITodos>) => {
      state.data = [...state.data, payload];
    },
    editCompeted: (state, { payload }: PayloadAction<number>) => {
      state.data = state.data.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );
    },
    saveTodosFromLocalStorage: (
      state,
      { payload }: PayloadAction<ITodos[]>
    ) => {
      state.data = payload;
    },
  },
});

export const { saveTodo, editCompeted, saveTodosFromLocalStorage } =
  todosSlice.actions;
export default todosSlice.reducer;
