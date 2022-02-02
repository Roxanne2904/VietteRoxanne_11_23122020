import logoFooter from '../../assets/logoFooter.png'

//styled
import { StyledFooter } from '../../Styled/Components/Footer/index.jsx'
import { StyledLogoContain } from '../../Styled/Components/Footer/index.jsx'
import { StyledRightstext } from '../../Styled/Components/Footer/index.jsx'
import { StyledImgLogo } from '../../Styled/Components/Footer/index.jsx'

function Footer() {
  return (
    <StyledFooter>
      <StyledLogoContain>
        <StyledImgLogo src={logoFooter} alt="le logo" />
      </StyledLogoContain>
      <StyledRightstext>© 2020 Kasa. All rights reserved</StyledRightstext>
    </StyledFooter>
  )
}
export default Footer
