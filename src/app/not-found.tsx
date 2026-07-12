import Logo from '@/components/ui/Logo'
import StyledComponentsRegistry from '@/lib/registry'
import Container from '@/patterns/Container'
import { inter, playfairDisplay } from '@/styles/fonts'
import * as S from '@/styles/not-found.styles'
import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Providers } from './providers'

export default async function NotFound() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'NotFound' })
  const fonts = `${inter.variable} ${playfairDisplay.variable}`

  return (
    <html lang={locale} className={fonts}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Container>
              <S.Wrapper>
                <Logo />

                <S.Content>
                  <S.Title>
                    {t.rich('titleLine1', {
                      em: (chunks) => <em>{chunks}</em>
                    })}
                    <br />
                    {t.rich('titleLine2', {
                      span: (chunks) => <span>{chunks}</span>
                    })}
                  </S.Title>

                  <S.Subtitle>{t('subtitle')}</S.Subtitle>

                  <S.ButtonLink href="/" as={Link}>
                    {t('button')}
                  </S.ButtonLink>
                </S.Content>
              </S.Wrapper>
            </Container>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
