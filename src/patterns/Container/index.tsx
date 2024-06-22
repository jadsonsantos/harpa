'use client'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => <S.Container>{children}</S.Container>

export default Container
