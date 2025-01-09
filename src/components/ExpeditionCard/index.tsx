import Arrow from '@/components/Arrow'
import CustomLink from '@/components/CustomLink'
import { WHATSSAPP_URL } from '@/constants'
import * as S from './styles'
import Expedition from '@/types/Expedition'

const ExpeditionCard = ({ date, isClosed, country }: Expedition) => {
  const statusMessage = isClosed
    ? 'Vagas esgotadas :('
    : `Vagas abertas ${country} :)`

  const statusClassName = isClosed ? 'closed' : 'open'

  return (
    <S.ExpeditionCard className={statusClassName}>
      <S.ExpeditionMonth className="expedition-month">
        / {date.month} • {date.year}
      </S.ExpeditionMonth>
      <S.ExpeditionStatus className="expedition-status">
        {statusMessage}
        <CustomLink href={WHATSSAPP_URL}>
          <Arrow />
        </CustomLink>
      </S.ExpeditionStatus>
      <S.ExpeditionCountry className="expedition-country">
        {country}
      </S.ExpeditionCountry>
      <S.ExpeditionDate className="expedition-date">
        {date.startDate} → {date.endDate} • {date.month}
      </S.ExpeditionDate>
    </S.ExpeditionCard>
  )
}

export default ExpeditionCard
