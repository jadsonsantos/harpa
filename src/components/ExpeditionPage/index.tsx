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
      <HeaderMobile title="A Expedição" />
      <HeroExpedition title="Islândia:<br/> selvagemente <span>delicada</span>" />
      <Initiatives selector="has-accordion" data={data} id="curiosidades" />
      {isMobile ? (
        <Image
          src={'/images/expedition/hero-expedition-middle-mobile.jpg'}
          alt="Ilustração de uma mulher segurando um pedaço de gelo"
          width={375}
          height={346}
          style={{ width: '100%' }}
          quality={100}
        />
      ) : (
        <>
          <Image
            src={'/images/expedition/hero-expedition-middle.jpg'}
            alt="Ilustração de uma mulher segurando um pedaço de gelo"
            width={1728}
            height={823}
            style={{ width: '100%' }}
            quality={100}
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
