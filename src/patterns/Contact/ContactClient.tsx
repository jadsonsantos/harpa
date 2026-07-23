'use client'

import CustomLink from '@/components/CustomLink'
import { InstagramIcon } from '@/components/icons'
import Text from '@/components/Text'
import Logo from '@/components/ui/Logo'
import { INSTAGRAM_URL, INSTAGRAM_USERNAME, WHATSAPP_URL } from '@/constants'
import useScrollReveal from '@/hooks/useScrollReveal'
import Container from '@/patterns/Container'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import * as S from './styles'

interface ContactClientProps {}

export function ContactClient({}: ContactClientProps) {
  const t = useTranslations('Contact')
  const pathname = usePathname()
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ resetKey: pathname })

  return (
    <S.Wrapper ref={ref} $visible={isVisible}>
      <Container>
        <Logo variant="footer" />
        <S.Address>{t('address')}</S.Address>
        <S.Phone>
          <CustomLink href={WHATSAPP_URL}>+55 (11) 9 9584-2594</CustomLink>
        </S.Phone>
        <S.InstagramLink href={INSTAGRAM_URL}>
          <InstagramIcon />
          <Text>{INSTAGRAM_USERNAME}</Text>
        </S.InstagramLink>
      </Container>
    </S.Wrapper>
  )
}
