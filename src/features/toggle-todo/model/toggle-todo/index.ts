import {createEvent} from 'effector'
import {produce} from 'immer'

import {todoModel} from 'src/entities'

const toggleTodo = createEvent<string>()

todoModel.$todos.on(toggleTodo, (state, todoId) =>
  produce(state, draft => {
    const todo = draft[todoId as never]
    todo.completed = !todo.completed
  })
)

export const events = {toggleTodo}
