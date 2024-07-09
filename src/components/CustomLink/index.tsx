'use client'

type CustomLinkProps = React.ComponentProps<'a'> & {
  target?: string
}

const CustomLink = ({
  children,
  target = '_blank',
  ...rest
}: CustomLinkProps) => {
  return (
    <a
      className="custom-link"
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      {...rest}
    >
      {children}
    </a>
  )
}

export default CustomLink
