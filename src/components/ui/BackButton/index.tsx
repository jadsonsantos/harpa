'use client'

import { ArrowLeftIcon } from '@/components/icons'
import { useTranslations } from 'next-intl'
import { BackLabel, BackLink } from './styles'

interface BackButtonProps {
  href: string
  locale: string
}

export function BackButton({ href, locale }: BackButtonProps) {
  const t = useTranslations('common')

  return (
    <BackLink href={`/${locale}${href}`}>
      <ArrowLeftIcon />
      <BackLabel>{t('back')}</BackLabel>
    </BackLink>
  )
}
