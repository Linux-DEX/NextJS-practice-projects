import TodoListNew from './todo-list-new.tsx';
import { Suspense } from 'react';
import { getData } from '../libs/utils.ts';

const UseHook = () => {
  const todosPromise = getData();

  return (
    <div>
      <h1 className="text-3xl text-center my-6">Todo App New</h1>

      <Suspense fallback={<p className="text-2xl text-center">Loading...</p>}>
        <TodoListNew todosPromise={todosPromise} />
      </Suspense>
    </div>
  )
}

export default UseHook
