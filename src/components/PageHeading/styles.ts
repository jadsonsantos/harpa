'use client'
import { Heading } from '@/components/Heading/styles'
import { TextSmall } from '@/components/Text/styles'
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

export const Description = styled(TextSmall)`
  max-width: 316px;
  align-self: flex-end;
`
