import {v4 as uuidv4} from 'uuid'

import type {Todo} from './models'

// Get all todos
export const getTodos = (): Record<string, Todo> => {
  const todos: Record<string, Todo> = {}

  Object.entries(localStorage).forEach(([key, todo]) => {
    try {
      todos[key] = JSON.parse(todo)
    } catch (e) {
      return
    }
  })

  return todos
}

// Delete todo status
export const toggleTodoStatus = (id: string): Todo | null => {
  const todo = localStorage.getItem(id)

  try {
    if (todo) {
      const parsedTodo = JSON.parse(todo) as Todo
      parsedTodo.completed = !parsedTodo.completed

      localStorage.setItem(id, JSON.stringify(parsedTodo))

      return parsedTodo
    }

    return null
  } catch (e) {
    return null
  }
}

// Create todo
export const createTodo = (title: string): Todo => {
  const id = uuidv4()
  const createdAt = new Date()

  const todo: Todo = {
    id,
    title,
    completed: false,
    createdAt
  }

  localStorage.setItem(id, JSON.stringify(todo))

  return todo
}

// Delete todo
export const deleteTodo = (id: string): void => {
  localStorage.removeItem(id)
}
