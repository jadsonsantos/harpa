'use client'
import React from 'react'
import styled from 'styled-components'

const HoverEffect = styled.span`
  &:after {
    content: '';
    height: 1px;
    width: 100%;
    display: block;
    background: currentColor;
  }

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

    &:after {
      background: linear-gradient(
        91deg,
        #46a86d 3.78%,
        #6d8f70 29.28%,
        #ed3f7a 54.27%
      );
    }
  }
`

export const HoverEffectComponent = ({ children }: React.PropsWithChildren) => (
  <HoverEffect>{children}</HoverEffect>
)
