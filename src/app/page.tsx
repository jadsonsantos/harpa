import HeroHome from '@/components/HeroHome'
import Partners from '@/components/Partners'
import Iceland from '@/patterns/Iceland'
import Presentation from '@/patterns/Presentation'

export default function Home() {
  return (
    <>
      <HeroHome title="<span>Islândia</span><br/> Terra do gelo e do fogo" />
      <Presentation />
      <Iceland />
      <Partners />
    </>
  )
}
