import Banner from '../../Components/Banner'
import Lists from '../../Components/Lists/index'
import styled from 'styled-components'

const StyledAboutContain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function About() {
  const text =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  return (
    <main>
      <Banner img={'http://localhost:3000/banner_about.png'} />
      <StyledAboutContain>
        <Lists contain={null} title="Fiabilité" page="about" />
        <Lists contain={text} title="Respect" page="about" />
        <Lists contain={null} title="Service" page="about" />
        <Lists contain={null} title="Responsabilité" page="about" />
      </StyledAboutContain>
    </main>
  )
}

export default About
