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
  padding: ${spacings.xxlarge} ${spacings.medium};
  border-radius: 32px;
  background-color: ${colors.dark};

  .heading {
    max-width: 390px;
    color: ${colors.light};
    margin: 0 auto 64px;
  }

  ${media.tabletUp} {
    padding: ${spacings.xxlarge} 0;
  }

  ${media.desktopUp} {
    .heading {
      max-width: 1290px;
    }
  }
`

export const Button = styled(PrimaryButton)``
