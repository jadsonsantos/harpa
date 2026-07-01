'use client'
import ExpeditionHighlightCard from '@/components/ExpeditionHighlightCard'
import { Tag } from '@/components/ui/Tag'
import { WHATSAPP_URL } from '@/constants'
import Container from '@/patterns/Container'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import * as S from './styles'

const NextExpeditions = () => {
  const t = useTranslations('NextExpeditions')

  return (
    <S.Wrapper>
      <S.MapBackground>
        <Image
          src="/images/world-map.svg"
          alt="Imagem de um mapa mundi estilizado, com linhas e pontos representando rotas de expedições"
          aria-hidden="true"
          width={790}
          height={927}
          priority
        />
      </S.MapBackground>
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
            href="/expedicoes"
            tags={[t('groupsTag1'), t('groupsTag2')]}
          />
          <ExpeditionHighlightCard
            variant="dark"
            title="Private"
            subtitle={t('privateSubtitle')}
            buttonLabel={t('buttonLabel')}
            href={WHATSAPP_URL}
            tags={[t('privateTag1')]}
          />
        </S.NextExpeditionsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default NextExpeditions
