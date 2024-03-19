import { Todo } from "@/services/example/definitions"
import { getAll } from "@/services/example/use-cases"

export async function getStaticProps() {
  const todos: Todo[] = await getAll()

  return todos
}
export default async function List() {


  const todos: Todo[] = await getStaticProps()

  return (
    <>{todos.map(todo => <li key={todo.id}>{todo.title}</li>)}</>
  )
}