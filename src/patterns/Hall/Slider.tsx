'use client'
import { Swiper, SwiperSlide } from '@/components/Swipper'
import useIsMobile from '@/hooks/isMobile'
import Image from 'next/image'
import { useRef } from 'react'

const Slider = () => {
  const isMobile = useIsMobile()
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const slideWidth = isMobile ? 240 : 414

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
      {!isMobile && (
        <article>
          <span ref={navigationPrevRef} />
          <span ref={navigationNextRef} />
        </article>
      )}
      {Array.from({ length: 11 }, (_, i) => (
        <SwiperSlide key={i + 1} style={{ width: `${slideWidth}px` }}>
          <Image
            src={`/images/hall/hall-${i + 1}.png`}
            alt={`Slide ${i + 1}`}
            width={isMobile ? 240 : 414}
            height={isMobile ? 240 : 414}
            className="image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
