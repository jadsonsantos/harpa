'use client'
import { Link } from '@/i18n/navigation'
import { IconSlot, PrimaryButton, SecondaryButton } from '../Button/styles'
import { ArrowLeftIcon } from '../icons'
import { Tag } from '../ui/Tag'
import * as S from './styles'

interface ExpeditionHighlightCardProps {
  variant: 'light' | 'dark'
  title: string
  subtitle?: string
  subtitle2?: string
  buttonLabel: string
  href: string
  tags: string[]
}

const ExpeditionHighlightCard = ({
  variant,
  title,
  subtitle,
  subtitle2,
  buttonLabel,
  href,
  tags
}: ExpeditionHighlightCardProps) => {
  const Card = variant === 'dark' ? S.CardDark : S.CardLight
  const Button = variant === 'dark' ? PrimaryButton : SecondaryButton

  const tagVariant = variant === 'dark' ? 'light' : 'dark'

  return (
    <Card as={Link} href={href}>
      <S.CardTop>
        <S.CardTags>
          {tags.map((tag) => (
            <Tag key={tag} variant={tagVariant}>
              {tag}
            </Tag>
          ))}
        </S.CardTags>
        <S.CardSubTitles>
          {subtitle && <S.CardSubTitle>{subtitle}</S.CardSubTitle>}
          {subtitle2 && <S.CardSubTitle>{subtitle2}</S.CardSubTitle>}
        </S.CardSubTitles>
      </S.CardTop>
      <S.CardWrapper>
        <S.CardTitle>{title}</S.CardTitle>
        <Button as="span" className="button-info">
          {buttonLabel}
          <IconSlot>
            <ArrowLeftIcon />
          </IconSlot>
        </Button>
      </S.CardWrapper>
    </Card>
  )
}

export default ExpeditionHighlightCard
