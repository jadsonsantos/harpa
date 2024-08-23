import ExpeditionCard from '@/components/ExpeditionCard'
import Heading from '@/components/Heading'
import PrivateCard from '@/components/PrivateCard'

import Container from '@/patterns/Container'

import expeditions from './data'
import * as S from './styles'

const NextExpeditions = () => (
  <S.Wrapper>
    <Container>
      <Heading>Próximas expedições</Heading>
      <S.NextExpeditionsContainer>
        {expeditions.map((expedition) => (
          <ExpeditionCard key={expedition.id} {...expedition} />
        ))}
        <PrivateCard />
      </S.NextExpeditionsContainer>
    </Container>
  </S.Wrapper>
)

export default NextExpeditions
