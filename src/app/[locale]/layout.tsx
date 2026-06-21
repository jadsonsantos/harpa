import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import { routing } from '@/i18n/routing'
import StyledComponentsRegistry from '@/lib/registry'
import { inter, playfairDisplay } from '@/styles/fonts'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale
} from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Providers } from '../providers'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  const fonts = `${inter.variable} ${playfairDisplay.variable}`

  return (
    <html lang={locale} className={fonts}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Header />
              {children}
              <News />
              <Contact />
              <Footer />
            </NextIntlClientProvider>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
