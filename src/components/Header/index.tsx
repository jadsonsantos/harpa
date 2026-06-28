'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Menu from '@/components/Menu'
import Logo from '@/components/ui/Logo'
import Container from '@/patterns/Container'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <Logo />
        <S.Nav>
          <Menu />
          <LanguageSwitcher />
        </S.Nav>
      </Container>
    </S.Header>
  )
}

export default Header
