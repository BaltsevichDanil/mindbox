import {FC} from 'react'

import {ToDosContainer} from 'src/shared'
import {Todos} from 'src/widgets'

const Home: FC = () => {
  return (
    <ToDosContainer>
      <Todos />
    </ToDosContainer>
  )
}

export default Home
