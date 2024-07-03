import AnimatedIllustration from '@/components/AnimatedIllustration'
import TextGrid from '@/components/TextGrid'
import { Fragment } from 'react'
import data from './data'
import * as S from './styles'

const Initiatives = () => (
  <S.Wrapper>
    <S.InitiativesContainer>
      <AnimatedIllustration />
      <S.InitiativesText>
        {data.map((item) => {
          return (
            <Fragment key={item.title}>
              <TextGrid {...item} />
            </Fragment>
          )
        })}
      </S.InitiativesText>
    </S.InitiativesContainer>
  </S.Wrapper>
)

export default Initiatives
