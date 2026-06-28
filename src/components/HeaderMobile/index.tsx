'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Logo from '@/components/ui/Logo'
import Container from '@/patterns/Container'
import * as S from './styles'

interface HeaderMobileProps {
  title?: string
}

const HeaderMobile = ({}: HeaderMobileProps) => {
  return (
    <S.HeaderMobile>
      <Container>
        <Logo width={110} height={18} />
        <LanguageSwitcher />
      </Container>
    </S.HeaderMobile>
  )
}

export default HeaderMobile
