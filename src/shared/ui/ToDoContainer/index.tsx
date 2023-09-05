import {FC, PropsWithChildren} from 'react'
import styled from 'styled-components'

const ToDoContainer: FC<PropsWithChildren> = ({children}) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--secondary-container-color);
  color: black;

  border-radius: 16px;

  padding: 8px;
  margin-bottom: 8px;
`
export default ToDoContainer
