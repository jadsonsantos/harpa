'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import { PropsWithChildren } from 'react'

export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <News />
      <Contact />
      <Footer />
    </>
  )
}
