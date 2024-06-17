'use client'
import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-top: 128px;
  text-align: center;

  ${media.desktopUp} {
    padding-top: 164px;
  }
`

export const Content = styled.div`
  padding: 164px 20px;
  border-radius: 32px;
  background-color: ${colors.dark};

  h3 {
    color: ${colors.light};
    margin: 0 auto 64px;
  }

  a {
    background-color: ${colors.light};
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
    letter-spacing: -0.18px;
    padding: 20px 32px;
    border-radius: 60px;
  }

  ${media.tabletUp} {
    padding: 164px 155px;
  }

  ${media.desktopUp} {
  }
`
