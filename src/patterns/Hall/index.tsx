import Heading from '@/components/Heading'
import Text from '@/components/Text'
import Container from '@/patterns/Container'
import Slider from './Slider'
import * as S from './styles'

const Hall = () => (
  <S.Wrapper>
    <Container>
      <Heading>Hall da fama</Heading>
      <Text>
        Conheça HARPEIROS que já vivenciaram essa experiência na terra do gelo e
        do fogo.
      </Text>
    </Container>
    <Slider />
  </S.Wrapper>
)

export default Hall
