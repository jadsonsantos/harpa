import Image from 'next/image'
import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Heading from '@/components/Heading'
import NavigationButtons from '@/components/NavigationButtons'
import Text from '@/components/Text'
import useIsDeviceType from '@/utils/useIsDeviceType'

import { slider } from './data'
import * as S from './styles'

const Slider = () => {
  const isDesktop = useIsDeviceType('desktop')
  const isTablet = useIsDeviceType('tablet')
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  })
  const imageBreakpoint = isDesktop ? 'desktop' : 'tablet'

  useEffect(() => {
    if (isDesktop) {
      setImageDimensions({ width: 471, height: 484 })
    } else if (isTablet) {
      setImageDimensions({ width: 226, height: 411 })
    }
  }, [isDesktop, isTablet])

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Navigation, EffectFade]}
      effect="fade"
      className="swiper-container"
    >
      {slider.map(({ title, texts, image, alt }) => {
        return (
          <SwiperSlide key={title} className="swiper-slide">
            <Image
              src={`/images/services/${image}-${imageBreakpoint}.jpg`}
              alt={alt}
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="image"
              quality={100}
            />
            <S.ServicesContainer>
              <Heading>{title}</Heading>
              <S.ServicesText>
                {texts.map((text) => {
                  return <Text key={text}>{text}</Text>
                })}
              </S.ServicesText>
              <NavigationButtons hasPrevButton={false} />
            </S.ServicesContainer>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
