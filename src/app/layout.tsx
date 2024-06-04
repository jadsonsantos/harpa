import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Harpa',
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
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
