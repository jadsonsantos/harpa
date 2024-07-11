'use client'
import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
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
