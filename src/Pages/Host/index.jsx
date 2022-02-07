import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
import Carousel from '../../Components/Carousel'
import Tags from '../../Components/Tags'
import Stars from '../../Components/Stars'
import Lists from '../../Components/Lists'
import Error from '../Error'
//Styled
import { StyledGeneralIdContain } from '../../Styled/Pages/Host/index'
import { StyledHostIdAndTagsContain } from '../../Styled/Pages/Host/index'
import { StyledHostIdProfil } from '../../Styled/Pages/Host/index'
import { StyledHostIdImg } from '../../Styled/Pages/Host/index'
import { StyledHostMainTitle } from '../../Styled/Pages/Host/index'
import { StyledHostSubTitle } from '../../Styled/Pages/Host/index'
import { StyledHostNameContain } from '../../Styled/Pages/Host/index'
import { StyledHostFirstName } from '../../Styled/Pages/Host/index'
import { StyledHostName } from '../../Styled/Pages/Host/index'
import { StyledProfilAndStarsContain } from '../../Styled/Pages/Host/index'
import { StyledListContain } from '../../Styled/Pages/Host/index'

function HostPage(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))

  const rating =
    hostDatas !== false &&
    hostDatas.length !== 0 &&
    parseInt(hostDatas[0].rating)
  const description =
    hostDatas !== false && hostDatas.length !== 0 && hostDatas[0].description
  const equipments =
    hostDatas !== false && hostDatas.length !== 0 && hostDatas[0].equipments

  return hostDatas !== false && hostDatas.length !== 0 ? (
    <main>
      <Carousel />
      <StyledGeneralIdContain>
        <StyledHostIdAndTagsContain>
          <div>
            <StyledHostMainTitle>{`${hostDatas[0].title}`}</StyledHostMainTitle>
            <StyledHostSubTitle>{`${hostDatas[0].location}`}</StyledHostSubTitle>
          </div>
          <Tags />
        </StyledHostIdAndTagsContain>
        <StyledProfilAndStarsContain>
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
          <Stars rating={rating} />
        </StyledProfilAndStarsContain>
      </StyledGeneralIdContain>
      <StyledListContain>
        <Lists contain={description} title="Description" page="host" />
        <Lists contain={equipments} title="Equipements" page="host" />
      </StyledListContain>
    </main>
  ) : (
    <Error />
  )
}

export default HostPage
