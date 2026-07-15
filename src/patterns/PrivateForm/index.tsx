'use client'
import { CheckIcon, MinusIcon, PlusIcon } from '@/components/icons'
import { Link } from '@/i18n/navigation'
import * as S from './styles'
import {
  MAX_DREAM_LENGTH,
  MIN_TRAVELERS,
  usePrivateForm
} from './usePrivateForm'

const PrivateForm = () => {
  const {
    t,
    form,
    setField,
    errors,
    handleBlur,
    travelersAtMin,
    minDeparture,
    departureFocused,
    setDepartureFocused,
    returnFocused,
    setReturnFocused,
    decreaseTravelers,
    increaseTravelers,
    handleDepartureChange,
    handleReturnChange,
    handleSubmit
  } = usePrivateForm()

  return (
    <S.Wrapper onSubmit={handleSubmit} noValidate>
      <S.Field>
        <S.Input
          type="text"
          id="fullName"
          name="fullName"
          autoComplete="name"
          required
          $error={errors.fullName}
          aria-invalid={errors.fullName}
          placeholder={t('fullNamePlaceholder')}
          aria-label={t('fullNameLabel')}
          value={form.fullName}
          onChange={(event) => setField('fullName', event.target.value)}
          onBlur={() => handleBlur('fullName')}
        />
        {errors.fullName && (
          <S.ErrorMessage>{t('requiredError')}</S.ErrorMessage>
        )}
      </S.Field>

      <S.Field hidden>
        <S.Input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder={t('phonePlaceholder')}
          aria-label={t('phoneLabel')}
          value={form.phone}
          onChange={(event) => setField('phone', event.target.value)}
        />
      </S.Field>

      <S.Field hidden>
        <S.Input
          type="text"
          id="destination"
          name="destination"
          placeholder={t('destinationPlaceholder')}
          aria-label={t('destinationLabel')}
          value={form.destination}
          onChange={(event) => setField('destination', event.target.value)}
        />
      </S.Field>

      <S.Field>
        <S.FieldLabel>{t('travelersLabel')}</S.FieldLabel>
        <S.Counter>
          <S.CounterButton
            type="button"
            id="decreaseTravelers"
            aria-label={t('decreaseTravelers')}
            onClick={decreaseTravelers}
            disabled={form.travelers <= MIN_TRAVELERS}
          >
            <MinusIcon />
          </S.CounterButton>
          <S.CounterValue id="travelers">
            {String(form.travelers).padStart(2, '0')}
          </S.CounterValue>
          <S.CounterButton
            type="button"
            id="increaseTravelers"
            aria-label={t('increaseTravelers')}
            onClick={increaseTravelers}
          >
            <PlusIcon />
          </S.CounterButton>
        </S.Counter>
        {travelersAtMin && (
          <S.ErrorMessage>{t('minTravelersError')}</S.ErrorMessage>
        )}
      </S.Field>

      <S.Field>
        <S.FieldLabel>{t('datesLabel')}</S.FieldLabel>
        <S.DatesRow>
          <S.DateInput
            type={departureFocused || form.departureDate ? 'date' : 'text'}
            id="departureDate"
            name="departureDate"
            required
            $error={errors.departureDate}
            aria-invalid={errors.departureDate}
            placeholder={t('departurePlaceholder')}
            aria-label={t('departurePlaceholder')}
            value={form.departureDate}
            min={minDeparture}
            onFocus={() => setDepartureFocused(true)}
            onBlur={() => {
              setDepartureFocused(false)
              handleBlur('departureDate')
            }}
            onChange={(event) => handleDepartureChange(event.target.value)}
          />
          <S.DateInput
            type={returnFocused || form.returnDate ? 'date' : 'text'}
            id="returnDate"
            name="returnDate"
            required
            $error={errors.returnDate}
            aria-invalid={errors.returnDate}
            placeholder={t('returnPlaceholder')}
            aria-label={t('returnPlaceholder')}
            value={form.returnDate}
            min={form.departureDate || minDeparture}
            disabled={!form.departureDate}
            onFocus={() => setReturnFocused(true)}
            onBlur={() => {
              setReturnFocused(false)
              handleBlur('returnDate')
            }}
            onChange={(event) => handleReturnChange(event.target.value)}
          />
        </S.DatesRow>
        {(errors.departureDate || errors.returnDate) && (
          <S.ErrorMessage>{t('requiredError')}</S.ErrorMessage>
        )}
      </S.Field>

      <S.Field>
        <S.FieldLabel>{t('dreamLabel')}</S.FieldLabel>
        <S.TextareaWrapper>
          <S.Textarea
            id="dream"
            name="dream"
            required
            $error={errors.dream}
            aria-invalid={errors.dream}
            maxLength={MAX_DREAM_LENGTH}
            placeholder={t('dreamPlaceholder')}
            aria-label={t('dreamLabel')}
            value={form.dream}
            onChange={(event) => setField('dream', event.target.value)}
            onBlur={() => handleBlur('dream')}
          />
          <S.CharCount>
            {t('charCount', {
              count: form.dream.length,
              max: MAX_DREAM_LENGTH
            })}
          </S.CharCount>
        </S.TextareaWrapper>
        {errors.dream && <S.ErrorMessage>{t('requiredError')}</S.ErrorMessage>}
      </S.Field>

      <S.Field>
        <S.PrivacyField>
          <S.CheckboxInput
            type="checkbox"
            id="agreed"
            name="agreed"
            required
            checked={form.agreed}
            onChange={(event) => setField('agreed', event.target.checked)}
            onBlur={() => handleBlur('agreed')}
          />
          <S.CheckboxBox $checked={form.agreed} $error={errors.agreed}>
            {form.agreed && <CheckIcon />}
          </S.CheckboxBox>
          <S.PrivacyLabel>
            {t('privacyLabel').trimEnd()}{' '}
            <Link href="/politica-de-privacidade">{t('privacyLinkText')}</Link>
            .*
          </S.PrivacyLabel>
        </S.PrivacyField>
        {errors.agreed && <S.ErrorMessage>{t('requiredError')}</S.ErrorMessage>}
      </S.Field>

      <S.SubmitButton type="submit">{t('submitButton')}</S.SubmitButton>
    </S.Wrapper>
  )
}

export default PrivateForm
