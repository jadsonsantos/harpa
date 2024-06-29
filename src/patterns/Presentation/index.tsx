'use client'
import AnimatedIllustration from '@/components/AnimatedIllustration'
import GoToSection from '@/components/GoToSection'
import * as S from './styles'

const Presentation = () => {
  return (
    <S.Wrapper>
      <S.LocalContainer>
        <AnimatedIllustration />
        <article>
          <S.Title>
            Com o itinerário mais completo do mercado e a autonomia que
            possuímos por sermos pequenos grupos com transporte próprio e guia,
            a HÁRPÁ proporciona aos seus clientes uma experiência premium e
            intimista, com muita liberdade e exclusividade.
          </S.Title>
          <GoToSection link="/a-expedicao#detalhes">
            CONHEÇA NOSSOS PACOTES {'>'}
          </GoToSection>
        </article>
      </S.LocalContainer>
    </S.Wrapper>
  )
}

export default Presentation
