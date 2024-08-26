import Text from '@/components/Text'
import Heading from '../../components/Heading'
import Container from '../Container'
import data from './data'
import * as S from './styles'

const Investment = () => (
  <S.Wrapper>
    <Container>
      <Heading>Valores de todas estas vantagens</Heading>
      <Text>
        O valor disposto abaixo contempla todas as vantagens exclusivas para
        HÁRPÉIROS.
      </Text>
      <S.InvestmentList>
        {data.map((data) => (
          <li key={data.title}>
            <S.InvestmentIcon>{data.icon}</S.InvestmentIcon>
            <S.InvestmentTitle>{data.title}</S.InvestmentTitle>
            {data.description.map((desc) => (
              <Text key={desc}>{desc}</Text>
            ))}
          </li>
        ))}
      </S.InvestmentList>
    </Container>
  </S.Wrapper>
)

export default Investment
