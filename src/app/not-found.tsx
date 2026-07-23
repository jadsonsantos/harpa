import Logo from '@/components/ui/Logo'
import StyledComponentsRegistry from '@/lib/registry'
import Container from '@/patterns/Container'
import { inter, playfairDisplay } from '@/styles/fonts'
import * as S from '@/styles/not-found.styles'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Providers } from './providers'

export default async function NotFound() {
  const locale = await getLocale()
  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'NotFound' })
  const fonts = `${inter.variable} ${playfairDisplay.variable}`

  return (
    <html lang={locale} className={fonts}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              <Container>
                <S.Wrapper>
                  <Logo variant="notFound" />

                  <S.Content>
                    <S.Title>
                      {t.rich('titleLine1', {
                        em: (chunks) => <em>{chunks}</em>
                      })}{' '}
                      {t.rich('titleLine2', {
                        span: (chunks) => <span>{chunks}</span>
                      })}
                    </S.Title>

                    <S.Subtitle>{t('subtitle')}</S.Subtitle>

                    <S.ButtonLink as={Link} href={`/${locale}`}>
                      {t('button')}
                    </S.ButtonLink>
                  </S.Content>
                </S.Wrapper>
              </Container>
            </Providers>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
