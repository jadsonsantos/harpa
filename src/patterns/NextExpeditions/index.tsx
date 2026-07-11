'use client'
import ExpeditionHighlightCard from '@/components/ExpeditionHighlightCard'
import MapBackground from '@/components/ui/MapBackground'
import { Tag } from '@/components/ui/Tag'
import Container from '@/patterns/Container'
import { useTranslations } from 'next-intl'
import * as S from './styles'

const NextExpeditions = () => {
  const t = useTranslations('NextExpeditions')

  return (
    <S.Wrapper>
      <MapBackground src="/images/world-map.svg" width={791} height={927} />
      <Container>
        <S.TagWrapper>
          <Tag>{t('tag')}</Tag>
        </S.TagWrapper>
        <S.ExpeditionHeading>
          {t.rich('heading', {
            span: (chunks) => <span>{chunks}</span>,
            i: (chunks) => <i>{chunks}</i>
          })}
        </S.ExpeditionHeading>
        <S.Coordinates>
          {t('coordinatesDMS')} <br /> / 64.1475, -21.935
        </S.Coordinates>
        <S.NextExpeditionsContainer>
          <ExpeditionHighlightCard
            variant="light"
            title={t('groupsTitle')}
            buttonLabel={t('buttonLabel')}
            href="/grupos"
            tags={[t('groupsTag1'), t('groupsTag2')]}
          />
          <ExpeditionHighlightCard
            variant="dark"
            title="Private"
            subtitle={t('privateSubtitle')}
            buttonLabel={t('buttonLabel')}
            href="/private"
            tags={[t('privateTag1')]}
          />
        </S.NextExpeditionsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default NextExpeditions
