'use client'
import { PrimaryButton, TertiaryButton } from '@/components/Button/styles'
import { media } from '@/styles/mediaQueries'
import { borders, colors, effects, fonts, spacings } from '@/styles/tokens'
import styled, { css } from 'styled-components'

const fieldBase = css`
  width: 100%;
  background: transparent;
  border: 1px solid ${colors.border};
  border-radius: ${borders.xsmall};
  padding: ${spacings.xsmall};
  font-family: ${fonts.sans};
  font-size: 16px;
  color: ${colors.light};

  &::placeholder {
    color: ${colors.border};
  }

  &:focus {
    outline: none;
    border-color: ${colors.light};
  }
`

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacings.small};

  max-width: 500px;
  margin: 0 auto;
  padding: ${spacings.small};

  background-color: ${colors.primary};
  border-radius: ${borders.small};
  color: ${colors.light};

  ${media.desktopUp} {
    padding: ${spacings.medium};
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.xsmall};
`

export const FieldLabel = styled.span`
  font-family: ${fonts.sans};
  font-size: 16px;
  font-weight: 500;
`

export const Input = styled.input`
  ${fieldBase}
`

export const DatesRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacings.xsmall};

  ${media.tabletUp} {
    grid-template-columns: 1fr 1fr;
  }
`

export const DateInput = styled.input`
  ${fieldBase}
  color-scheme: dark;
`

export const TextareaWrapper = styled.div`
  position: relative;
`

export const Textarea = styled.textarea`
  ${fieldBase}
  min-height: 140px;
  resize: none;
  padding-bottom: ${spacings.large};
  font-family: ${fonts.sans};
`

export const CharCount = styled.span`
  position: absolute;
  right: ${spacings.xsmall};
  bottom: ${spacings.xsmall};
  font-size: 13px;
  color: ${colors.border};
`

export const Counter = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacings.small};
`

export const CounterButton = styled(TertiaryButton)`
  width: 44px;
  height: 44px;
  padding: 0;
  justify-content: center;
  border: 1px solid ${colors.border};
  font-size: 20px;
  line-height: 1;

  &:hover {
    background: ${effects.primary};
  }
`

export const CounterValue = styled.span`
  min-width: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`

export const PrivacyField = styled.label`
  display: flex;
  align-items: flex-start;
  gap: ${spacings.xsmall};
  cursor: pointer;
  font-size: 14px;
`

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-top: 2px;
  flex-shrink: 0;
  accent-color: ${colors.light};
  cursor: pointer;
`

export const PrivacyLabel = styled.span`
  font-size: 14px;
  line-height: 1.4;

  a {
    color: ${colors.light};
    font-weight: 600;
    text-decoration: underline;
  }
`

export const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  justify-content: center;
  margin-top: ${spacings.xsmall};
`
