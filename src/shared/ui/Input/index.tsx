import {ChangeEvent, FC} from 'react'
import styled from 'styled-components'

interface IProps {
  value: string
  placeholder: string
  onChange: (text: string) => void
}

const Input: FC<IProps> = props => {
  const {value, placeholder, onChange} = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange(e.target.value)

  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
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
