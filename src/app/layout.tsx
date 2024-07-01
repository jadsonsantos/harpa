import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import StyledComponentsRegistry from '@/lib/registry'
import NextExpeditions from '@/patterns/NextExpeditions'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'HÁRPÁ',
  description:
    'Itinerário mais completo do mercado, experiência exclusiva e intimista, com muita liberdade e aproveitamento em expedições para a Islândia.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <NextExpeditions />
            <News />
            <Contact />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
