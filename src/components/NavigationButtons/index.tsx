import Arrow from '@/components/Arrow'
import * as S from './styles'

import { useSwiper } from 'swiper/react'

interface NavigationButtonsProps {
  hasPrevButton?: boolean
}

const NavigationButtons = ({
  hasPrevButton = true
}: NavigationButtonsProps) => {
  const swiper = useSwiper()

  const PrevButton = () => {
    return (
      <S.Button
        className="swiper-button swiper-button-prev"
        onClick={() => swiper.slidePrev()}
      >
        <Arrow />
      </S.Button>
    )
  }

  const NextButton = () => {
    return (
      <S.Button
        className="swiper-button swiper-button-next"
        onClick={() => swiper.slideNext()}
      >
        <Arrow />
      </S.Button>
    )
  }

  return (
    <S.NavigationWrapper className="navigation-buttons">
      {hasPrevButton && <PrevButton />}
      <NextButton />
    </S.NavigationWrapper>
  )
}

export default NavigationButtons
