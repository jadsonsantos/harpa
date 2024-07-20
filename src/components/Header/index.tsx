'use client'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Container from '@/patterns/Container'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </S.Header>
  )
}

export default Header
