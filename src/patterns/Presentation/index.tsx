'use client'
import AnimatedIllustration from '@/components/AnimatedIllustration'
import GoToSection from '@/components/GoToSection'
import * as S from './styles'

interface PresentationProps {
  title: string
  animation?: string
}

const Presentation = ({ title, animation = '1' }: PresentationProps) => {
  return (
    <S.Wrapper>
      <S.LocalContainer>
        <AnimatedIllustration name={animation} />
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
