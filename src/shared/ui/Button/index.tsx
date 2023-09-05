import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react'
import styled from 'styled-components'

interface IProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  height?: number
  width?: number
}

const Button: FC<IProps> = props => {
  const {secondary, width, height, children} = props
  console.log(secondary)
  return (
    <ButtonContainer
      $secondary={secondary}
      $width={width}
      $height={height}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<{
  $secondary?: boolean
  $height?: number
  $width?: number
}>`
  height: ${(props): string => (props.$height ? `${props.$height}px` : '40px')};
  min-width: ${(props): string =>
    props.$width ? `${props.$width}px` : '40px'};

  display: flex;
  align-items: center;
  justify-content: center;

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
