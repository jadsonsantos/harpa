'use client'
import { Swiper, SwiperSlide } from '@/components/Swipper'
import Image from 'next/image'
import { images } from './data'

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      draggable={false}
      pagination={{ clickable: true }}
      autoplay={true}
      effect="fade"
    >
      {images.map(({ alt, src }) => {
        return (
          <SwiperSlide key={alt}>
            <Image
              src={`/images/${src}.png`}
              alt={alt}
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
