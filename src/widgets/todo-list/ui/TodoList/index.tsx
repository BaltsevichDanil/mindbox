// @ts-ignore Так делать, конечно, нельзя, но тут нужно было быстрое решение
import {list, variant} from '@effector/reflect'
import {combine} from 'effector'
import {FC} from 'react'
import styled from 'styled-components'

import {TodoCard, todoModel} from 'src/entities'
import {CreateTodo, Delete, SortTodo, Toggle} from 'src/features'
import {text} from 'src/shared'
import {Todo} from 'src/shared/api/models'

const List: FC = () => {
  return (
    <StyledList>
      <Header>
        <HeaderText>{text.header}</HeaderText>
        <CreateTodo />
        <SortTodo />
      </Header>
      <StyledListContent>
        <ListContent />
      </StyledListContent>
    </StyledList>
  )
}

interface IListItemViewProps {
  todo: import('src/shared/api/models').Todo
}

const ListItemView: FC<IListItemViewProps> = ({todo}) => {
  return (
    <TodoCard
      key={todo.id}
      data={todo}
      before={<Toggle todoId={todo.id} />}
      after={<Delete todoId={todo.id} />}
    />
  )
}

const TodoList = list({
  view: ListItemView,
  source: todoModel.$todosFiltered,
  bind: {},
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
    loading: () => (
      <StatusContainer>
        <p>{text.loading}</p>
      </StatusContainer>
    ),
    empty: () => (
      <StatusContainer>
        <p>{text.dontHaveTodos}</p>
      </StatusContainer>
    ),
    ready: TodoList
  },
  hooks: {
    mounted: todoModel.effects.getTodoListFx.prepend(() => {})
  }
})

const StyledList = styled.div`
  height: calc(600px - 24px * 2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const HeaderText = styled.h1`
  margin-bottom: 16px;
`

const StatusContainer = styled.div`
  width: 100%;
  text-align: center;
`

const StyledListContent = styled.div`
  height: 410px;

  overflow-y: scroll;
`

export default List
