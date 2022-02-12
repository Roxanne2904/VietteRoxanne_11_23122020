import logoFooter from '../../assets/logoFooter.png'

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
