'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Founder from '@/components/Founder'
import Harpa from '@/components/Harpa'
import Header from '@/components/Header'
import News from '@/components/News'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Harpa />
        <Founder />
      </main>
      <News />
      <Contact />
      <Footer />
    </>
  )
}
