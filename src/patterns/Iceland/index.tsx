import GoToSection from '@/components/GoToSection'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import Container from '../Container'
import data from './data'
import * as S from './styles'

const Iceland = () => (
  <S.Wrapper>
    <Container>
      <Heading>A Islândia</Heading>
      <S.IcelandText>
        {data.map((data) => (
          <Text key={data}>{data}</Text>
        ))}
      </S.IcelandText>
      <GoToSection link="/a-expedicao#curiosidades">
        CONHEÇA CURIOSIDADES SOBRE A ISLÂNDIA {'>'}
      </GoToSection>
    </Container>
  </S.Wrapper>
)

export default Iceland
