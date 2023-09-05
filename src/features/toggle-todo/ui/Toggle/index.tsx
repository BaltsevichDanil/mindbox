import {FC} from 'react'

import {todoModel} from 'src/entities'
import * as toggleTodoModel from 'src/features/toggle-todo/model'

interface IProps {
  todoId: string
}

const Toggle: FC<IProps> = ({todoId}) => {
  const todo = todoModel.selectors.useTodo(todoId)

  if (!todo) {
    return null
  }

  const handleClick = (): string => toggleTodoModel.events.toggleTodo(todoId)

  return (
    <input type='checkbox' checked={todo.completed} onClick={handleClick} />
  )
}

export default Toggle
