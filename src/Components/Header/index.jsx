import logo from '../../assets/logo_kasa.png'

//styled
import { StyledHeader } from '../../Styled/Components/Header/index'
import { StyledImg } from '../../Styled/Components/Header/index'
import { StyledNav } from '../../Styled/Components/Header/index'
import { StyledUl } from '../../Styled/Components/Header/index'
import { StyledLi } from '../../Styled/Components/Header/index'
//

function Header() {
  return (
    <StyledHeader role="banner">
      <StyledImg src={logo} alt="logo" tabIndex="1" />
      <StyledNav>
        <StyledUl>
          <StyledLi to="" tabIndex="1">
            Accueil
          </StyledLi>
          <StyledLi to="/about" tabIndex="1">
            A Propos
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
