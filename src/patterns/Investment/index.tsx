import Text from '@/components/Text'
import Heading from '../../components/Heading'
import * as S from './styles'
import data from './data'

const Investment = () => (
  <S.Wrapper>
    <S.Container>
      <Heading>Valores de todas estas vantagens</Heading>
      <Text>
        O valor disposto abaixo contempla todas as vantagens exclusivas para
        HARPEIROS.
      </Text>
      <S.InvestmentList>
        {data.map((data) => (
          <li key={data.title}>
            <div>{data.icon}</div>
            <Text>
              <strong>{data.title}</strong>
            </Text>
            {data.description.map((desc, index) => (
              <Text key={index}>{desc}</Text>
            ))}
          </li>
        ))}
      </S.InvestmentList>
    </S.Container>
  </S.Wrapper>
)

export default Investment
