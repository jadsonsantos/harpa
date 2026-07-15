'use client'
import { PrimaryButton, TertiaryButton } from '@/components/Button/styles'
import { media } from '@/styles/mediaQueries'
import { flex } from '@/styles/mixins'
import { borders, colors, fonts, spacings } from '@/styles/tokens'
import styled, { css } from 'styled-components'

const fieldBase = css<{ $error?: boolean }>`
  width: 100%;
  background: transparent;
  border: 2px solid #333333;
  border-radius: ${borders.xsmall};
  padding: ${spacings.xsmall};
  font-family: ${fonts.sans};
  font-size: 16px;
  color: ${colors.light};
  transition: all ease-in-out;

  &::placeholder {
    color: ${colors.border};
  }

  &:hover:not(:disabled) {
    border-color: ${colors.light};
  }

  &:focus {
    outline: none;
    border-color: ${colors.light};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacings.small};

  max-width: 500px;
  margin: 0 auto;
  width: 100%;

  color: ${colors.light};
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.xsmall};

  &[hidden] {
    display: none;
  }
`

export const FieldLabel = styled.span`
  font-family: ${fonts.sans};
  font-size: 16px;
  font-weight: 500;
`

export const Input = styled.input<{ $error?: boolean }>`
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

export const DateInput = styled.input<{ $error?: boolean }>`
  ${fieldBase}
  color-scheme: dark;
  cursor: pointer;
`

export const TextareaWrapper = styled.div`
  position: relative;
`

export const Textarea = styled.textarea<{ $error?: boolean }>`
  ${fieldBase}
  min-height: 200px;
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

export const ErrorMessage = styled.span`
  font-family: ${fonts.sans};
  font-size: 14px;
  color: ${colors.danger};
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
  font-size: 20px;
  line-height: 1;
  background: #131313;
  border: 1px solid transparent;

  &:hover:not(:disabled) {
    border-color: #4b4b4b;
  }
`

export const CounterValue = styled.span`
  min-width: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`

export const PrivacyField = styled.label`
  ${flex}
  gap: ${spacings.xxsmall};
  cursor: pointer;
  font-size: 14px;
`

export const CheckboxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const CheckboxBox = styled.span<{
  $checked: boolean
  $error?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid
    ${({ $checked }) => ($checked ? colors.light : colors.border)};
  background-color: ${({ $checked }) =>
    $checked ? colors.light : 'transparent'};
  color: ${colors.primary};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  svg {
    width: 10px;
    height: auto;
  }

  ${PrivacyField}:hover & {
    border-color: ${colors.light};
  }

  ${CheckboxInput}:focus-visible + & {
    outline: 2px solid ${colors.light};
    outline-offset: 2px;
  }
`

export const PrivacyLabel = styled.span`
  font-size: 14px;
  line-height: 1.4;

  a {
    color: ${colors.light};
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  justify-content: center;
  margin-top: ${spacings.xsmall};

  &:hover {
    background: ${colors.background};
    color: ${colors.primary};
  }
`
