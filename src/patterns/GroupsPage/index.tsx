import Details from '@/components/Details'
import { BackButton } from '@/components/ui/BackButton'
import GroupCard from '@/components/ui/GroupCard'
import MapBackground from '@/components/ui/MapBackground'
import { useTranslations } from 'next-intl'
import Container from '../Container'
import * as S from './styles'

const imageIceland = '/images/groups/islandia.png'
const imageJapan = '/images/groups/japao.png'
const imageNordArt = '/images/groups/nordart.png'
const imageThailand = '/images/groups/thailand.png'

export default function GroupsPage() {
  const t = useTranslations('GroupsPage')

  const content = [
    {
      title: t('faq.items.whatAre.title'),
      description: [t('faq.items.whatAre.description')]
    },
    {
      title: t('faq.items.ownGroup.title'),
      description: [t('faq.items.ownGroup.description')]
    },
    {
      title: t('faq.items.whyChoose.title'),
      description: [t('faq.items.whyChoose.description')]
    }
  ]

  const cards = [
    {
      title: t('cards.iceland.title'),
      subtitle: t('cards.iceland.subtitle'),
      imageSrc: imageIceland
    },
    {
      title: t('cards.thailand.title'),
      subtitle: t('cards.thailand.subtitle'),
      imageSrc: imageThailand
    },
    {
      title: t('cards.japan.title'),
      subtitle: t('cards.japan.subtitle'),
      imageSrc: imageJapan
    },
    {
      title: t('cards.nordart.title'),
      subtitle: t('cards.nordart.subtitle'),
      imageSrc: imageNordArt
    }
  ]

  return (
    <S.Wrapper>
      <MapBackground
        src="/images/world-map-groups.svg"
        width={1061}
        height={1191}
      />
      <Container>
        <BackButton href="/" />
      </Container>
      <S.HeadingSection>
        <Container>
          <S.HeadingWrapper>
            <S.HeadingTitle>
              <span>{t('heading.titlePrefix')}</span> {t('heading.titleMiddle')}{' '}
              <i>{t('heading.titleHighlight')}</i>.
            </S.HeadingTitle>
            <S.HeadingDescription>
              {t('heading.description')}
            </S.HeadingDescription>
          </S.HeadingWrapper>
        </Container>
      </S.HeadingSection>
      <S.CardsGrid>
        <Container>
          {cards.map((card) => (
            <GroupCard key={card.title} {...card} />
          ))}
        </Container>
      </S.CardsGrid>
      <S.Faq>
        <Container>
          <S.FaqWrapper>
            <S.FaqTitle>
              {t('faq.titlePrefix')} <strong>{t('faq.titleHighlight')}</strong>
            </S.FaqTitle>
            {content.map((group, index) => (
              <Details
                key={index}
                title={group.title}
                description={group.description}
              />
            ))}
          </S.FaqWrapper>
        </Container>
      </S.Faq>
    </S.Wrapper>
  )
}
