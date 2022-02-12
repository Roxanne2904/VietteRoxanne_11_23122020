import logoFooter from '../../assets/logoFooter.png'

//styled
// import { StyledFooter } from '../../Styled/Components/Footer/index.jsx'
// import { StyledLogoContain } from '../../Styled/Components/Footer/index.jsx'
// import { StyledRightstext } from '../../Styled/Components/Footer/index.jsx'
// import { StyledImgLogo } from '../../Styled/Components/Footer/index.jsx'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logoContent">
        <img
          className="footer__logoContent__img"
          src={logoFooter}
          alt="le logo"
        />
      </div>
      <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
