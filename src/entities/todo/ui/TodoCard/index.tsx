import {FC, ReactNode} from 'react'
import styled from 'styled-components'

import {ToDoContainer} from 'src/shared'

interface IProps {
  data: import('src/shared/api/models').Todo
  before?: ReactNode
  after?: ReactNode
}

const TodoCard: FC<IProps> = props => {
  const {before, after, data} = props

  return (
    <ToDoContainer>
      <TodoContent>
        {before}
        <TodoText $completed={data.completed}>{data.title}</TodoText>
      </TodoContent>
      {after}
    </ToDoContainer>
  )
}

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const TodoText = styled.p<{$completed?: boolean}>`
  text-decoration: ${(props): string =>
    props.$completed ? 'line-through' : 'none'};
`

export default TodoCard
