'use client'
import * as S from './styles'
import Text from '@/components/Text'
import useIsMobile from '@/hooks/isMobile'
import Image from 'next/image'

const Presentation = () => {
  const isMobile = useIsMobile()

  return (
    <S.Wrapper>
      <S.LocalContainer>
        {!isMobile && (
          <Image
            src="/images/animations/animation-1.png"
            width={317}
            height={350}
            alt="Hárpá"
          />
        )}
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
