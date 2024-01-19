import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store";
import { todosSelector } from "../../../store/todos/selectors";
import TodoPageView from "./TodoPageView";
import {
  editCompeted,
  saveTodosFromLocalStorage,
} from "../../../store/todos/slices/todos";
import { useEffect } from "react";

const TodoPage = () => {
  const todos = useAppSelector((state) => todosSelector(state));
  const dispatch = useAppDispatch();
  const methdos = useForm({
    defaultValues: {
      title: "",
      completed: false,
    },
  });

  useEffect(() => {
    if (todos.length) {
      sessionStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const todosSS = sessionStorage.getItem("todos") ?? [];
    const parseTodos = JSON.parse(todosSS as never);
    dispatch(saveTodosFromLocalStorage(parseTodos));
  }, []);

  const handleEditCompeted = (id: number) => {
    dispatch(editCompeted(id));
  };

  return (
    <FormProvider {...methdos}>
      <TodoPageView todos={todos} handleEditCompeted={handleEditCompeted} />
    </FormProvider>
  );
};

export default TodoPage;
