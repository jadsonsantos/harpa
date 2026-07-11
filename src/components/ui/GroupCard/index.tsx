import Button from '@/components/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Tag } from '../Tag'
import * as S from './style'

interface GroupCardProps {
  title: string
  subtitle: string
  imageSrc: string
}

export default function GroupCard({
  title,
  subtitle,
  imageSrc
}: GroupCardProps) {
  const t = useTranslations('GroupCard')

  return (
    <S.Card>
      <Image
        src={imageSrc}
        alt={title + ' - ' + subtitle}
        fill
        style={{ objectFit: 'cover', zIndex: -1, borderRadius: '32px' }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <S.CardTags>
        <Tag variant="light">{t('tagGroups')}</Tag>
        <Tag variant="light">{t('tagLimited')}</Tag>
      </S.CardTags>
      <S.CardInfos>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardSubtitle>{subtitle}</S.CardSubtitle>
        <S.CardActions>
          <Button variant="primary">{t('interested')}</Button>
          <Button variant="tertiary">{t('learnMore')}</Button>
        </S.CardActions>
      </S.CardInfos>
    </S.Card>
  )
}
