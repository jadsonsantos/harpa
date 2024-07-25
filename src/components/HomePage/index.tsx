import HeaderMobile from '@/components/HeaderMobile'
import HeroHome from '@/components/HeroHome'
import Partners from '@/components/Partners'
import Hall from '@/patterns/Hall'
import Iceland from '@/patterns/Iceland'
import Presentation from '@/patterns/Presentation'
import data from './data'

const HomePage = () => (
  <>
    <HeaderMobile title="Página inicial" />
    <HeroHome title="<span>Islândia</span><br/> Terra do gelo e do fogo" />
    <Presentation title={data.title} />
    <Iceland />
    <Partners />
    <Hall isHome={true} />
  </>
)

export default HomePage
