'use client'
import { Heading } from '@/components/Heading/styles'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Section = styled.section``

export const Wrapper = styled.div`
  max-width: 948px;
  display: flex;
  flex-direction: column;
`

export const Title = styled(Heading)`
  text-align: left;
  margin-bottom: 40px;
`

export const Description = styled(Text)`
  ${media.desktopUp} {
    max-width: 323px;
    align-self: flex-end;
  }
`
