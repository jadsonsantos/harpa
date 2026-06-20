import StyledComponentsRegistry from '@/lib/registry'
import { inter, playfairDisplay } from '@/styles/fonts'
import { Providers } from './providers'

const fonts = `${inter.variable} ${playfairDisplay.variable}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={fonts}>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
