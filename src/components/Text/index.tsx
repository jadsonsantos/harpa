import { ComponentProps } from 'react'
import * as S from './styles'
type TextProps = ComponentProps<'p'>

const Text = ({ children }: TextProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Text
