import {FC} from 'react'
import styled from 'styled-components'

interface IProps {
  placeholder: string
  name: string
}

const Input: FC<IProps> = props => {
  const {name, placeholder} = props

  return <StyledInput name={name} placeholder={placeholder} />
}

const StyledInput = styled.input`
  height: 30px;
  width: 100%;

  border-radius: 8px;
  border: none;
  outline: none;

  padding: 0 16px;
`

export default Input
