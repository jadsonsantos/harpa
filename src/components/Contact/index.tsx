'use client'
import { INSTAGRAM_URL, INSTAGRAM_USERNAME, WHATSSAPP_URL } from '@/constants'
import useIsMobile from '@/hooks/isMobile'
import { useTranslations } from 'next-intl'
import Container from '../../patterns/Container'
import CustomLink from '../CustomLink'
import Logo from '../Logo'
import Text from '../Text'
import * as S from './styles'

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const Contact = () => {
  const t = useTranslations('Contact')

  const isMobileView = useIsMobile()
  const logoWidht = isMobileView ? 147 : 245
  const logoHeight = isMobileView ? 24 : 40

  return (
    <S.Wrapper>
      <Container>
        <Logo width={logoWidht} height={logoHeight} />
        <S.Address>{t('address')}</S.Address>
        <S.Phone>
          <CustomLink href={WHATSSAPP_URL}>+55 (11) 9 9584-2594</CustomLink>
        </S.Phone>
        <S.InstagramLink href={INSTAGRAM_URL}>
          <InstagramIcon />
          <Text>{INSTAGRAM_USERNAME}</Text>
        </S.InstagramLink>
      </Container>
    </S.Wrapper>
  )
}

export default Contact
