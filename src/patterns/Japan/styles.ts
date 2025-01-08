import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 128px 0;
  background-color: ${colors.background};

  .japan-title {
    margin-bottom: 32px;
  }

  .japan-text {
    max-width: 327px;
    margin-bottom: 64px;
  }

  .japan-date {
    text-decoration: underline;
  }

  .japan-cta {
    margin-top: 64px;
  }

  .japan-image {
    width: 100%;
  }

  ${media.tabletUp} {
    padding: 164px 0;

    .japan-text {
      max-width: 340px;
    }
  }

  ${media.desktopUp} {
    .japan-text {
      max-width: 414px;
    }
  }
`
