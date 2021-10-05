import styled from 'styled-components'

import { COLORS, WEIGHTS } from '@/utils/constants'
import { formatPrice, pluralize, isNewProduct } from '@/utils/helpers'

const STYLES = {
  'on-sale': {
    background: COLORS.primary,
  },
  'new-release': {
    background: COLORS.secondary,
  },
}

export default function ProductCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) {
  const variant =
    typeof salePrice === 'number'
      ? 'on-sale'
      : isNewProduct(releaseDate)
      ? 'new-release'
      : 'default'

  const style = STYLES[variant]

  const label = variant === 'on-sale' ? 'Sale' : 'Just Released!'

  return (
    <Link href={`/shoe/${slug}`}>
      <ImageWrapper>
        <Image src={imageSrc} alt={name} />
        {style && <LabelWrapper style={{ '--background': style.background }}>
          {label}
        </LabelWrapper>}
      </ImageWrapper>

      <Row>
        <Name>{name}</Name>
        <Price strikePrice={salePrice}>{formatPrice(price)}</Price>
      </Row>
      <Row>
        <Colors>{pluralize('Color', numOfColors)}</Colors>
        {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
      </Row>
    </Link>
  )
}

const Link = styled.a`
  
  margin-bottom: 30px;
  outline-offset: 4px;
`

const ImageWrapper = styled.div`
  margin-bottom: 14px;
  position: relative;
`
const Image = styled.img`
  border-radius: 16px 16px 4px 4px;
  width: 100%;
`

const LabelWrapper = styled.label`
  position: absolute;
  top: 12px;
  right: -4px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.medium};
  color: #ffffff;
  background-color: var(--background);
  padding-left: 10px;
  padding-right: 9px;
  border-radius: 4px;
`

const Row = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
`
const Name = styled.a`
  font-weight: ${WEIGHTS.medium};
`
const Colors = styled.div`
  color: ${COLORS.gray[700]};
`
const Price = styled.span`
  font-weight: ${WEIGHTS.normal};
  ${({ strikePrice }) =>
    strikePrice &&
    `
    text-decoration: line-through;
    color: ${COLORS.gray[700]};
  `}
`

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`
