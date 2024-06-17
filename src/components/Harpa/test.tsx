import { render, screen } from '@testing-library/react'

import Harpa from '.'

describe('<Harpa />', () => {
  it('should render the heading', () => {
    const { container } = render(<Harpa />)

    expect(screen.getByRole('heading', { name: /Harpa/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
