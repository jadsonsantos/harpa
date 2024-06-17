'use client'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => <S.Wrapper>{children}</S.Wrapper>

export default Container
