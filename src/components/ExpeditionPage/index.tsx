'use client'
import HeaderMobile from '@/components/HeaderMobile'
import useIsMobile from '@/hooks/isMobile'
import Cards from '@/patterns/Cards'
import Details from '@/patterns/Details'
import Gallery from '@/patterns/Gallery'
import Hall from '@/patterns/Hall'
import Initiatives from '@/patterns/Initiatives'
import Investment from '@/patterns/Investment'
import Image from 'next/image'
import HeroExpedition from '../HeroExpedition'
import data from './data'

const ExpeditionPageContent = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <HeaderMobile />
      <HeroExpedition title="Islândia<br/> Do sonho à <span>realidade</span>" />
      <Initiatives data={data} id="curiosidades" />
      {!isMobile && (
        <>
          <Image
            src={'/images/hero-expedition-middle.png'}
            alt="Ilustração da expedição"
            width={1812}
            height={1210}
            style={{ width: '100%' }}
          />
          <Gallery />
        </>
      )}
      <Details />
      <Investment />
      <Cards />
      <Hall />
    </>
  )
}

const ExpeditionPage = () => {
  return <ExpeditionPageContent />
}

export default ExpeditionPage
