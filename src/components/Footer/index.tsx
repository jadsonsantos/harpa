'use client'
import Container from '@/patterns/Container'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <Container>
        <p>
          {t('copyright', { year: currentYear })} •{' '}
          <Link href="/politica-de-privacidade">{t('privacyPolicy')}</Link>
        </p>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
