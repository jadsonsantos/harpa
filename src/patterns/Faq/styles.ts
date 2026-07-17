import { Heading } from '@/components/Heading/styles'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Faq = styled.section`
  padding: 32px 0;

  ${media.desktopUp} {
    padding: 100px 0;
  }
`

export const FaqWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`

export const FaqTitle = styled(Heading)`
  margin-bottom: 80px;

  ${media.desktopUp} {
    font-size: 54px;
  }
`
