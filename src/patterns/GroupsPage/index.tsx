import PageHeading from '@/components/PageHeading'
import { Swiper, SwiperSlide } from '@/components/Swipper'
import { BackButton } from '@/components/ui/BackButton'
import GroupCard from '@/components/ui/GroupCard'
import MapBackground from '@/components/ui/MapBackground'
import { useTranslations } from 'next-intl'
import Faq from '../Faq'
import * as S from './styles'

const imageIceland = '/images/groups/islandia.png'
const imageJapan = '/images/groups/japao.png'
const imageNordArt = '/images/groups/nordart.png'
const imageThailand = '/images/groups/thailand.png'

const buildCarouselImages = (slug: string) =>
  Array.from(
    { length: 6 },
    (_, index) => `/images/groups/${slug}/${slug}-0${index + 1}.webp`
  )

const carouselIceland = buildCarouselImages('islandia')
const carouselJapan = buildCarouselImages('japao')
const carouselNordArt = buildCarouselImages('nordart')
const carouselThailand = buildCarouselImages('thailand')

export default function GroupsPage() {
  const t = useTranslations('GroupsPage')

  const content = [
    {
      id: 'whatAre',
      title: t('faq.items.whatAre.title'),
      description: [t('faq.items.whatAre.description')]
    },
    {
      id: 'ownGroup',
      title: t('faq.items.ownGroup.title'),
      description: [t('faq.items.ownGroup.description')]
    },
    {
      id: 'whyChoose',
      title: t('faq.items.whyChoose.title'),
      description: [t('faq.items.whyChoose.description')]
    }
  ]

  const cards = [
    {
      id: 'nordart',
      title: t('cards.nordart.title'),
      subtitle: t('cards.nordart.subtitle'),
      description: t('cards.nordart.description'),
      dates: t.raw('cards.nordart.dates'),
      investment: t('cards.nordart.investment'),
      imageSrc: imageNordArt,
      images: carouselNordArt
    },
    {
      id: 'thailand',
      title: t('cards.thailand.title'),
      subtitle: t('cards.thailand.subtitle'),
      description: t('cards.thailand.description'),
      dates: t.raw('cards.thailand.dates'),
      investment: t('cards.thailand.investment'),
      imageSrc: imageThailand,
      images: carouselThailand
    },
    {
      id: 'japan',
      title: t('cards.japan.title'),
      subtitle: t('cards.japan.subtitle'),
      description: t('cards.japan.description'),
      dates: t.raw('cards.japan.dates'),
      investment: t('cards.japan.investment'),
      imageSrc: imageJapan,
      images: carouselJapan
    },
    {
      id: 'iceland',
      title: t('cards.iceland.title'),
      subtitle: t('cards.iceland.subtitle'),
      description: t('cards.iceland.description'),
      dates: t.raw('cards.iceland.dates'),
      investment: t('cards.iceland.investment'),
      imageSrc: imageIceland,
      images: carouselIceland
    }
  ]

  return (
    <S.Wrapper>
      <MapBackground
        src="/images/world-map-groups.svg"
        width={1061}
        height={1191}
        position="top right"
      />
      <S.BackButtonSection>
        <BackButton href="/" />
      </S.BackButtonSection>
      <PageHeading
        titlePrefix={t('heading.titlePrefix')}
        titleMiddle={t('heading.titleMiddle')}
        titleHighlight={t('heading.titleHighlight')}
        description={t('heading.description')}
      />
      <S.CardsGrid>
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          grabCursor={true}
          observer={true}
          observeParents={true}
          freeMode={{ enabled: true, sticky: true }}
          touchRatio={1.2}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            768: { spaceBetween: 24 }
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <GroupCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CardsGrid>
      <Faq
        titlePrefix={t('faq.titlePrefix')}
        titleHighlight={t('faq.titleHighlight')}
        items={content}
      />
    </S.Wrapper>
  )
}
