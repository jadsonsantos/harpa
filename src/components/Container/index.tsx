import * as S from './styles'

type Props = {
  children: React.ReactNode
  hasCustomWidth?: boolean
}

const Container = ({ children, hasCustomWidth = false }: Props) => (
  <S.Wrapper hasCustomWidth={hasCustomWidth}>{children}</S.Wrapper>
)

export default Container
