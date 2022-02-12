import logo from '../../assets/logo_kasa.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header" role="banner">
      <img className="header__img" src={logo} alt="logo" tabIndex="1" />
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <Link className="header__nav__ul__li" to="/" tabIndex="1">
            Accueil
          </Link>
          <Link className="header__nav__ul__li" to="/about" tabIndex="1">
            A Propos
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
