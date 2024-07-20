'use client'
import styled from 'styled-components'

export const Arrow = styled.svg`
  cursor: pointer;

  .circle,
  .path {
    transition: fill 0.5s ease-in-out;
  }

  &:hover {
    .circle {
      fill: url(#a);
    }

    .path {
      fill: #fff;
    }
  }
`
