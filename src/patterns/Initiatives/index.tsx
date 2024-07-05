import AnimatedIllustration from '@/components/AnimatedIllustration'
import TextGrid from '@/components/TextGrid'
import { InitiativeData } from '@/types'
import { Fragment } from 'react'
import * as S from './styles'

interface InitiativesProps {
  data: InitiativeData[]
  id?: string
}

const Initiatives = ({ data, id }: InitiativesProps) => {
  return (
    <S.Wrapper id={id}>
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
}

export default Initiatives
