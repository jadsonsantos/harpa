'use client'
import { LargeContainer } from '@/patterns/Container/styles'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { PrimaryButton } from '../Button/styles'

export const Wrapper = styled.section`
  padding-top: 128px;
  text-align: center;

  ${media.desktopUp} {
    padding-top: 164px;
  }
`

export const Container = styled(LargeContainer)``

export const Content = styled.div`
  padding: ${spacings.xxlarge} 20px;
  border-radius: 32px;
  background-color: ${colors.dark};

  .heading {
    max-width: 290px;
    color: ${colors.light};
    margin: 0 auto 64px;
  }

  ${media.tabletUp} {
    padding: ${spacings.xxlarge} 155px;

    .heading {
      max-width: 390px;
    }
  }

  ${media.desktopUp} {
    .heading {
      max-width: 1290px;
    }
  }
`

export const Button = styled(PrimaryButton)``
