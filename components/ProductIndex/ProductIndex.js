import styled from 'styled-components'

import Breadcrumbs from '../Breadcrumbs'
import Spacer from '../Spacer'
import Select from '../Select'
import { ProductGrid } from '../ProductGrid'

import { WEIGHTS } from '@/utils/constants'

import { ProductSidebar } from '../ProductSidebar'

export default function ProductIndex({ sortId, setSortId }) {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label='Sort'
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ProductGrid/>
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={34} />
        <ProductSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`
const LeftColumn = styled.div`
  flex-basis: 248px;
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.div`
  display: flex;
  align-items: baseline;
`
const Title = styled.div`
  flex: 1;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`
