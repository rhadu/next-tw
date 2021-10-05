import { PRODUCT_SIDEBAR } from '@/utils/constants'
import styled from 'styled-components'

export default function ProductSidebar() {
  return (
    <Wrapper>
      {PRODUCT_SIDEBAR.map((product)=>(
        <SidebarLink key={product.title} href="\">
          {product.title}
        </SidebarLink>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SidebarLink = styled.a`
  font-weight: 600;
  line-height: 2;
  width: fit-content;
`