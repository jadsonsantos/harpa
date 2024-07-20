'use client'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import NavigationButtons from '@/components/NavigationButtons'
import Text from '@/components/Text'
import useIsDeviceType from '@/utils/useIsDeviceType'
import * as S from './styles'

const Slider = () => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')

  const slideDimension = () => {
    if (isDesktop) {
      return 414
    }

    if (isTablet) {
      return 250
    }

    return 240
  }

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        centeredSlides={true}
        loop={true}
        autoplay={{
          disableOnInteraction: false
        }}
        modules={[Autoplay, Navigation]}
        className="hall-swiper"
      >
        <S.HallNavigation>
          <Text>
            Conheça HARPEIROS que já vivenciaram essa experiência na terra do
            gelo e do fogo.
          </Text>
          {isDesktop && <NavigationButtons />}
        </S.HallNavigation>
        {Array.from({ length: 11 }, (_, i) => (
          <SwiperSlide key={i + 1} style={{ width: `${slideDimension()}px` }}>
            <Image
              src={`/images/hall/hall-${i + 1}.png`}
              alt={`Slide ${i + 1}`}
              width={slideDimension()}
              height={slideDimension()}
              className="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
