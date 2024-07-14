'use client'
import Image from 'next/image'
import { useCallback, useRef } from 'react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Arrow from '@/components/Arrow'
import Text from '@/components/Text'
import useIsDeviceType from '@/utils/useIsDeviceType'
import * as S from './styles'

const Slider = () => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  const slideDimension = () => {
    if (isDesktop) {
      return 414
    }

    if (isTablet) {
      return 250
    }

    return 240
  }

  const NavigationWrapper = () => {
    return (
      <S.NavigationWrapper>
        <button
          className="swiper-button swiper-button-prev"
          onClick={handlePrev}
        >
          <Arrow />
        </button>
        <button
          className="swiper-button swiper-button-next"
          onClick={handleNext}
        >
          <Arrow />
        </button>
      </S.NavigationWrapper>
    )
  }

  return (
    <>
      <S.HallNavigation>
        <Text>
          Conheça HARPEIROS que já vivenciaram essa experiência na terra do gelo
          e do fogo.
        </Text>
        {isDesktop && <NavigationWrapper />}
      </S.HallNavigation>
      <Swiper
        ref={sliderRef}
        slidesPerView={'auto'}
        spaceBetween={24}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false
        }}
        modules={[Autoplay, Navigation]}
        className="hall-swiper"
      >
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
