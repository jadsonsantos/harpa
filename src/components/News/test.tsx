import { render, screen } from '@testing-library/react'

import News from '.'

describe('<News />', () => {
  it('should render the heading', () => {
    const { container } = render(<News />)

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
