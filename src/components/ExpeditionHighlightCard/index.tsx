'use client'
import { PrimaryButton, SecondaryButton } from '../Button/styles'
import CustomLink from '../CustomLink'
import { Tag } from '../ui/Tag'
import * as S from './styles'

interface ExpeditionHighlightCardProps {
  variant: 'light' | 'dark'
  title: string
  subtitle?: string
  buttonLabel: string
  href: string
  tags: string[]
}

const ExpeditionHighlightCard = ({
  variant,
  title,
  subtitle,
  buttonLabel,
  href,
  tags
}: ExpeditionHighlightCardProps) => {
  const Card = variant === 'dark' ? S.CardDark : S.CardLight
  const Button = variant === 'dark' ? PrimaryButton : SecondaryButton

  const tagVariant = variant === 'dark' ? 'light' : 'dark'

  return (
    <Card>
      <S.CardTop>
        <S.CardTags>
          {tags.map((tag) => (
            <Tag key={tag} variant={tagVariant}>
              {tag}
            </Tag>
          ))}
        </S.CardTags>
        {subtitle && <S.CardSubTitle>{subtitle}</S.CardSubTitle>}
      </S.CardTop>
      <S.CardWrapper>
        <S.CardTitle>{title}</S.CardTitle>
        <Button>
          <CustomLink href={href}>{buttonLabel}</CustomLink>
        </Button>
      </S.CardWrapper>
    </Card>
  )
}

export default ExpeditionHighlightCard
