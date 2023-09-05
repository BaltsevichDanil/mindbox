import {createEvent} from 'effector'

import {todoModel} from 'src/entities'
import {api} from 'src/shared'

type CreateTodoConfig = {
  title: string
}

const createTodo = createEvent<CreateTodoConfig>()

todoModel.$todos.on(createTodo, (state, payload) => {
  const todo = api.todos.createTodo(payload.title)
  return {...state, [todo.id]: todo}
})

export const createTodoEvents = {createTodo}
