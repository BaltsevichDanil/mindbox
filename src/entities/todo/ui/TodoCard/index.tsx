import {FC, ReactNode} from 'react'

import ToDoContainer from 'src/shared/ui/ToDoContainer'

interface IProps {
  data: import('src/shared/api/models').Todo
  before?: ReactNode
}

const TodoCard: FC<IProps> = props => {
  const {before, data} = props

  return (
    <ToDoContainer>
      {before}
      <p>{data.title}</p>
    </ToDoContainer>
  )
}

export default TodoCard
