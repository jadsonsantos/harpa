import { render, screen } from '@testing-library/react'

import Text from '.'

describe('<Text />', () => {
  it('should render the text passed as children', () => {
    const { container } = render(<Text>Text</Text>)

    expect(screen.getByText('Text')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
