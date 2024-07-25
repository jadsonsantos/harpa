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

  const slideDimension = () => {
    if (isDesktop) return 414
    if (isTablet) return 250

    return 240
  }

  const homeSlideDimension = () => {
    if (isDesktop) return 635
    if (isTablet) return 340

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
          {isTablet && <NavigationButtons />}
        </S.HallNavigation>
        {isHome
          ? testimonials.map((data, i) => (
              <SwiperSlide
                key={data.image}
                style={{ width: `${homeSlideDimension()}px` }}
              >
                <Image
                  src={`/images/hall/hall-home-${data.image}.png`}
                  alt={`Slide ${i + 1}`}
                  width={homeSlideDimension()}
                  height={homeSlideDimension()}
                  className="image"
                />
                <S.SlideDescription>
                  <Text>{data.name}</Text>
                  <S.SlideContent>{data.description}</S.SlideContent>
                </S.SlideDescription>
              </SwiperSlide>
            ))
          : Array.from({ length: 11 }, (_, i) => (
              <SwiperSlide
                key={i + 1}
                style={{ width: `${slideDimension()}px` }}
              >
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
