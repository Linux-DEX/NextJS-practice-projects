"use client";

import { use } from "react";

const TodoListNew = ({ todosPromise }) => {
  const todos = use(todosPromise);

  return (
    <ul className="text-xl flex flex-col justify-center items-center">
      {
        todos.map((todo) => (
          <li 
            id={todo.id}
            onClick={() => {
                // on click handler
            }}
          >
            {todo.title}
          </li>
        ))
      }
    </ul>
  )
}

export default TodoListNew;
