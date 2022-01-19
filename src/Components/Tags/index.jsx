import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
//Styled
import { StyledUlTags } from '../../Styled/Components/Tags/index'
import { StyledLiTags } from '../../Styled/Components/Tags/index'

function Tags(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))

  return (
    <StyledUlTags>
      {hostDatas[0].tags.map((tag) => (
        <StyledLiTags key={`${hostDatas[0].id}-${tag}`}>{tag}</StyledLiTags>
      ))}
    </StyledUlTags>
  )
}
export default Tags
