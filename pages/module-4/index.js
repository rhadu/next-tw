import styled from 'styled-components'

import { useState } from 'react'

import { Header } from '@/components/Header'
import { ProductIndex } from '@/components/ProductIndex'

import { STORE_NAVIGATION } from '@/utils/constants'

export default function StorePage() {
  const [sortId, setSortId] = useState('newest')
  return (
    <>
      <Header navItems={STORE_NAVIGATION}></Header>
      <MainContent>
        <ProductIndex sortId={sortId} setSortId={setSortId}></ProductIndex>
      </MainContent>
    </>
  )
}

const MainContent = styled.div`
  padding: 64px 32px;
`
