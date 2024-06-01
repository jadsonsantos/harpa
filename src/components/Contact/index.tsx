import Image from 'next/image'
import Container from '../Container'
import Text from '../Text'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <Container>
      <Image
        src={'/images/harpa-logo.svg'}
        alt="Logo da Harpa"
        width={245}
        height={40}
      />
      <S.Address>
        <Text>
          Avenida Paulo VI, Sumaré,
          <br /> São Paulo/SP, Brasil
        </Text>
      </S.Address>
      <Text>+55 (11) 9 9584-2594</Text>
    </Container>
  </S.Wrapper>
)

export default Contact
