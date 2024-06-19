'use client'
import Container from '../../patterns/Container'
import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <Container>
        <p>Copyright ©️ {currentYear} HÁRPÁ • Todos os direitos reservados.</p>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
