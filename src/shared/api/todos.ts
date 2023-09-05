import type {Todo} from './models'

// Get all todos
export const getTodos = async (): Promise<Todo[]> => {
  return Object.values(localStorage).map((todo): Todo => JSON.parse(todo))
}

// Get todo by id
export const getTodoById = async (id: string): Promise<Todo | null> => {
  const todo = localStorage.getItem(id)

  if (todo) {
    return JSON.parse(todo)
  }

  return null
}
