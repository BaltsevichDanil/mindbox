import {FC} from 'react'

import CreateTodo from 'src/features/craate-todo/ui/CreateTodo'
import {ToDosContainer} from 'src/shared/ui'
import {TodoList} from 'src/widgets'

const Home: FC = () => {
  return (
    <ToDosContainer>
      <CreateTodo />
      <TodoList />
    </ToDosContainer>
  )
}

export default Home
