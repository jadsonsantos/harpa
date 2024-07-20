'use client'
import { createGlobalStyle } from 'styled-components'

const SwiperStyles = createGlobalStyle`
  .swiper-button {
    cursor: pointer;
  }

  .swiper-button-prev .arrow {
    transform: rotate(180deg);
  }
`

export default SwiperStyles
