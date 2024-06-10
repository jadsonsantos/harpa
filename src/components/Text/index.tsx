import { ComponentProps } from 'react'
import * as S from './styles'
type TextProps = ComponentProps<'p'>

const Text = ({ children }: TextProps) => {
  return <S.Text>{children}</S.Text>
}

export default Text
