import Founder from '@/components/Founder'
import Harpa from '@/components/Harpa'
import HeaderMobile from '@/components/HeaderMobile'
import HeroAbout from '@/components/HeroAbout'
import Initiatives from '@/patterns/Initiatives'
import Presentation from '@/patterns/Presentation'
import Services from '@/patterns/Services'
import { data, presentationTitle } from './data'

const AboutPage = () => (
  <>
    <HeaderMobile />
    <HeroAbout title="A ideia nasce na vontade do <span>fazer bem feito</span>" />
    <Harpa />
    <Services />
    <Presentation title={presentationTitle} animation="3" />
    <Initiatives data={data} animation="1" />
    <Founder />
  </>
)

export default AboutPage
