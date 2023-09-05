import {text} from 'src/shared'

export type Filter = {
  id: number
  name: string
  title: string
  config: import('src/entities/todo').todoModel.QueryConfig
}

export const filters: Record<string, Filter> = {
  all: {
    id: 1,
    title: text.all,
    name: 'all',
    config: {}
  },
  completed: {
    id: 2,
    title: text.completed,
    name: 'completed',
    config: {completed: true}
  },
  uncompleted: {
    id: 3,
    title: text.uncomleted,
    name: 'uncompleted',
    config: {completed: false}
  }
}

export const DEFAULT_FILTER = 'completed'

export const filtersList = Object.values(filters)

export const getFilterByName = (name: string): Filter => filters[name]
