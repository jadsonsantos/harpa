import { BackButton } from '@/components/ui/BackButton'
import Container from '@/patterns/Container'
import { useTranslations } from 'next-intl'
import * as S from './styles'

type PrivacyPolicyKeys = Parameters<
  ReturnType<typeof useTranslations<'PrivacyPolicy'>>
>[0]

const section2Items: PrivacyPolicyKeys[] = [
  'section2Item1',
  'section2Item2',
  'section2Item3',
  'section2Item4',
  'section2Item5',
  'section2Item6',
  'section2Item7'
]

const section3Items: PrivacyPolicyKeys[] = [
  'section3Item1',
  'section3Item2',
  'section3Item3',
  'section3Item4',
  'section3Item5'
]

const section6Items: PrivacyPolicyKeys[] = [
  'section6Item1',
  'section6Item2',
  'section6Item3',
  'section6Item4',
  'section6Item5',
  'section6Item6'
]

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPolicy')

  return (
    <S.Wrapper>
      <Container>
        <BackButton />
        <S.Title>
          {t('titlePrefix')}
          <em>{t('titleHighlight')}</em>
        </S.Title>

        <S.Content>
          <S.Section>
            <S.SectionTitle>{t('section1Title')}</S.SectionTitle>
            <S.Paragraph>{t('section1Text')}</S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{t('section2Title')}</S.SectionTitle>
            <S.Paragraph>{t('section2Intro')}</S.Paragraph>
            <S.List>
              {section2Items.map((key) => (
                <S.ListItem key={key}>{t(key)}</S.ListItem>
              ))}
            </S.List>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{t('section3Title')}</S.SectionTitle>
            <S.Paragraph>{t('section3Intro')}</S.Paragraph>
            <S.List>
              {section3Items.map((key) => (
                <S.ListItem key={key}>{t(key)}</S.ListItem>
              ))}
            </S.List>
            <S.Paragraph>{t('section3Outro')}</S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{t('section4Title')}</S.SectionTitle>
            <S.Paragraph>{t('section4Text1')}</S.Paragraph>
            <S.Paragraph>{t('section4Text2')}</S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{t('section5Title')}</S.SectionTitle>
            <S.Paragraph>{t('section5Text1')}</S.Paragraph>
            <S.Paragraph>{t('section5Text2')}</S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{t('section6Title')}</S.SectionTitle>
            <S.Paragraph>{t('section6Intro')}</S.Paragraph>
            <S.List>
              {section6Items.map((key) => (
                <S.ListItem key={key}>{t(key)}</S.ListItem>
              ))}
            </S.List>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{t('section7Title')}</S.SectionTitle>
            <S.Paragraph>{t('section7Text')}</S.Paragraph>
          </S.Section>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}
