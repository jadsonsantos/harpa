import * as S from './styles'

interface ExpeditionCardProps {
  status: string
  date: {
    startDate: number
    endDate: number
    month: string
    year: number
  }
}

const ExpeditionCard = ({ status, date }: ExpeditionCardProps) => (
  <S.Wrapper>
    <S.ExpeditionMonth>
      / {date.month} • {date.year}
    </S.ExpeditionMonth>
    <S.ExpeditionStatus>{status}</S.ExpeditionStatus>
    <S.ExpeditionDate>
      {date.startDate} → {date.endDate} • {date.month.substring(0, 3)}
    </S.ExpeditionDate>
  </S.Wrapper>
)

export default ExpeditionCard
