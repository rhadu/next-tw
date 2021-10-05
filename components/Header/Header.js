import tw, { styled, css } from 'twin.macro'

import Link from 'next/link'

import { SuperHeader } from '../SuperHeader'
import Logo from '../Logo'
import { COLORS } from '@/utils/constants'

export default function Header({
  hideSuperHeader = false,
  navItems,
  logoTitle,
}) {
  return (
    <Wrapper>
      {!hideSuperHeader && <SuperHeader />}
      <MainHeader>
        <Side>
          <Logo title={logoTitle} />
        </Side>
        <Nav>
          {navItems &&
            navItems.map(({ url, title, active }) => (
              <Link key={title} href={url}>
                <NavLink href={url} active={active} >{title}</NavLink>
              </Link>
            ))}
        </Nav>
        <Side />
      </MainHeader>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  /* position: sticky;
  top: 0;
  z-index:1; */
`

const MainHeader = styled.div`
  background-color: white;
  border-color: ${COLORS.gray[300]};
  height: 72px;
  align-items: center;
  ${tw`border-b flex`};
`

const Side = styled.div`
  flex: 1;
  margin: 0 32px;
`

const Nav = styled.div`
  ${tw`gap-12 font-semibold uppercase text-base text-center items-center flex`};
`
const NavLink = styled.a`
  ${(props) =>
    props.active
      ? '{ color : ' + COLORS.secondary + '; pointer-events:none; }'
      : ''};
  &:hover {
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  }
`

// const NavLink = styled.button(({ active }) => [
//   active && [
//     css`
//       color: ${COLORS.secondary};
//     `,
//   ],
// ])
