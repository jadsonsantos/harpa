import { render, screen } from '@testing-library/react'

import Founder from '.'

describe('<Founder />', () => {
  it('should render the heading', () => {
    const { container } = render(<Founder />)

    expect(screen.getByRole('heading', { name: /Founder/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
