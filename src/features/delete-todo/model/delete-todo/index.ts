import {createEvent} from 'effector'

import {todoModel} from 'src/entities'
import { api } from 'src/shared'

type DeleteTodoConfig = {
  todoId: string
}


const deleteTodo = createEvent<DeleteTodoConfig>()

todoModel.$todos.on(deleteTodo, (state, payload) => {
  api.todos.deleteTodo(payload.todoId)

  delete state[payload.todoId]

  return {...state}
})

export const deleteTodoEvent = {deleteTodo}
