'use client'
import { useEffect } from 'react'
import Vivus from 'vivus'
import * as S from './styles'

interface AnimatedIllustrationProps {
  name: string
}

const AnimatedIllustration = ({ name }: AnimatedIllustrationProps) => {
  useEffect(() => {
    new Vivus('my-svg')
  }, [])

  return (
    <S.Wrapper className="illustration">
      <object
        id="my-svg"
        type="image/svg+xml"
        data={`images/animations/animation-${name}_animated.svg`}
      ></object>
    </S.Wrapper>
  )
}

export default AnimatedIllustration
