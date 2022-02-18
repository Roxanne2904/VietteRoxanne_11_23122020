import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Error() {
  const { datas } = useContext(DatasContext)
  let currentPathname = document.location.pathname

  currentPathname !== '/about' &&
    currentPathname !== '/' &&
    datas != null &&
    datas.map((data) => currentPathname !== `host/${data.id}`) &&
    window.history.replaceState(
      { pathname: currentPathname },
      'pathname',
      'error404'
    )

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
