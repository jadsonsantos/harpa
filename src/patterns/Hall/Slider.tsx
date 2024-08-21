'use client'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import NavigationButtons from '@/components/NavigationButtons'
import Text from '@/components/Text'
import useIsDeviceType from '@/utils/useIsDeviceType'
import testimonials from './data'
import * as S from './slider.styles'

const Slider = ({ isHome }: { isHome: boolean }) => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')

  const getSlideDimensions = () => {
    const dimensions = {
      desktop: { width: 414, height: 300 },
      tablet: { width: 250, height: 180 },
      mobile: { width: 240, height: 160 }
    }

    if (isDesktop) return dimensions.desktop
    if (isTablet) return dimensions.tablet

    return dimensions.mobile
  }

  const getHomeSlideDimensions = () => {
    const dimensions = {
      desktop: { width: 635, height: 512 },
      tablet: { width: 340, height: 275 },
      mobile: { width: 240, height: 255 }
    }

    if (isDesktop) return dimensions.desktop
    if (isTablet) return dimensions.tablet

    return dimensions.mobile
  }

  let imageSrc = ''

  if (isDesktop) {
    imageSrc = ''
  } else if (isTablet) {
    imageSrc = 'tablet-'
  } else {
    imageSrc = 'mobile-'
  }

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   disableOnInteraction: false
        // }}
        modules={[Autoplay, Navigation]}
        className="hall-swiper"
      >
        <S.HallNavigation>
          <Text>
            Conheça HÁRPÉIROS que já vivenciaram essa experiência na terra do
            gelo e do fogo.
          </Text>
          {isTablet && <NavigationButtons />}
        </S.HallNavigation>
        {isHome
          ? testimonials.map((data, i) => {
              const dimensions = getHomeSlideDimensions()

              return (
                <SwiperSlide
                  key={data.image}
                  style={{ width: `${dimensions.width}px` }}
                >
                  <Image
                    src={`/images/hall/hall-home-${imageSrc}${data.image}.png`}
                    alt={`Slide ${i + 1}`}
                    width={dimensions.width}
                    height={dimensions.height}
                    className="image"
                    quality={100}
                  />
                  <S.SlideDescription>
                    <Text>{data.name}</Text>
                    <S.SlideContent>{data.description}</S.SlideContent>
                  </S.SlideDescription>
                </SwiperSlide>
              )
            })
          : Array.from({ length: 11 }, (_, i) => {
              const dimensions = getSlideDimensions()

              return (
                <SwiperSlide
                  key={i + 1}
                  style={{ width: `${dimensions.width}px` }}
                >
                  <Image
                    src={`/images/hall/hall-${i + 1}.png`}
                    alt={`Slide ${i + 1}`}
                    width={dimensions.width}
                    height={dimensions.height}
                    className="image"
                  />
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

export default Slider
