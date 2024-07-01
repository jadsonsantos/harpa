// import { ReactNode, useEffect, useRef } from 'react'
// import { SwiperOptions } from 'swiper/types'

// interface SwiperProps
//   extends React.PropsWithChildren<Omit<SwiperOptions, 'init'>> {}

// type SwiperSlideProps = {
//   children: ReactNode
// }

// export function Swiper({ children, ...props }: SwiperProps) {
//   const swiperRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     // Não é necessário registrar manualmente o Swiper como um elemento personalizado
//     // se você estiver usando o Swiper 7 ou superior que suporta Web Components nativamente

//     // Pega as props do componente e as atribui ao elemento Swiper
//     const swiperInstance = swiperRef.current
//     if (swiperInstance) {
//       Object.assign(swiperInstance, props)
//       // Inicializa o Swiper manualmente, se necessário
//       // Note que isso pode não ser necessário dependendo da sua configuração do Swiper
//     }
//   }, [props])

//   return (
//     <div id="swiper-container">
//       <swiper-container ref={swiperRef}>{children}</swiper-container>
//     </div>
//   )
// }
// export function SwiperSlide({ children }: SwiperSlideProps) {
//   return <div id="swiper-slide">{children}</div>
// }
'use client'
import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'

export function Swiper(props) {
  const swiperRef = useRef(null)
  const { children, ...rest } = props

  useEffect(() => {
    // Register Swiper web component
    register()

    // pass component props to parameters
    const params = {
      ...rest
    }

    // Assign it to swiper element
    Object.assign(swiperRef.current, params)

    // initialize swiper
    swiperRef.current.initialize()
  }, [rest])

  return (
    <swiper-container
      init="true"
      ref={swiperRef}
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bottom': '20px'
      }}
    >
      {children}
    </swiper-container>
  )
}
export function SwiperSlide(props) {
  const { children, ...rest } = props

  return <swiper-slide {...rest}>{children}</swiper-slide>
}
