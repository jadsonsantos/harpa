import PageHeading from '@/components/PageHeading'
import { BackButton } from '@/components/ui/BackButton'
import MapBackground from '@/components/ui/MapBackground'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Container from '../Container'
import Faq from '../Faq'
import PrivateForm from '../PrivateForm'
import * as S from './styles'

export default function PrivatePage() {
  const t = useTranslations('PrivatePage.heading')
  const tFaq = useTranslations('PrivatePage.faq')

  const content = [
    {
      id: 'whatIs',
      title: tFaq('items.whatIs.title'),
      description: [tFaq('items.whatIs.description')]
    },
    {
      id: 'guide',
      title: tFaq('items.guide.title'),
      description: [tFaq('items.guide.description')]
    },
    {
      id: 'whyChoose',
      title: tFaq('items.whyChoose.title'),
      description: [tFaq('items.whyChoose.description')]
    }
  ]

  return (
    <>
      <S.Wrapper>
        <MapBackground
          src="/images/world-map-private.svg"
          width={1061}
          height={1191}
          position="0% 100%"
          zIndex={0}
        />
        <S.BackButtonSection>
          <BackButton href="/" />
        </S.BackButtonSection>
        <S.MainWrapper>
          <Container>
            <S.TextColumn>
              <PageHeading
                titlePrefix={t('titlePrefix')}
                titleMiddle={t('titleMiddle')}
                titleHighlight={t('titleHighlight')}
                titleSuffix={t('titleSuffix')}
                description={t('description')}
                withContainer={false}
              />
              <S.HeroImage>
                <Image
                  src="/images/private.png"
                  alt={t('imageAlt')}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1200px) 100vw, 600px"
                />
              </S.HeroImage>
            </S.TextColumn>
            <PrivateForm />
          </Container>
        </S.MainWrapper>
      </S.Wrapper>
      <Faq
        titlePrefix={tFaq('titlePrefix')}
        titleHighlight={tFaq('titleHighlight')}
        items={content}
      />
    </>
  )
}
