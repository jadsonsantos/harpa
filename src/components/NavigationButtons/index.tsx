'use client'
import { ArrowLeftIcon } from '@/components/icons'
import { useTranslations } from 'next-intl'
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
  prevLabel,
  nextLabel
}: NavigationButtonsProps) => {
  const t = useTranslations('NavigationButtons')
  const swiper = useSwiper()
  const [isBeginning, setIsBeginning] = useState(
    swiper ? swiper.isBeginning : true
  )
  const [isEnd, setIsEnd] = useState(swiper ? swiper.isEnd : false)

  // Em sliders com `loop`, isBeginning/isEnd praticamente nunca ficam
  // `true` (o Swiper trata as bordas como contínuas), então os botões
  // continuam sempre habilitados nesse caso — o disabled só entra em
  // jogo de fato em sliders sem loop (ex: GroupsSlider).
  useEffect(() => {
    if (!swiper) return

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

  if (!swiper) return null

  const resolvedPrevLabel = prevLabel ?? t('prevLabel')
  const resolvedNextLabel = nextLabel ?? t('nextLabel')

  return (
    <S.NavigationWrapper className="navigation-buttons">
      {hasPrevButton && (
        <S.PrevButton
          className="swiper-button swiper-button-prev"
          onClick={() => swiper.slidePrev()}
          disabled={isBeginning}
          aria-label={resolvedPrevLabel}
          title={resolvedPrevLabel}
        >
          <ArrowLeftIcon />
        </S.PrevButton>
      )}
      <S.NextButton
        className="swiper-button swiper-button-next"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        aria-label={resolvedNextLabel}
        title={resolvedNextLabel}
      >
        <ArrowLeftIcon />
      </S.NextButton>
    </S.NavigationWrapper>
  )
}

export default NavigationButtons
