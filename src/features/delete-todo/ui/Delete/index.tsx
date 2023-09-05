import {FC} from 'react'

import {todoModel} from 'src/entities'
import {deleteTodoModel} from 'src/features'
import {Button} from 'src/shared'

interface IProps {
  todoId: string
}

const Delete: FC<IProps> = ({todoId}) => {
  const todo = todoModel.selectors.useTodo(todoId)

  if (!todo) {
    return null
  }

  const handleClick = (): void => {
    deleteTodoModel.deleteTodoEvent.deleteTodo({todoId})
  }

  return <Button onClick={handleClick}>Удалить</Button>
}

export default Delete
