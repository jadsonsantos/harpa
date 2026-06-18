import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HÁRPÁ | Viagens e expedições exclusivas para a Islândia',
  description:
    'Itinerário mais completo do mercado, experiência exclusiva e intimista, com muita liberdade e aproveitamento em expedições para a Islândia.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <News />
      <Contact />
      <Footer />
    </>
  )
}
