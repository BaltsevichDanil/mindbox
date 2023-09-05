import {FC} from 'react'
import {TodoCard, todoModel} from 'src/entities'

import {list, variant} from '@effector/reflect'
import {combine} from 'effector'
import {Delete, Toggle} from 'src/features'
import { Todo } from 'src/shared/api/models'

const List: FC = () => {
  return <ListContent />
}

interface IListItemViewProps {
  todo: import('src/shared/api/models').Todo
}
const ListItemView: FC<IListItemViewProps> = ({todo}) => {
  return (
    <div key={todo.id}>
      <TodoCard data={todo} before={<Toggle todoId={todo.id} />}  after={<Delete todoId={todo.id} />}/>
    </div>
  )
}

const TodoList = list({
  view: ListItemView,
  source: todoModel.$todosFiltered,
  bind: {

  },
  mapItem: {
    todo: (todo: Todo) => todo
  }
})

const ListContent = variant({
  source: combine(
    {
      isLoading: todoModel.$todoListLoading,
      isEmpty: todoModel.$todoListEmpty
    },
    ({isLoading, isEmpty}) => {
      if (isLoading) {
        return 'loading'
      }
      if (isEmpty) {
        return 'empty'
      }
      return 'ready'
    }
  ),
  cases: {
    loading: () => 'Загрузка',
    empty: () => 'Пусто',
    ready: TodoList
  },
  hooks: {
    mounted: todoModel.effects.getTodoListFx.prepend(() => {})
  }
})

export default List
