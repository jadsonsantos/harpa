'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroHome from '@/components/HeroHome'
import News from '@/components/News'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <>
      <Header />
      <HeroHome title="<span>Islândia</span><br/> Terra do gelo e do fogo" />
      <main>
        <Partners />
      </main>
      <News />
      <Contact />
      <Footer />
    </>
  )
}
