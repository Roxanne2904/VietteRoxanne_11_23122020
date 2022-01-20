import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
import Carousel from '../../Components/Carousel'
import Tags from '../../Components/Tags'
import Stars from '../../Components/Stars'
import Lists from '../../Components/Lists'

//Styled
import { StyledHostIdContain } from '../../Styled/Pages/Host/index'
import { StyledHostIdProfil } from '../../Styled/Pages/Host/index'
import { StyledHostIdImg } from '../../Styled/Pages/Host/index'
import { StyledHostMainTitle } from '../../Styled/Pages/Host/index'
import { StyledHostSubTitle } from '../../Styled/Pages/Host/index'
import { StyledHostNameContain } from '../../Styled/Pages/Host/index'
import { StyledHostFirstName } from '../../Styled/Pages/Host/index'
import { StyledHostName } from '../../Styled/Pages/Host/index'
import { StyledTagsAndStarsContain } from '../../Styled/Pages/Host/index'
import { StyledListContain } from '../../Styled/Pages/Host/index'

function HostPage(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))

  const rating = hostDatas !== false && parseInt(hostDatas[0].rating)
  const description = hostDatas !== false && hostDatas[0].description
  const equipments = hostDatas !== false && hostDatas[0].equipments

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
        <StyledTagsAndStarsContain>
          <Tags />
          <Stars rating={rating} />
        </StyledTagsAndStarsContain>
        <StyledListContain>
          <Lists theme={description} title="Description" />
          <Lists theme={equipments} title="Equipements" />
        </StyledListContain>
      </main>
    )
  )
}

export default HostPage
