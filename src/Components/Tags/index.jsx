import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'

function Tags(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))

  return (
    <ul className="ulTags">
      {hostDatas[0].tags.map((tag) => (
        <li className="ulTags__liTags" key={`${hostDatas[0].id}-${tag}`}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
export default Tags
