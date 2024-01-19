import { RootState } from "../rootReducer";

export const todosSelector = (state: RootState) => state.todos.data;
