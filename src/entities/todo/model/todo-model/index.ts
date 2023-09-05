import {combine, createEffect, createEvent, createStore} from 'effector'
import {useStore} from 'effector-react'

import {api} from 'src/shared'
import {Todo} from 'src/shared/api/models'


export type QueryConfig = {
  completed?: boolean
  id?: string
}

const setQueryConfig = createEvent<QueryConfig>()

const getTodoListFx = createEffect(() => {
  return api.getTodos()
})

const getTodoByIdFx = createEffect((id: string) => {
  return api.getTodoById(id)
})

export const todoInitialState: Record<number, Todo> = {}

export const $todos = createStore(todoInitialState)
  .on(getTodoListFx.doneData, (_, payload) => payload)
  .on(getTodoByIdFx.doneData, (state, payload) => {
    if (payload) {
      return {
        ...state,
        ...payload
      }
    }

    return {...state}
  })

export const $queryConfig = createStore<QueryConfig>({}).on(
  setQueryConfig,
  (_, payload) => payload
)

// Можно добавить потенциально debounce логику
export const $todoListLoading = getTodoListFx.pending
export const $todoByIdLoading = getTodoByIdFx.pending

export const $todoList = combine($todos, todo => Object.values(todo))

export const $todosFiltered = combine(
  $todoList,
  $queryConfig,
  (todoList, config) => {
    return todoList.filter(
      todo =>
        config.completed === undefined || todo.completed === config.completed
    )
  }
)

const useTodo = (
  todoId: string
): import('src/shared/api/models').Todo | undefined => {
  return useStore($todos)[todoId as never]
}

export const $todoListEmpty = $todosFiltered.map(list => list.length === 0)

export const events = {setQueryConfig}

export const effects = {
  getTodoByIdFx,
  getTodoListFx
}

export const selectors = {
  useTodo
}
