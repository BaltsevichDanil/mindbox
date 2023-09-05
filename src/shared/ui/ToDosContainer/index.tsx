import {FC, PropsWithChildren} from 'react'
import styled from 'styled-components'

const ToDosContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <Center>
      <Container>{children}</Container>
    </Center>
  )
}

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 50%;
  max-width: 800px;
  height: 600px;

  background-color: var(--primary-container-color);

  border-radius: 16px;

  padding: 24px;

  @media screen and (max-width: 720px) {
    width: 98%;
  }
`

export default ToDosContainer
