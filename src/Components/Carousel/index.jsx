import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
//styled
import { StyledHostImgContainer } from '../../Styled/Components/Carousel/index'
import { StyledHostImg } from '../../Styled/Components/Carousel/index'

function Carousel(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))

  return (
    <StyledHostImgContainer>
      <StyledHostImg
        src={`${hostDatas[0].pictures[0]}`}
        alt={`${hostDatas[0].title}`}
      />
    </StyledHostImgContainer>
  )
}

export default Carousel
