import { styled } from 'twin.macro'
import Link from 'next/link'


import { COLORS } from '@/utils/constants'

const Logo = ({title = "Sole&Ankle"}) => {
  return (
    <Link href='/'>
      <StyledLink href='/'>{title}</StyledLink>
    </Link>
  )
}

const StyledLink = styled.a`
  font-weight: 800;
  font-size: 1.5rem;
`

export default Logo
