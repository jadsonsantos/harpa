import Founder from '@/components/Founder'
import Harpa from '@/components/Harpa'
import HeroAbout from '@/components/HeroAbout'
import Initiatives from '@/patterns/Initiatives'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos | HÁRPÁ'
}

export default function About() {
  return (
    <>
      <HeroAbout title="A ideia nasce na vontade do <span>fazer bem feito</span>" />
      <Harpa />
      <Initiatives />
      <Founder />
    </>
  )
}
