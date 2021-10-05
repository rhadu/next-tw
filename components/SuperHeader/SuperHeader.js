import tw, { styled } from 'twin.macro'

import { Icon } from '../Icon'
import SearchInput from '../SearchInput'

import { COLORS } from '@/utils/constants'

export default function Header() {
  return (
    <Wrapper>
      <MarketingMessage>
        Free Shipping on domestic orders over $75
      </MarketingMessage>

      <SearchInput></SearchInput>
      <Link>Help</Link>
      <IconWrapper>
        <Icon id='shopping-bag' strokeWidth={1} size={24}></Icon>
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  ${tw`px-8 py-[8px] gap-8 text-sm flex items-center`}
`
const MarketingMessage = styled.span`
  font-weight: 500;
  ${tw`flex-1 text-white`}
`

const Link = styled.a`
  &:hover {
    color: ${COLORS.white};
    cursor: pointer;
  }
`

const IconWrapper = styled.a`
  &:hover {
    color: ${COLORS.white};
    cursor: pointer;
  }
`
