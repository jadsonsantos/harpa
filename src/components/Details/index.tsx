'use client'
import { useState } from 'react'
import Text from '../Text'
import * as S from './styles'

interface DetailsProps {
  title: string
  description: string[]
  isOpenByDefault?: boolean
}

const Details = ({
  title,
  description,
  isOpenByDefault = false
}: DetailsProps) => {
  const [active, setActive] = useState(isOpenByDefault)
  const customClass = active ? 'details active' : 'details'

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <S.Details className={customClass} open={isOpenByDefault}>
      <S.Summary className="summary" onClick={handleClick}>
        <S.SummaryTitle className="summary-title">{title}</S.SummaryTitle>
      </S.Summary>
      <S.Content>
        {description.map((desc) => (
          <Text key={desc}>{desc}</Text>
        ))}
      </S.Content>
    </S.Details>
  )
}

export default Details
