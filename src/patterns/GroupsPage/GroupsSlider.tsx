'use client'
import NavigationButtons from '@/components/NavigationButtons'
import GroupCard from '@/components/ui/GroupCard'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './styles'

type GroupsSliderCard = ComponentProps<typeof GroupCard> & { id: string }

interface GroupsSliderProps {
  cards: GroupsSliderCard[]
}

export default function GroupsSlider({ cards }: GroupsSliderProps) {
  const t = useTranslations('GroupsPage')

  return (
    <S.CardsGrid>
      <Swiper
        modules={[FreeMode, Mousewheel]}
        slidesPerView="auto"
        spaceBetween={16}
        centeredSlides={true}
        grabCursor={true}
        observer={true}
        observeParents={true}
        freeMode={{ enabled: true, sticky: true }}
        touchRatio={1.2}
        mousewheel={{ forceToAxis: true }}
        breakpoints={{
          768: { spaceBetween: 24, centeredSlides: false }
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <GroupCard {...card} />
          </SwiperSlide>
        ))}
        <S.NavigationArrows>
          <NavigationButtons
            prevLabel={t('navigation.prevLabel')}
            nextLabel={t('navigation.nextLabel')}
          />
        </S.NavigationArrows>
      </Swiper>
    </S.CardsGrid>
  )
}
