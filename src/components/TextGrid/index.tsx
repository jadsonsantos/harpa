'use client'
import useIsMobile from '@/hooks/isMobile'
import { InitiativeData } from '@/types'
import Details from '../Details'
import Heading from '../Heading'
import { HoverEffectComponent } from '../HoverEffect'
import Text from '../Text'
import * as S from './styles'

const TextGrid = ({
  title = '',
  description,
  content,
  cta,
  hasAccordion,
  hasOnlyAccordion
}: InitiativeData) => {
  const isMobile = useIsMobile()

  return (
    <S.TextGrid>
      <Heading>{title}</Heading>
      <S.Content className="content">
        {content &&
          content.map(({ title, description }, index) => {
            if ((isMobile && hasAccordion) || hasOnlyAccordion) {
              return (
                <Details
                  key={title}
                  title={title || ''}
                  description={description}
                  isOpenByDefault={index === 0}
                />
              )
            }
            return (
              <div key={title}>
                <S.ItemTitle>{title}</S.ItemTitle>
                {description.map((desc) => (
                  <Text key={desc}>{desc}</Text>
                ))}
              </div>
            )
          })}
        {description &&
          description.map((desc) => <Text key={desc}>{desc}</Text>)}
      </S.Content>
      {cta && (
        <S.LinkContainer>
          <S.Link href={cta.href}>
            <HoverEffectComponent>{cta.text}</HoverEffectComponent>
          </S.Link>
        </S.LinkContainer>
      )}
    </S.TextGrid>
  )
}

export default TextGrid
