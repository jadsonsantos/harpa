import PageHeading from '@/components/PageHeading'
import { BackButton } from '@/components/ui/BackButton'
import MapBackground from '@/components/ui/MapBackground'
import { useTranslations } from 'next-intl'
import Faq from '../Faq'
import GroupsSlider from './GroupsSlider'
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
        <BackButton />
      </S.BackButtonSection>
      <PageHeading
        titlePrefix={t('heading.titlePrefix')}
        titleMiddle={t('heading.titleMiddle')}
        titleHighlight={t('heading.titleHighlight')}
        description={t('heading.description')}
      />
      <GroupsSlider cards={cards} />
      <Faq
        titlePrefix={t('faq.titlePrefix')}
        titleHighlight={t('faq.titleHighlight')}
        items={content}
      />
    </S.Wrapper>
  )
}
