import {FC} from 'react'

import {ToDosContainer} from 'src/shared/ui'
import {TodoList} from 'src/widgets'
import CreateTodo from 'src/features/craate-todo/ui/CreateTodo'

const Home: FC = () => {
  return (
    <ToDosContainer>
      <CreateTodo />
      <TodoList />
    </ToDosContainer>
  )
}

export default Home
