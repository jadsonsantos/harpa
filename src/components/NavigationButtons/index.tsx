'use client'
import { ArrowLeftIcon } from '@/components/icons'
import { useEffect, useState } from 'react'
import * as S from './styles'

import { useSwiper } from 'swiper/react'

interface NavigationButtonsProps {
  hasPrevButton?: boolean
  prevLabel?: string
  nextLabel?: string
}

const NavigationButtons = ({
  hasPrevButton = true,
  prevLabel = 'Slide anterior',
  nextLabel = 'Próximo slide'
}: NavigationButtonsProps) => {
  const swiper = useSwiper()
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)
  const [isEnd, setIsEnd] = useState(swiper.isEnd)

  // Em sliders com `loop`, isBeginning/isEnd praticamente nunca ficam
  // `true` (o Swiper trata as bordas como contínuas), então os botões
  // continuam sempre habilitados nesse caso — o disabled só entra em
  // jogo de fato em sliders sem loop (ex: GroupsSlider).
  useEffect(() => {
    const updateNavState = () => {
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    }

    updateNavState()
    swiper.on('slideChange', updateNavState)
    swiper.on('breakpoint', updateNavState)

    return () => {
      swiper.off('slideChange', updateNavState)
      swiper.off('breakpoint', updateNavState)
    }
  }, [swiper])

  return (
    <S.NavigationWrapper className="navigation-buttons">
      {hasPrevButton && (
        <S.PrevButton
          className="swiper-button swiper-button-prev"
          onClick={() => swiper.slidePrev()}
          disabled={isBeginning}
          aria-label={prevLabel}
          title={prevLabel}
        >
          <ArrowLeftIcon />
        </S.PrevButton>
      )}
      <S.NextButton
        className="swiper-button swiper-button-next"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        aria-label={nextLabel}
        title={nextLabel}
      >
        <ArrowLeftIcon />
      </S.NextButton>
    </S.NavigationWrapper>
  )
}

export default NavigationButtons
