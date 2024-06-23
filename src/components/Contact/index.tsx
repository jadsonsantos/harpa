'use client'
import Container from '../../patterns/Container'
import CustomLink from '../CustomLink'
import Logo from '../Logo'
import Text from '../Text'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <Container>
      <Logo width={245} height={40} />
      <S.Address>
        <Text>
          Avenida Paulo VI, Sumaré,
          <br /> São Paulo/SP, Brasil
        </Text>
      </S.Address>
      <Text>
        <CustomLink href="tel:551195824594">+55 (11) 9 9584-2594</CustomLink>
      </Text>
    </Container>
  </S.Wrapper>
)

export default Contact
