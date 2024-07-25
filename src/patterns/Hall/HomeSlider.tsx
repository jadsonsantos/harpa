import useIsDeviceType from '@/utils/useIsDeviceType'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import testimonials from './data'

const HomeSlider = () => {
  const isTablet = useIsDeviceType('tablet')
  const isDesktop = useIsDeviceType('desktop')

  const slideDimension = () => {
    if (isDesktop) return 414
    if (isTablet) return 250

    return 240
  }

  return (
    <>
      {testimonials.map((data, i) => (
        <SwiperSlide key={data.image}>
          <Image
            src={`/images/hall/hall-home-${data.image}.png`}
            alt={`Slide ${i + 1}`}
            width={slideDimension()}
            height={slideDimension()}
            className="image"
          />
        </SwiperSlide>
      ))}
    </>
  )
}

export default HomeSlider
