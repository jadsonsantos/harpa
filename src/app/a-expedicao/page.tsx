import Harpa from '@/components/Harpa'
import HeroExpedition from '@/components/HeroExpedition'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A expedição | HÁRPÁ'
}

export default function Expedition() {
  return (
    <>
      <HeroExpedition title="Islândia<br/> Do sonho à <span>realidade</span>" />
      <Harpa />
    </>
  )
}
