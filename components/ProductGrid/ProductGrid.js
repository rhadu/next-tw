import SHOES from '@/utils/data'
import styled from 'styled-components'
import { ProductCard } from '../ProductCard'

export default function ProductGrid() {
  return (
    <Wrapper>
      {SHOES.map((product) => (
        <ProductWrapper key={product.slug}>
          <ProductCard {...product}></ProductCard>
        </ProductWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 110px;
`
const ProductWrapper = styled.div`
  flex: 1;
  min-width: 340px;
`
