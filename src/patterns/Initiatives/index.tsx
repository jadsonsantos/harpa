import TextGrid from '@/components/TextGrid'
import data from './data'
import * as S from './styles'
import Container from '../Container'

const Initiatives = () => (
  <S.Wrapper>
    <Container>
      {data.map((data) => (
        <TextGrid key={data.title} {...data} />
      ))}
    </Container>
  </S.Wrapper>
)

export default Initiatives
