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
    const normalizedHref = href.startsWith('/') ? href : `/${href}`

    return (
      <BackLink href={normalizedHref} aria-label={t('back')}>
        <ArrowLeftIcon />
        <BackLabel aria-hidden="true">{t('back')}</BackLabel>
      </BackLink>
    )
  }

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
      return
    }

    router.push('/')
  }

  return (
    <BackButtonEl type="button" onClick={handleBack} aria-label={t('back')}>
      <ArrowLeftIcon />
      <BackLabel aria-hidden="true">{t('back')}</BackLabel>
    </BackButtonEl>
  )
}
