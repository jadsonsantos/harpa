import HeroHome from '@/components/HeroHome'
import Partners from '@/components/Partners'
import Presentation from '@/patterns/Presentation'

export default function Home() {
  return (
    <>
      <HeroHome title="<span>Islândia</span><br/> Terra do gelo e do fogo" />
      <Presentation />
      <Partners />
    </>
  )
}
