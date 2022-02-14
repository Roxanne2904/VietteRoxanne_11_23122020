import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
import Carousel from '../../Components/Carousel'
import Tags from '../../Components/Tags'
import Stars from '../../Components/Stars'
import Collapse from '../../Components/Collapse/index'
import Error from '../Error'
//Styled
// import { StyledGeneralIdContain } from '../../Styled/Pages/Host/index'
// import { StyledHostIdAndTagsContain } from '../../Styled/Pages/Host/index'
// import { StyledHostIdProfil } from '../../Styled/Pages/Host/index'
// import { StyledHostIdImg } from '../../Styled/Pages/Host/index'
// import { StyledHostMainTitle } from '../../Styled/Pages/Host/index'
// import { StyledHostSubTitle } from '../../Styled/Pages/Host/index'
// import { StyledHostNameContain } from '../../Styled/Pages/Host/index'
// import { StyledHostFirstName } from '../../Styled/Pages/Host/index'
// import { StyledHostName } from '../../Styled/Pages/Host/index'
// import { StyledProfilAndStarsContain } from '../../Styled/Pages/Host/index'
// import { StyledListContain } from '../../Styled/Pages/Host/index'

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
      <div className="hostContent">
        <div className="hostContent__titlesAndTags">
          <div>
            <h1 className="hostContent__titlesAndTags__mainTitle">{`${hostDatas[0].title}`}</h1>
            <span className="hostContent__titlesAndTags__subtitle">{`${hostDatas[0].location}`}</span>
          </div>
          <Tags />
        </div>
        <div className="hostContent__StarsAndImgContent">
          <figure className="hostContent__StarsAndImgContent__imgContent">
            <img
              className="hostContent__StarsAndImgContent__imgContent__img"
              src={`${hostDatas[0].host.picture}`}
              alt={`${hostDatas[0].host.name}`}
            />
            <figcaption className="hostContent__StarsAndImgContent__imgContent__namesContent">
              <span className="hostContent__StarsAndImgContent__imgContent__namesContent__firstName">{`${
                hostDatas[0].host.name.split(' ')[0]
              }`}</span>
              <span className="hostContent__StarsAndImgContent__imgContent__namesContent__name">{`${
                hostDatas[0].host.name.split(' ')[1]
              }`}</span>
            </figcaption>
          </figure>
          <Stars rating={rating} />
        </div>
      </div>
      <div className="collapseContent">
        <Collapse content={description} title="Description" page="host" />
        <Collapse content={equipments} title="Equipements" page="host" />
      </div>
    </main>
  ) : (
    <Error />
  )
}

export default HostPage
