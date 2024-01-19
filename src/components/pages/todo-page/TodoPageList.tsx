import { Checkbox } from "@mui/material";
import { ITodos } from "../../../store/todos/types";

type TodoPageList = {
  handleEditCompeted: (id: number) => void;
};
const TodoPageList = ({
  completed,
  title,
  id,
  handleEditCompeted,
}: ITodos & TodoPageList) => {
  return (
    <>
      <li>
        {completed ? "Выполнено" : ""} {title}
        <Checkbox name="completed" onClick={() => handleEditCompeted(id)} />
      </li>
    </>
  );
};

export default TodoPageList;
