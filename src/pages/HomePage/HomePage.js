import React from 'react'
import styled from 'styled-components'

import theme from '../../theme'
import enhance from './HomePage.enhance.js'

const BodyContainer = styled.div`
  margin-top: ${theme().dimens.xl};
`
const HomePageWrapper = styled.div`
  margin-top: 76px;
`

const HomePage = enhance((props: Props) => {
  return (
    <HomePageWrapper>
      <p>HomePage</p>
    </HomePageWrapper>
  )
})

export default HomePage
