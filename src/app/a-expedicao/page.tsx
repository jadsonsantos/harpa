'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Harpa from '@/components/Harpa'
import Header from '@/components/Header'
import News from '@/components/News'

export default function Expedition() {
  return (
    <>
      <Header />
      <Harpa />
      <main>
        <News />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
