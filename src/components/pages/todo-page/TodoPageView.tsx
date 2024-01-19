import { ITodos } from "../../../store/todos/types";
import TodoPageForm from "./TodoPageForm";
import TodoPageList from "./TodoPageList";

interface ITodoPageViewProps {
  todos: ITodos[];
  handleEditCompeted: (id: number) => void;
}

const TodoPageView = ({ todos, handleEditCompeted }: ITodoPageViewProps) => {
  return (
    <>
      <TodoPageForm />
      <ul>
        {todos.map((item) => (
          <TodoPageList
            {...item}
            key={item.id}
            handleEditCompeted={handleEditCompeted}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoPageView;
