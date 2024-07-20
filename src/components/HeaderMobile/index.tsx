'use client'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Text from '@/components/Text'
import Container from '@/patterns/Container'
import { useState } from 'react'
import * as S from './styles'

interface HeaderMobileProps {
  title: string
}

const HeaderMobile = ({ title }: HeaderMobileProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.HeaderMobile>
      <Container>
        <Logo width={10} height={18} imgSrc="harpa-logo-mobile" />
        <S.MenuWrapper onClick={() => handleClick()}>
          <Text>/ Menu • {title}</Text>
          {isMenuOpen && <Menu />}
        </S.MenuWrapper>
      </Container>
    </S.HeaderMobile>
  )
}

export default HeaderMobile
