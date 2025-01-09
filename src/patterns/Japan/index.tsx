'use client'
import Heading from '@/components/Heading'
import Container from '../Container'
import * as S from './styles'
import Text from '@/components/Text'
import Image from 'next/image'
import { WHATSSAPP_URL } from '@/constants'
import GoToSection from '@/components/GoToSection'
import useIsDeviceType from '@/utils/useIsDeviceType'

const Japan = () => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')
  const imageVersion = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'

  const getSlideDimensions = () => {
    const dimensions = {
      desktop: { width: 1290, height: 690 },
      tablet: { width: 705, height: 375 },
      mobile: { width: 327, height: 220 }
    }

    if (isDesktop) return dimensions.desktop
    if (isTablet) return dimensions.tablet

    return dimensions.mobile
  }

  return (
    <S.Wrapper>
      <Container>
        <Heading selector="japan-title">O Japão</Heading>
        <Text selector="japan-text">
          Conhecido por unir tradição e tecnologia, o Japão é o novo destino da
          HÁRPÁ.
          <br /> A próxima expedição promete ser uma experiência incrível e
          mágica. <span className="japan-date">De 14 a 26 de maio de 2025</span>
          .
        </Text>
        <Image
          src={`/images/japan/japan-${imageVersion}.png`}
          alt="Ilustração do Japão"
          width={getSlideDimensions().width}
          height={getSlideDimensions().height}
          quality={100}
          className="japan-image"
        />
        <GoToSection link={WHATSSAPP_URL} isExternal selector="japan-cta">
          ENTRE EM CONTATO E SAIBA MAIS {'>'}
        </GoToSection>
      </Container>
    </S.Wrapper>
  )
}

export default Japan
