import Collab from '@/patterns/Collab'
import Hall from '@/patterns/Hall'
import HeroHome from '@/components/HeroHome'
import HeaderMobile from '@/components/HeaderMobile'
import Iceland from '@/patterns/Iceland'
import Partners from '@/components/Partners'
import Presentation from '@/patterns/Presentation'
import Japan from '@/patterns/Japan'

import data from './data'

const HomePage = () => (
  <>
    <HeaderMobile title="Página inicial" />
    <HeroHome title="<span>Islândia</span><br/> Terra do gelo e do fogo" />
    <Presentation title={data.title} />
    <Iceland />
    <Japan />
    <Collab />
    <Partners />
    <Hall isHome={true} />
  </>
)

export default HomePage
