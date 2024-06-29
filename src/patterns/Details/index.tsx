import AnimatedIllustration from '@/components/AnimatedIllustration'
import HotelsDetails from '@/components/HotelsDetails'
import { data, hotelsDetails } from './data'
import * as S from './styles'

const Details = () => (
  <S.Wrapper>
    <S.DetailsContainer>
      <AnimatedIllustration />
      <div>
        {data.map((data) => (
          <S.DetailsTextGrid key={data.title} {...data}></S.DetailsTextGrid>
        ))}
        <HotelsDetails
          title={hotelsDetails.title}
          description={hotelsDetails.description}
          hotels={hotelsDetails.hotels}
        />
      </div>
    </S.DetailsContainer>
  </S.Wrapper>
)

export default Details
