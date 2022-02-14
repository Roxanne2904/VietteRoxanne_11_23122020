//Styled
// import { StyledErrorTitle } from '../../Styled/Pages/Error/index.jsx'
// import { StyledErrorMessage } from '../../Styled/Pages/Error/index.jsx'
import { Link } from 'react-router-dom'
// import { StyledErrorLink } from '../../Styled/Pages/Error/index.jsx'

function Error() {
  return (
    <main>
      <h1 className="errorTitle">404</h1>
      <span className="errorTitle__msg">
        <span className="errorTitle__msg__main">Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </span>
      <Link className="errorTitle__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error
