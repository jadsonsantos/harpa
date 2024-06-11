'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Harpa from '@/components/Harpa'
import Header from '@/components/Header'
import HeroExpedition from '@/components/HeroExpedition'
import News from '@/components/News'

export default function Expedition() {
  return (
    <>
      <Header />
      <main>
        <HeroExpedition title="Islândia<br/> Do sonho à <span>realidade</span>" />
        <Harpa />
      </main>
      <News />
      <Contact />
      <Footer />
    </>
  )
}
