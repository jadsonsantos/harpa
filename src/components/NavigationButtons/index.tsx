import Arrow from '@/components/Arrow'
import * as S from './styles'

import { useSwiper } from 'swiper/react'

const NavigationButtons = () => {
  const swiper = useSwiper()

  return (
    <S.NavigationWrapper>
      <button
        className="swiper-button swiper-button-prev"
        onClick={() => swiper.slidePrev()}
      >
        <Arrow />
      </button>
      <button
        className="swiper-button swiper-button-next"
        onClick={() => swiper.slideNext()}
      >
        <Arrow />
      </button>
    </S.NavigationWrapper>
  )
}

export default NavigationButtons
