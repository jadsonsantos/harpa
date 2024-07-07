'use client'
import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 767px)')
    const handleResize = () => setIsMobile(mediaQueryList.matches)

    setIsMobile(mediaQueryList.matches)
    mediaQueryList.addEventListener('change', handleResize)

    return () => mediaQueryList.removeEventListener('change', handleResize)
  }, [])

  return isMobile
}

export default useIsMobile
