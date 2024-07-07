'use client'
import { Swiper, SwiperSlide } from '@/components/Swipper'
import Image from 'next/image'
import { useRef } from 'react'

const Slider = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={24}
      centeredSlides={true}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current
      }}
      autoplay={true}
      className="hall-swiper"
    >
      <article>
        <span ref={navigationPrevRef} />
        <span ref={navigationNextRef} />
      </article>
      {Array.from({ length: 11 }, (_, i) => (
        <SwiperSlide key={i + 1} style={{ width: '414px' }}>
          <Image
            src={`/images/hall/hall-${i + 1}.png`}
            alt={`Slide ${i + 1}`}
            width={414}
            height={414}
            className="image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
