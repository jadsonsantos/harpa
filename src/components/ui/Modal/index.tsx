'use client'
import { CloseIcon } from '@/components/icons'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import * as S from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  media?: React.ReactNode
  children: React.ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  media,
  children
}: ModalProps) {
  const t = useTranslations('common')
  const contentRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Portal só pode renderizar no client, após o mount, para evitar erro de SSR.
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen || !mounted) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    contentRef.current?.focus()

    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, mounted])

  if (!mounted || !isOpen) return null

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal(
    <S.Overlay onClick={handleOverlayClick}>
      <S.Content ref={contentRef} role="dialog" aria-modal="true" tabIndex={-1}>
        <S.CloseButton type="button" onClick={onClose} aria-label={t('close')}>
          <CloseIcon />
        </S.CloseButton>
        {media && <S.Media>{media}</S.Media>}
        <S.Scroll>{children}</S.Scroll>
      </S.Content>
    </S.Overlay>,
    document.body
  )
}
