import AnimatedIllustration from '@/components/AnimatedIllustration'
import TextGrid from '@/components/TextGrid'
import { InitiativeData } from '@/types'
import { Fragment } from 'react'
import * as S from './styles'

interface InitiativesProps {
  data: InitiativeData[]
  id?: string
  animation?: string
  selector?: string
}

const Initiatives = ({
  data,
  id,
  animation = '4',
  selector = ''
}: InitiativesProps) => {
  return (
    <S.Wrapper id={id} className={selector}>
      <S.InitiativesContainer>
        <AnimatedIllustration name={animation} />
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
