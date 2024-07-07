import { useEffect, useState } from 'react'

const useIsDeviceType = (deviceType = 'mobile') => {
  const [isDevice, setIsDevice] = useState<boolean>(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(min-width: ${
        deviceType === 'tablet' ? 768 : deviceType === 'desktop' ? 1024 : 0
      }px)`
    )

    const handleResize = () => setIsDevice(mediaQueryList.matches)

    setIsDevice(mediaQueryList.matches)

    mediaQueryList.addEventListener('change', handleResize)

    return () => mediaQueryList.removeEventListener('change', handleResize)
  }, [deviceType])

  return isDevice
}

export default useIsDeviceType
