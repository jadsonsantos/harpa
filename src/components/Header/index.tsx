'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Logo from '@/components/ui/Logo'
import Container from '@/patterns/Container'
import { usePathname } from 'next/navigation'
import * as S from './styles'

const DARK_MODE_ROUTES = ['/private']

const Header = () => {
  const pathname = usePathname()
  const isDark = DARK_MODE_ROUTES.some(
    (route) => pathname?.replace(/\/$/, '').endsWith(route)
  )

  return (
    <S.Header $dark={isDark}>
      <Container>
        <Logo dark={isDark} />
        <S.Nav>
          <LanguageSwitcher dark={isDark} />
        </S.Nav>
      </Container>
    </S.Header>
  )
}

export default Header
