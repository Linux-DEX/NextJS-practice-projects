import { getData } from "../libs/utils.ts";

const Home = async () => {
  const todos = await getData();

  console.log(todos)

  return (
    <div>
      <h1 className="text-3xl text-center my-6">Todo App</h1>

      <ul className="text-xl flex flex-col justify-center items-center">
        {
          todos.map((todo) => (
            <li id={todo.id}>
              {todo.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
