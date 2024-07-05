'use client'
import AnimatedIllustration from '@/components/AnimatedIllustration'
import GoToSection from '@/components/GoToSection'
import * as S from './styles'

interface PresentationProps {
  title: string
}

const Presentation = ({ title }: PresentationProps) => {
  return (
    <S.Wrapper>
      <S.LocalContainer>
        <AnimatedIllustration />
        <article>
          <S.Title>{title}</S.Title>
          <GoToSection link="/a-expedicao#detalhes">
            CONHEÇA NOSSOS PACOTES {'>'}
          </GoToSection>
        </article>
      </S.LocalContainer>
    </S.Wrapper>
  )
}

export default Presentation
