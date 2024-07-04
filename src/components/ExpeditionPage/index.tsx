'use client'
import useIsMobile from '@/hooks/isMobile'
import Cards from '@/patterns/Cards'
import Details from '@/patterns/Details'
import Gallery from '@/patterns/Gallery'
import Initiatives from '@/patterns/Initiatives'
import Investment from '@/patterns/Investment'
import Image from 'next/image'
import HeroExpedition from '../HeroExpedition'
import data from './data'

const ExpeditionPageContent = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <HeroExpedition title="Islândia<br/> Do sonho à <span>realidade</span>" />
      <Initiatives data={data} />
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
    </>
  )
}

const ExpeditionPage = () => {
  return <ExpeditionPageContent />
}

export default ExpeditionPage
