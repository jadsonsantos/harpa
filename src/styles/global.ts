'use client'

import { createGlobalStyle } from 'styled-components'
import { fonts } from './tokens'

const scrollbarThumb = '#D9D9D9'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: ${scrollbarThumb} transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbarThumb};
    border-radius: 40px;
  }

  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${fonts.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
    font-family: ${fonts.sans};
    border: none;
    background: none;
  }
`

export default GlobalStyles
