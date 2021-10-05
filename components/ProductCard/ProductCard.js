import styled from 'styled-components'

import { COLORS, WEIGHTS } from '@/utils/constants'
import { formatPrice, pluralize, isNewShoe } from '@/utils/helpers'
import tw from 'twin.macro'

export default function ProductCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) {
  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={imageSrc} alt={name} />
        </ImageWrapper>

        <Row>
          <Name>{name}</Name>
          <Price salePrice={salePrice}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <Variants>{pluralize('Color', numOfColors)}</Variants>
          {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  )
}

const Link = styled.a`
  flex: 1 0 340px;
  margin-bottom: 30px;
  outline-offset: 4px;

  &:hover{
    
  }
`

const Wrapper = styled.div`
`

const ImageWrapper = styled.div`
  margin-bottom: 14px;
`
const Image = styled.img`
  border-radius: 16px 16px 4px 4px;
`

const Row = styled.div`
  display: flex;
`
const Name = styled.a`
  flex: 1;
  font-weight: ${WEIGHTS.medium};
`
const Variants = styled.div`
  flex: 1;
  color: ${COLORS.gray[700]};
`
const Price = styled.span`
  font-weight: ${WEIGHTS.normal};
  ${({ salePrice }) =>
    salePrice &&
    `
    text-decoration: line-through;
    color: ${COLORS.gray[700]};
  `}
`

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`
