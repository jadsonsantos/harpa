'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import News from '@/components/News'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Partners />
      </main>
      <News />
      <Contact />
      <Footer />
    </>
  )
}
