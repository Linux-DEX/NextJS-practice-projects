import { getData } from "../libs/utils.ts";

const TodoList = async () => {
  const todos = await getData();

  return (
    <ul className="text-xl flex flex-col justify-center items-center">
      {
        todos.map((todo) => (
          <li id={todo.id}>
            {todo.title}
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList;
