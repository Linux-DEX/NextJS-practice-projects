import TodoList from "./todo-list.tsx";
import { Suspense } from 'react';

const SuspenceComp = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my-6">Todo App</h1>

      <Suspense fallback={<p className="text-2xl text-center">Loading...</p>}>
        <TodoList />
      </Suspense>
    </div>
  )
}

export default SuspenceComp
