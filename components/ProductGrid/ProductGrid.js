import SHOES from '@/utils/data'
import styled from 'styled-components'
import { ProductCard } from '../ProductCard'

export default function ProductGrid() {
  return (
    <Wrapper>
      {SHOES.map((product)=>(
        <ProductCard key={product.slug} {...product}></ProductCard>
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
