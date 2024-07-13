import React from 'react'
import styled from 'styled-components'

const HoverEffect = styled.span`
  text-decoration: underline;

  &:hover {
    background: linear-gradient(
      91deg,
      #46a86d 3.78%,
      #6d8f70 29.28%,
      #ed3f7a 54.27%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const HoverEffectComponent = ({ children }: React.PropsWithChildren) => (
  <HoverEffect>{children}</HoverEffect>
)
