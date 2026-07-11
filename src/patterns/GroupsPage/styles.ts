'use client'
import { Heading } from '@/components/Heading/styles'
import { TextSmall } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`

export const HeadingSection = styled.section``

export const HeadingWrapper = styled.div`
  max-width: 948px;
  display: flex;
  flex-direction: column;
`

export const HeadingTitle = styled(Heading)`
  text-align: left;
  margin-bottom: 40px;
`

export const HeadingDescription = styled(TextSmall)`
  max-width: 316px;
  align-self: flex-end;
`

export const CardsGrid = styled.section`
  padding: 40px 0;
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    overflow-x: auto;

    ${media.mobileDown} {
      gap: 16px;
    }
  }
  ${media.desktopUp} {
    padding: 60px 0 112px;
  }
`
