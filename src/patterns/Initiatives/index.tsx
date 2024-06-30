import AnimatedIllustration from '@/components/AnimatedIllustration'
import TextGrid from '@/components/TextGrid'
import data from './data'
import * as S from './styles'

const Initiatives = () => (
  <S.Wrapper>
    <S.InitiativesContainer>
      <AnimatedIllustration />
      <S.InitiativesText>
        {data.map((data) => (
          <TextGrid key={data.title} {...data} />
        ))}
      </S.InitiativesText>
    </S.InitiativesContainer>
  </S.Wrapper>
)

export default Initiatives
