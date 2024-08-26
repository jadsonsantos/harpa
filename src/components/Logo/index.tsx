'use client'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
  imgSrc?: string
}

const Logo = ({
  width = 147,
  height = 24,
  imgSrc = 'harpa-logo'
}: LogoProps) => {
  return (
    <Link href="/" title="Ir para a home do site">
      <Image
        src={`/images/${imgSrc}.svg`}
        alt="Logo da Harpa"
        width={width}
        height={height}
        priority
      />
    </Link>
  )
}

export default Logo
