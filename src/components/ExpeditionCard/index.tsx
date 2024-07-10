import * as S from './styles'

interface ExpeditionCardProps {
  isClosed?: boolean
  date: {
    startDate: number
    endDate: number
    month: string
    year: number
  }
}

const ExpeditionCard = ({ date, isClosed }: ExpeditionCardProps) => {
  const statusMessage = isClosed ? 'Vagas esgotadas :(' : 'Vagas abertas :)'
  const statusClassName = isClosed ? 'closed' : 'open'

  return (
    <S.Wrapper className={statusClassName}>
      <S.ExpeditionMonth className="expedition-month">
        / {date.month} • {date.year}
      </S.ExpeditionMonth>
      <S.ExpeditionStatus className="expedition-status">
        {statusMessage}
      </S.ExpeditionStatus>
      <S.ExpeditionDate className="expedition-date">
        {date.startDate} → {date.endDate} • {date.month.substring(0, 3)}
      </S.ExpeditionDate>
    </S.Wrapper>
  )
}

export default ExpeditionCard
