import React from 'react'
import logo from '../../assets/logo_kasa.png'

//styled
import { StyledHeader } from '../../Styled/Header/index'
import { StyledImg } from '../../Styled/Header/index'
import { StyledNav } from '../../Styled/Header/index'
import { StyledUl } from '../../Styled/Header/index'
import { StyledLi } from '../../Styled/Header/index'
//

class Header extends React.Component {
  render() {
    return (
      <StyledHeader role="banner">
        <StyledImg src={logo} alt="logo" tabIndex="1" />
        <StyledNav>
          <StyledUl>
            <StyledLi to="/" tabIndex="1">
              Accueil
            </StyledLi>
            <StyledLi to="/test" tabIndex="1">
              A propos
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </StyledHeader>
    )
  }
}

export default Header
