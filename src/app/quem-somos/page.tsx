'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Founder from '@/components/Founder'
import Harpa from '@/components/Harpa'
import Header from '@/components/Header'
import HeroAbout from '@/components/HeroAbout'
import News from '@/components/News'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <HeroAbout title="A ideia nasce na vontade do <span>fazer bem feito</span>" />
        <Harpa />
        <Founder />
      </main>
      <News />
      <Contact />
      <Footer />
    </>
  )
}
