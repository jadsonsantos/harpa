'use client'
import useIsDeviceType from '@/utils/useIsDeviceType'
import Image from 'next/image'

import { Swiper, SwiperSlide } from '@/components/Swipper'

const Slider = () => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')

  let imageVersion = ''

  if (isDesktop) {
    imageVersion = ''
  } else if (isTablet) {
    imageVersion = '-tablet'
  } else {
    imageVersion = '-mobile'
  }

  return (
    <Swiper
      slidesPerView={1}
      draggable={false}
      pagination={{ clickable: true }}
      autoplay={true}
      effect="fade"
    >
      {Array.from({ length: 4 }, (_, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={`/images/iceland/slider-iceland-${i + 1}${imageVersion}.png`}
              alt={`Ilustração da expedição ${i + 1}`}
              width={1290}
              height={240}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
