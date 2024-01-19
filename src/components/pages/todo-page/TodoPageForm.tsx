import { memo } from "react";
import BaseInput from "../../ui/BaseInput";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { saveTodo } from "../../../store/todos";
import { FieldValues, useFormContext } from "react-hook-form";

const TodoPageForm = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit } = useFormContext();

  const submit = ({ title }: FieldValues) => {
    dispatch(
      saveTodo({
        title,
        id: Date.now(),
        completed: false,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <BaseInput name="title" placeholder="add todo" />
      <Button type="submit">Добавить</Button>
    </form>
  );
};

export default memo(TodoPageForm);
