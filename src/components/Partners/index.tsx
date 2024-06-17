'use client'
import Image from 'next/image'
import CustomLink from '../CustomLink'
import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'
import useIsMobile from '@/hooks/isMobile'

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
            <CustomLink href="https://www.bluelagoon.com/">
              Blue Lagoon
            </CustomLink>{' '}
            é notado por sua experiência única e inesquecível. Clientes HÁRPÁ
            possuem direito ao pacote premium, além de entrada exclusiva no
            espaço. Conheça nossa expedição e saiba mais.
          </S.PartnersText>
          <Text>
            <CustomLink>CONHEÇA NOSSOS PACOTES {'>'}</CustomLink>
          </Text>
        </S.PartnersContent>
      </S.PartnersContainer>
    </S.PartnersWrapper>
  )
}

export default Partners
