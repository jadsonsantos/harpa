import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
}

const Logo = ({ width = 147, height = 24 }: LogoProps) => (
  <Link href="/" title="Ir para a home do site">
    <Image
      src={'/images/harpa-logo.svg'}
      alt="Logo da Harpa"
      width={width}
      height={height}
    />
  </Link>
)

export default Logo
