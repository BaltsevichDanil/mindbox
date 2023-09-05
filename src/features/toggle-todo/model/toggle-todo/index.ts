import {createEvent} from 'effector'

import {todoModel} from 'src/entities'
import { api } from 'src/shared'

type ToggleTodoConfig = {
  todoId: string
}


const toggleTodo = createEvent<ToggleTodoConfig>()

todoModel.$todos.on(toggleTodo, (state, payload) => {
  const todo = api.todos.toggleTodoStatus(payload.todoId)

  if (todo) {
    return {...state, [todo.id]: todo}
  }

  return state
})

export const toggleTodoEvent = {toggleTodo}
