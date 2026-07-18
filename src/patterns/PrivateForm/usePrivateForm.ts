'use client'
import { WHATSAPP_NUMBER } from '@/constants'
import { useTranslations } from 'next-intl'
import { FormEvent, useState } from 'react'

export const MAX_DREAM_LENGTH = 400
export const MIN_TRAVELERS = 1

type FormValues = {
  fullName: string
  phone: string
  destination: string
  travelers: number
  departureDate: string
  returnDate: string
  dream: string
  agreed: boolean
}

const INITIAL_VALUES: FormValues = {
  fullName: '',
  phone: '',
  destination: '',
  travelers: 2,
  departureDate: '',
  returnDate: '',
  dream: '',
  agreed: false
}

type TouchedFields = Record<keyof FormValues, boolean>

const INITIAL_TOUCHED: TouchedFields = {
  fullName: false,
  phone: false,
  destination: false,
  travelers: false,
  departureDate: false,
  returnDate: false,
  dream: false,
  agreed: false
}

export const usePrivateForm = () => {
  const t = useTranslations('PrivateForm')

  const [form, setForm] = useState<FormValues>(INITIAL_VALUES)
  const [touched, setTouched] = useState<TouchedFields>(INITIAL_TOUCHED)

  const setField = <K extends keyof FormValues>(
    field: K,
    value: FormValues[K]
  ) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleBlur = (field: keyof FormValues) =>
    setTouched((prev) => ({ ...prev, [field]: true }))

  const errors = {
    fullName: touched.fullName && !form.fullName.trim(),
    departureDate: touched.departureDate && !form.departureDate,
    returnDate: touched.returnDate && !form.returnDate,
    dream: touched.dream && !form.dream.trim(),
    agreed: touched.agreed && !form.agreed
  }

  const travelersAtMin = form.travelers <= MIN_TRAVELERS

  const decreaseTravelers = () =>
    setField('travelers', Math.max(MIN_TRAVELERS, form.travelers - 1))

  const increaseTravelers = () => setField('travelers', form.travelers + 1)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setTouched({
      fullName: true,
      phone: true,
      destination: true,
      travelers: true,
      departureDate: true,
      returnDate: true,
      dream: true,
      agreed: true
    })

    const hasErrors =
      !form.fullName.trim() ||
      !form.departureDate ||
      !form.returnDate ||
      !form.dream.trim() ||
      !form.agreed

    if (hasErrors) return

    const message = t('whatsappMessage', {
      name: form.fullName,
      travelers: form.travelers,
      departure: form.departureDate,
      returnDate: form.returnDate,
      dream: form.dream
    })

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return {
    t,
    form,
    setField,
    errors,
    handleBlur,
    travelersAtMin,
    decreaseTravelers,
    increaseTravelers,
    handleSubmit
  }
}
