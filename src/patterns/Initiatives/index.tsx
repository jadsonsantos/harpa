import AnimatedIllustration from '@/components/AnimatedIllustration'
import TextGrid from '@/components/TextGrid'
import { InitiativeData } from '@/types'
import { Fragment } from 'react'
import * as S from './styles'

const Initiatives = ({ data }: { data: InitiativeData[] }) => (
  <S.Wrapper>
    <S.InitiativesContainer>
      <AnimatedIllustration />
      <S.InitiativesText>
        {data.map((item: InitiativeData) => {
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
