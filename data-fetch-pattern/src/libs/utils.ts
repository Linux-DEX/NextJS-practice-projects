export async function getData () {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return todos;
}

