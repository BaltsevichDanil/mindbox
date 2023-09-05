import {text} from 'src/shared'

export type Filter = {
  id: number
  name: string
  title: string
  config: import('src/entities/todo').todoModel.QueryConfig
}

export const filters: Record<string, Filter> = {
  completed: {
    id: 1,
    name: 'completed',
    title: text.completed,
    config: {completed: true, createdAt: false}
  },
  createdAt: {
    id: 2,
    name: 'createdAt',
    title: text.createdAt,
    config: {completed: false, createdAt: true}
  }
}

export const DEFAULT_FILTER = 'completed'

export const filtersList = Object.values(filters)

export const getFilterByName = (name: string): Filter => filters[name]
