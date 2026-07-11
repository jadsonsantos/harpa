'use client'
import React, { ComponentPropsWithoutRef } from 'react'
import * as S from './styles'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonHTMLProps = ComponentPropsWithoutRef<'button'>

type ButtonProps = ButtonHTMLProps & {
  variant?: ButtonVariant
}

const variantMap: Record<ButtonVariant, typeof S.PrimaryButton> = {
  primary: S.PrimaryButton,
  secondary: S.SecondaryButton,
  tertiary: S.TertiaryButton
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', ...rest }, ref) => {
    const Component = variantMap[variant]
    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)
Button.displayName = 'Button'

export default Button
