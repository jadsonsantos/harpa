'use client'
import Arrow from '@/components/Arrow'
import { Swiper, SwiperSlide } from '@/components/Swipper'
import Text from '@/components/Text'
import useIsDeviceType from '@/utils/useIsDeviceType'
import Image from 'next/image'
import * as S from './styles'

const Slider = () => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')

  const slideDimension = () => {
    if (isTablet) {
      return 250
    }
    if (isDesktop) {
      return 414
    }

    return 240
  }

  return (
    <>
      <S.HallNavigation>
        <Text>
          Conheça HARPEIROS que já vivenciaram essa experiência na terra do gelo
          e do fogo.
        </Text>
        {isDesktop && (
          <S.NavigationWrapper>
            <button className="swiper-button swiper-button-prev">
              <Arrow />
            </button>
            <button className="swiper-button swiper-button-next">
              <Arrow />
            </button>
          </S.NavigationWrapper>
        )}
      </S.HallNavigation>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        autoplay={true}
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
