'use client'

import { ArrowLeftIcon } from '@/components/icons'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { BackButtonEl, BackLabel, BackLink } from './styles'

interface BackButtonProps {
  /**
   * Rota fixa de destino. Se omitida, o botão volta para a tela
   * anterior do histórico de navegação (equivalente a `router.back()`).
   */
  href?: string
}

export function BackButton({ href }: BackButtonProps) {
  const t = useTranslations('common')
  const router = useRouter()

  if (href) {
    return (
      <BackLink href={`/${href}`}>
        <ArrowLeftIcon />
        <BackLabel>{t('back')}</BackLabel>
      </BackLink>
    )
  }

  return (
    <BackButtonEl type="button" onClick={() => router.back()}>
      <ArrowLeftIcon />
      <BackLabel>{t('back')}</BackLabel>
    </BackButtonEl>
  )
}
