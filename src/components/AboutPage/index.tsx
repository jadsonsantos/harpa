import Founder from '@/components/Founder'
import Harpa from '@/components/Harpa'
import HeroAbout from '@/components/HeroAbout'
import Initiatives from '@/patterns/Initiatives'
import Presentation from '@/patterns/Presentation'
import { data, presentationTitle } from './data'

const AboutPage = () => (
  <>
    <HeroAbout title="A ideia nasce na vontade do <span>fazer bem feito</span>" />
    <Harpa />
    <Presentation title={presentationTitle} />
    <Initiatives data={data} />
    <Founder />
  </>
)

export default AboutPage