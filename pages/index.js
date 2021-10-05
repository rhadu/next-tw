import React from 'react'
import { Header } from '@/components/Header'

import { DASH_NAVIGATION } from '@/utils/constants'


const IndexPage = () => (
  <Header navItems={DASH_NAVIGATION} logoTitle="JARVIS" hideSuperHeader></Header>
)

export default IndexPage
