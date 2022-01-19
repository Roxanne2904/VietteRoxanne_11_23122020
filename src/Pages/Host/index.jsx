import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
import Carousel from '../../Components/Carousel'
//font awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
//Styled
import { StyledHostIdContain } from '../../Styled/Pages/Host/index'
import { StyledHostIdProfil } from '../../Styled/Pages/Host/index'
import { StyledHostIdImg } from '../../Styled/Pages/Host/index'
import { StyledHostMainTitle } from '../../Styled/Pages/Host/index'
import { StyledHostSubTitle } from '../../Styled/Pages/Host/index'
import { StyledHostNameContain } from '../../Styled/Pages/Host/index'
import { StyledHostFirstName } from '../../Styled/Pages/Host/index'
import { StyledHostName } from '../../Styled/Pages/Host/index'

function HostPage(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))
  console.log(hostDatas)
  // console.log(hostDatas[0].host.name.split(' ')[0])
  return (
    hostDatas !== false && (
      <main>
        <Carousel />
        <StyledHostIdContain>
          <div>
            <StyledHostMainTitle>{`${hostDatas[0].title}`}</StyledHostMainTitle>
            <StyledHostSubTitle>{`${hostDatas[0].location}`}</StyledHostSubTitle>
          </div>
          <StyledHostIdProfil>
            <StyledHostIdImg
              src={`${hostDatas[0].host.picture}`}
              alt={`${hostDatas[0].host.name}`}
            />
            <StyledHostNameContain>
              <StyledHostFirstName>{`${
                hostDatas[0].host.name.split(' ')[0]
              }`}</StyledHostFirstName>
              <StyledHostName>{`${
                hostDatas[0].host.name.split(' ')[1]
              }`}</StyledHostName>
            </StyledHostNameContain>
          </StyledHostIdProfil>
        </StyledHostIdContain>
        <div>
          <ul>
            {hostDatas[0].tags.map((tag) => (
              <li key={`${hostDatas[0].id}-${tag}`}>{tag}</li>
            ))}
          </ul>
          <ul>
            <li>{/* <FontAwesomeIcon icon={faStar} /> */}</li>
          </ul>
        </div>
        <div>
          <div>
            <span>Description</span>
            <span>{/* <FontAwesomeIcon icon={faChevronUp} /> */}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Equipements</span>
            <span>flèche vers le haut/bas</span>
          </div>
        </div>
      </main>
    )
  )
}

export default HostPage
