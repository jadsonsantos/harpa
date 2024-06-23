'use client'
import AnimatedIllustration from '@/components/AnimatedIllustration'
import * as S from './styles'
import Text from '@/components/Text'

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
          <Text>CONHEÇA NOSSOS PACOTES {'>'}</Text>
        </article>
      </S.LocalContainer>
    </S.Wrapper>
  )
}

export default Presentation
