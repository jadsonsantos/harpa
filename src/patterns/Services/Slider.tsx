import Heading from '@/components/Heading'
import { Swiper, SwiperSlide } from '@/components/Swipper'
import Text from '@/components/Text'
import useIsDeviceType from '@/utils/useIsDeviceType'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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
      draggable={false}
      autoplay={true}
      // navigation={true}
      effect="fade"
    >
      {slider.map(({ title, texts, image, alt }) => {
        return (
          <SwiperSlide key={title} className="slide">
            <Image
              src={`/images/services/${image}-${imageBreakpoint}.png`}
              alt={alt}
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="image"
            />
            <S.ServicesContainer>
              <Heading>{title}</Heading>
              <S.ServicesText>
                {texts.map((text) => {
                  return <Text key={text}>{text}</Text>
                })}
              </S.ServicesText>
            </S.ServicesContainer>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
