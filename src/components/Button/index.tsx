'use client'
import React, { ComponentPropsWithoutRef } from 'react'
import * as S from './styles'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonHTMLProps = ComponentPropsWithoutRef<'button'>

type ButtonProps = ButtonHTMLProps & {
  variant?: ButtonVariant
}

const variantMap: Record<
  ButtonVariant,
  React.ComponentType<ButtonHTMLProps>
> = {
  primary: S.PrimaryButton,
  secondary: S.SecondaryButton,
  tertiary: S.TertiaryButton
}

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  const Component = variantMap[variant]
  return <Component {...rest}>{children}</Component>
}

export default Button
