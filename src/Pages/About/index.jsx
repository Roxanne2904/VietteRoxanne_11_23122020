import Banner from '../../Components/Banner'
import Error from '../Error'
import Collapse from '../../Components/Collapse/index'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'

const text = {
  fiability: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`,
  respect: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
  service: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`,
  responsability: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
}

function About() {
  const { datas } = useContext(DatasContext)

  return datas !== null ? (
    <main>
      <Banner page="about" />
      <div className="aboutContent">
        <Collapse content={text.fiability} title="Fiabilité" page="about" />
        <Collapse content={text.respect} title="Respect" page="about" />
        <Collapse content={text.service} title="Service" page="about" />
        <Collapse
          content={text.responsability}
          title="Responsabilité"
          page="about"
        />
      </div>
    </main>
  ) : (
    <Error />
  )
}

export default About
