'use client'
import { WHATSAPP_NUMBER } from '@/constants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import * as S from './styles'

const MAX_DREAM_LENGTH = 400
const MIN_TRAVELERS = 1

const PrivateForm = () => {
  const t = useTranslations('PrivateForm')

  const [fullName, setFullName] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [dream, setDream] = useState('')
  const [agreed, setAgreed] = useState(false)

  const decreaseTravelers = () =>
    setTravelers((prev) => Math.max(MIN_TRAVELERS, prev - 1))

  const increaseTravelers = () => setTravelers((prev) => prev + 1)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!agreed) return

    const message = t('whatsappMessage', {
      name: fullName,
      travelers,
      departure: departureDate,
      returnDate,
      dream
    })

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Field>
        <S.Input
          type="text"
          required
          placeholder={t('fullNamePlaceholder')}
          aria-label={t('fullNameLabel')}
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </S.Field>

      <S.Field>
        <S.FieldLabel>{t('travelersLabel')}</S.FieldLabel>
        <S.Counter>
          <S.CounterButton
            type="button"
            aria-label={t('decreaseTravelers')}
            onClick={decreaseTravelers}
            disabled={travelers <= MIN_TRAVELERS}
          >
            &minus;
          </S.CounterButton>
          <S.CounterValue>{String(travelers).padStart(2, '0')}</S.CounterValue>
          <S.CounterButton
            type="button"
            aria-label={t('increaseTravelers')}
            onClick={increaseTravelers}
          >
            +
          </S.CounterButton>
        </S.Counter>
      </S.Field>

      <S.Field>
        <S.FieldLabel>{t('datesLabel')}</S.FieldLabel>
        <S.DatesRow>
          <S.DateInput
            type="date"
            required
            aria-label={t('departurePlaceholder')}
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
          />
          <S.DateInput
            type="date"
            required
            aria-label={t('returnPlaceholder')}
            value={returnDate}
            min={departureDate}
            onChange={(event) => setReturnDate(event.target.value)}
          />
        </S.DatesRow>
      </S.Field>

      <S.Field>
        <S.FieldLabel>{t('dreamLabel')}</S.FieldLabel>
        <S.TextareaWrapper>
          <S.Textarea
            required
            maxLength={MAX_DREAM_LENGTH}
            placeholder={t('dreamPlaceholder')}
            aria-label={t('dreamLabel')}
            value={dream}
            onChange={(event) => setDream(event.target.value)}
          />
          <S.CharCount>
            {t('charCount', { count: dream.length, max: MAX_DREAM_LENGTH })}
          </S.CharCount>
        </S.TextareaWrapper>
      </S.Field>

      <S.PrivacyField>
        <S.Checkbox
          type="checkbox"
          required
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
        />
        <S.PrivacyLabel>
          {t('privacyLabel').trimEnd()}{' '}
          <Link href="/politica-de-privacidade">{t('privacyLinkText')}</Link>.
        </S.PrivacyLabel>
      </S.PrivacyField>

      <S.SubmitButton type="submit">{t('submitButton')}</S.SubmitButton>
    </S.Wrapper>
  )
}

export default PrivateForm
