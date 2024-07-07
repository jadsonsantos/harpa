import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import SwiperStyles from '@/styles/swiper'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <SwiperStyles />
      {children}
    </>
  )
}
