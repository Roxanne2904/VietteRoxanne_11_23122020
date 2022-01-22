//Styled
import { StyledErrorTitle } from '../../Styled/Pages/Error/index.jsx'
import { StyledErrorMessage } from '../../Styled/Pages/Error/index.jsx'
import { StyledErrorLink } from '../../Styled/Pages/Error/index.jsx'

function Error() {
  return (
    <main>
      <StyledErrorTitle>404</StyledErrorTitle>
      <StyledErrorMessage>
        Oups! La page que vous demandez n'existe pas.
      </StyledErrorMessage>
      <StyledErrorLink to="/">Retourner sur la page d'accueil</StyledErrorLink>
    </main>
  )
}

export default Error
