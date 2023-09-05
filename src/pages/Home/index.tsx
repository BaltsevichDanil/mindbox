import {FC} from 'react'

import {ToDosContainer} from 'src/shared/ui'
import {TodoList} from 'src/widgets'

const Home: FC = () => {
  return (
    <ToDosContainer>
      <TodoList />
    </ToDosContainer>
  )
}

export default Home
