'use client'
import useIsMobile from '@/hooks/isMobile'
import Container from '../Container'
import Logo from '../Logo'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => {
  const isMobile = useIsMobile()

  return (
    <S.Wrapper>
      <Container>
        {isMobile ? (
          <Logo width={10} height={18} imgSrc="harpa-logo-mobile" />
        ) : (
          <Logo />
        )}
        <Menu />
      </Container>
    </S.Wrapper>
  )
}

export default Header
