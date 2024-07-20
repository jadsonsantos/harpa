import HeaderMobile from '@/components/HeaderMobile'
import HeroHome from '@/components/HeroHome'
import Partners from '@/components/Partners'
import Iceland from '@/patterns/Iceland'
import Presentation from '@/patterns/Presentation'
import data from './data'

const HomePage = () => (
  <>
    <HeaderMobile />
    <HeroHome title="<span>Islândia</span><br/> Terra do gelo e do fogo" />
    <Presentation title={data.title} />
    <Iceland />
    <Partners />
  </>
)

export default HomePage
