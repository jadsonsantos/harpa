'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 82px;
  }

  h3, h4 {
    font-weight: normal;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    transition: 0.35s ease-out;
  }

  ul, li {
    list-style: none;
  }

  img {
    height: auto;
  }

  button {
    border: none;
    background: none;
  }
`

export default GlobalStyles
