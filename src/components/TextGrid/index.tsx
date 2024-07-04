'use client'
import useIsMobile from '@/hooks/isMobile'
import { InitiativeData } from '@/types'
import Details from '../Details'
import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'

const TextGrid = ({
  title = '',
  description,
  content,
  cta,
  hasAccordion
}: InitiativeData) => {
  const isMobile = useIsMobile()

  return (
    <S.TextGrid>
      <Heading>{title}</Heading>
      <S.Content>
        {content &&
          content.map(({ title, description }) => {
            if (isMobile && hasAccordion) {
              return (
                <Details
                  key={title}
                  title={title || ''}
                  description={description}
                />
              )
            }
            return (
              <div key={title}>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </div>
            )
          })}
        {description &&
          description.map((desc) => <Text key={desc}>{desc}</Text>)}
      </S.Content>
      {cta && (
        <Text>
          <S.Link href={cta.href}>{cta.text}</S.Link>
        </Text>
      )}
    </S.TextGrid>
  )
}

export default TextGrid
