import { Todo } from "./definitions"

export async function getAll(): Promise<Todo[]> {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await data.json()
}