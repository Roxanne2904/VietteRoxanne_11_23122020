import Banner from '../../Components/Banner'
import Lists from '../../Components/Lists/index'
import styled from 'styled-components'

const StyledAboutContain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const text = {
  fiability: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`,
  respect: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
  service: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`,
  responsability: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
}

function About() {
  return (
    <main>
      <Banner img={'http://localhost:3000/banner_about.png'} />
      <StyledAboutContain>
        <Lists contain={text.fiability} title="Fiabilité" page="about" />
        <Lists contain={text.respect} title="Respect" page="about" />
        <Lists contain={text.service} title="Service" page="about" />
        <Lists
          contain={text.responsability}
          title="Responsabilité"
          page="about"
        />
      </StyledAboutContain>
    </main>
  )
}

export default About
