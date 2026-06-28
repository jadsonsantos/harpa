'use client'
import CustomLink from '@/components/CustomLink'
import { InstagramIcon } from '@/components/icons'
import Text from '@/components/Text'
import Logo from '@/components/ui/Logo'
import { INSTAGRAM_URL, INSTAGRAM_USERNAME, WHATSAPP_URL } from '@/constants'
import Container from '@/patterns/Container'
import { useTranslations } from 'next-intl'
import * as S from './styles'

interface ContactClientProps {}

export function ContactClient({}: ContactClientProps) {
  const t = useTranslations('Contact')

  return (
    <S.Wrapper>
      <Container>
        <Logo />
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
