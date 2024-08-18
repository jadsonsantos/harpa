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
        aria-label="Slide anterior"
        title="Slide anterior"
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
        aria-label="Proximo slide"
        title="Proximo slide"
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
