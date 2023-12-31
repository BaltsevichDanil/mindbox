import {combine, createEffect, createEvent, createStore} from 'effector'
import {useStore} from 'effector-react'

import {api} from 'src/shared'
import {Todo} from 'src/shared/api/models'

export type QueryConfig = {
  completed?: boolean
}

const setQueryConfig = createEvent<QueryConfig>()

const getTodoListFx = createEffect(() => {
  return api.todos.getTodos()
})

export const todoInitialState: Record<string, Todo> = {}

export const $todos = createStore(todoInitialState).on(
  getTodoListFx.doneData,
  (_, payload) => payload
)

export const $queryConfig = createStore<QueryConfig>({}).on(
  setQueryConfig,
  (_, payload) => payload
)

export const $todoListLoading = getTodoListFx.pending

export const $todoList = combine($todos, todo => Object.values(todo))

export const $todosFiltered = combine(
  $todoList,
  $queryConfig,
  (todoList, config) => {
    if (config.completed !== undefined) {
      if (config.completed) {
        const completedTodos = todoList.filter(todo => todo.completed)
        return [...completedTodos]
      }

      if (!config.completed) {
        const uncompletedTodos = todoList.filter(todo => !todo.completed)
        return [...uncompletedTodos]
      }
    }

    return todoList
  }
)

const useTodo = (
  todoId: string
): import('src/shared/api/models').Todo | undefined => {
  return useStore($todos)[todoId]
}

export const $todoListEmpty = $todosFiltered.map(list => list.length === 0)

export const useTodoFilter = (): QueryConfig => useStore($queryConfig)

export const events = {setQueryConfig}

export const effects = {
  getTodoListFx
}

export const selectors = {
  useTodo
}
