'use client'
import useIsMobile from '@/hooks/isMobile'
import Container from '../../patterns/Container'
import Logo from '../Logo'
import Menu from '../Menu'
import Text from '../Text'
import * as S from './styles'

const Header = () => {
  const isMobile = useIsMobile()

  const handleClick = () => {}

  return (
    <S.Wrapper>
      <Container>
        {isMobile ? (
          <>
            <Logo width={10} height={18} imgSrc="harpa-logo-mobile" />
            <div onClick={() => handleClick()}>
              <Text>/ Menu</Text>
            </div>
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
