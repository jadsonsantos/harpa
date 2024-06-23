import data from './data'
import * as S from './styles'
import AnimatedIllustration from '@/components/AnimatedIllustration'

const Details = () => (
  <S.Wrapper>
    <S.DetailsContainer>
      <AnimatedIllustration />
      <div>
        {data.map((data) => (
          <S.DetailsTextGrid key={data.title} {...data}></S.DetailsTextGrid>
        ))}
      </div>
    </S.DetailsContainer>
  </S.Wrapper>
)

export default Details