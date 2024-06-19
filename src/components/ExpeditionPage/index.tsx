'use client'
import Image from 'next/image'
import HeroExpedition from '../HeroExpedition'
import Gallery from '@/patterns/Gallery'
import Investment from '@/patterns/Investment'
import Cards from '@/patterns/Cards'
import useIsMobile from '@/hooks/isMobile'

const ExpeditionPageContent = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <HeroExpedition title="Islândia<br/> Do sonho à <span>realidade</span>" />
      {!isMobile && (
        <>
          <Image
            src={'/images/hero-expedition.png'}
            alt="Ilustração da expedição"
            width={1812}
            height={1210}
            style={{ width: '100%' }}
          />
          <Gallery />
        </>
      )}
      <Investment />
      <Cards />
    </>
  )
}

const ExpeditionPage = () => {
  return <ExpeditionPageContent />
}

export default ExpeditionPage
