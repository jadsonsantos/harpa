import Heading from '@/components/Heading'
import Container from '@/patterns/Container'
import Slider from './Slider'
import * as S from './styles'

const Hall = () => (
  <S.Wrapper>
    <Container>
      <Heading>Hall da fama</Heading>
    </Container>
    <Slider />
  </S.Wrapper>
)

export default Hall
