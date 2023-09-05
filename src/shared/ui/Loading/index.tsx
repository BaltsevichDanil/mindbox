import {FC} from 'react'
import styled from 'styled-components'

const FullScreenLoading: FC = () => {
  return (
    <FullScreenComponent>
      <p>Загрузка...</p>
    </FullScreenComponent>
  )
}

const FullScreenComponent = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default FullScreenLoading
