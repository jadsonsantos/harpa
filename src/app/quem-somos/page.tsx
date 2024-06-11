'use client'
import Founder from '@/components/Founder'
import Harpa from '@/components/Harpa'
import HeroAbout from '@/components/HeroAbout'

export default function About() {
  return (
    <>
      <HeroAbout title="A ideia nasce na vontade do <span>fazer bem feito</span>" />
      <Harpa />
      <Founder />
    </>
  )
}
