import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)``

const NavBarLogout = () => {
  return <StyledLink to="/register">Sing up</StyledLink>
}

export default NavBarLogout
