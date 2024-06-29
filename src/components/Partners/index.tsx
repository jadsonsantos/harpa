'use client'
import useIsMobile from '@/hooks/isMobile'
import Image from 'next/image'
import GoToSection from '../GoToSection'
import Heading from '../Heading'
import * as S from './styles'

const Partners = () => {
  const isMobile = useIsMobile()

  return (
    <S.PartnersWrapper>
      <S.PartnersContainer>
        {!isMobile && (
          <Image
            src="/images/selo-alta-qualidade.svg"
            alt="Selo de alta qualidade"
            width={163}
            height={202}
          />
        )}
        <S.PartnersContent>
          <Heading>
            Parcerias exclusivas e as melhores vantagens para nossos clientes
          </Heading>
          <S.PartnersText>
            A HÁRPÁ possui uma parceria exclusiva com um dos melhores SPAs da
            Islândia. O{' '}
            <S.PartnersLink href="https://www.bluelagoon.com/">
              Blue Lagoon
            </S.PartnersLink>{' '}
            é notado por sua experiência única e inesquecível. Clientes HÁRPÁ
            possuem direito ao pacote premium, além de entrada exclusiva no
            espaço. Conheça nossa expedição e saiba mais.
          </S.PartnersText>
          <GoToSection link="/a-expedicao#detalhes">
            CONHEÇA NOSSOS PACOTES {'>'}
          </GoToSection>
        </S.PartnersContent>
      </S.PartnersContainer>
    </S.PartnersWrapper>
  )
}

export default Partners
