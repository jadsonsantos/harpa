'use client'
import Container from '../../patterns/Container'
import Text from '../Text'
import * as S from './styles'
import Logo from '../Logo'
import CustomLink from '../CustomLink'

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
