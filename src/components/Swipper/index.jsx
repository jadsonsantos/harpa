'use client'
import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'

export function Swiper(props) {
  const swiperRef = useRef(null)
  const { children, ...rest } = props

  useEffect(() => {
    // Register Swiper web component
    register()

    // pass component props to parameters
    const params = {
      ...rest
    }

    // Assign it to swiper element
    Object.assign(swiperRef.current, params)

    // initialize swiper
    swiperRef.current.initialize()
  }, [rest])

  return (
    <swiper-container
      init="false"
      ref={swiperRef}
      style={{
        '--swiper-navigation-color': '#000',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bottom': '20px'
      }}
    >
      {children}
    </swiper-container>
  )
}
export function SwiperSlide(props) {
  const { children, ...rest } = props

  return <swiper-slide {...rest}>{children}</swiper-slide>
}
