import {FC} from 'react'

import {todoModel} from 'src/entities'
import { toggleTodoModel } from 'src/features'

interface IProps {
  todoId: string
}

const Toggle: FC<IProps> = ({todoId}) => {
  const todo = todoModel.selectors.useTodo(todoId)

  if (!todo) {
    return null
  }

  const handleClick = (): void => {
    toggleTodoModel.toggleTodoEvent.toggleTodo({todoId})
  }

  return (
    <input type='checkbox' checked={todo.completed} onClick={handleClick} readOnly/>
  )
}

export default Toggle
