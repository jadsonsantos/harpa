import { ComponentProps } from 'react'
import * as S from './styles'

type ButtonProps = ComponentProps<'button'>

const Button = ({ children }: ButtonProps) => <S.Wrapper>{children}</S.Wrapper>

export default Button
