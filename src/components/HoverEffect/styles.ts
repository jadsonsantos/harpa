'use client'
import styled from 'styled-components'

const background =
  'linear-gradient(91deg, #46a86d 3.78%, #6d8f70 29.28%, #ed3f7a 54.27%)'

export const HoverEffect = styled.span`
  &:after {
    content: '';
    height: 1px;
    width: 100%;
    display: block;
    background: currentColor;
  }

  &:hover {
    background: ${background};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:after {
      background: ${background};
    }
  }
`
