'use client'
import useIsMobile from '@/hooks/isMobile'
import { useState } from 'react'
import Container from '../../patterns/Container'
import Logo from '../Logo'
import Menu from '../Menu'
import Text from '../Text'
import * as S from './styles'

const Header = () => {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.Wrapper>
      <Container>
        {isMobile ? (
          <>
            <Logo width={10} height={18} imgSrc="harpa-logo-mobile" />
            <S.MenuWrapper onClick={() => handleClick()}>
              <Text>/ Menu</Text>
              {isMenuOpen && <Menu />}
            </S.MenuWrapper>
          </>
        ) : (
          <>
            <Logo />
            <Menu />
          </>
        )}
      </Container>
    </S.Wrapper>
  )
}

export default Header
