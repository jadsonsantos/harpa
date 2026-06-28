'use client'

import { ArrowLeftIcon } from '@/components/icons'
import { useTranslations } from 'next-intl'
import { BackLabel, BackLink } from './styles'

interface BackButtonProps {
  href: string
}

export function BackButton({ href }: BackButtonProps) {
  const t = useTranslations('common')

  return (
    <BackLink href={`/${href}`}>
      <ArrowLeftIcon />
      <BackLabel>{t('back')}</BackLabel>
    </BackLink>
  )
}
