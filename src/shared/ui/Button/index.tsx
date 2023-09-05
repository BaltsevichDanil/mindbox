import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react'
import styled from 'styled-components'

interface IProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}

const Button: FC<IProps> = props => {
  const {secondary, children} = props

  return (
    <ButtonContainer $secondary={secondary} {...props}>
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<{$secondary?: boolean}>`
  min-width: 20px;
  max-width: max-content;

  background-color: ${(props): string =>
    props.$secondary
      ? 'var(--secondary-btn-color)'
      : 'var(--primary-btn-color)'};
  color: black;

  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid white;

  cursor: pointer;

  transition: 0.2s;
  &:hover {
    background-color: ${(props): string =>
      props.$secondary
        ? 'var(--secondary-btn-hover-color)'
        : 'var(--primary-btn-hover-color)'};
  }
`
export default Button
