import React, { Children } from 'react'
import styled from 'styled-components'

import Logo from '../../images/logo.png'
import HeaderBar from '../HeaderBar'
import theme from '../../theme'

import NavBarLogin from './NavBar.Login'
import NavBarLogout from './NavBar.Logout'
import { inject, observer } from 'mobx-react'
import enhance from './NavBar.enhance.js'

const StyledLogo = styled.img`
  width: 122px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NavBar = enhance((props: Props) => {
  console.log('props', props)
  const { UserStore } = props
  return (
    <HeaderBar>
      <StyledLogo src={Logo} />
      <ItemContainer>
        {UserStore.currentUser ? <NavBarLogin /> : <NavBarLogout />}
      </ItemContainer>
    </HeaderBar>
  )
})

export default NavBar
