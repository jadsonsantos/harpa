'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Logo from '@/components/ui/Logo'
import Container from '@/patterns/Container'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <Logo />
        <S.Nav>
          <LanguageSwitcher />
        </S.Nav>
      </Container>
    </S.Header>
  )
}

export default Header
