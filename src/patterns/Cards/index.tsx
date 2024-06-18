import * as S from './styles'
import data from './data'
import InfoCard from '@/components/InfoCard'

const Cards = () => (
  <S.Wrapper>
    <S.CardsContainer>
      {data.map((data) => (
        <InfoCard key={data.title} {...data} />
      ))}
    </S.CardsContainer>
  </S.Wrapper>
)

export default Cards
