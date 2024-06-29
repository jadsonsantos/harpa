import Image from 'next/image'
import * as S from './styles'

const AnimatedIllustration = () => {
  return (
    <S.Wrapper>
      <Image
        src="/images/animations/animation-1.png"
        width={317}
        height={350}
        alt="Hárpá"
      />
    </S.Wrapper>
  )
}

export default AnimatedIllustration
