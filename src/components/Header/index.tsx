import Container from '../Container'
import Logo from '../Logo'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Container>
      <Logo />
      <Menu />
    </Container>
  </S.Wrapper>
)

export default Header
