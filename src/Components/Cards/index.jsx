import { Link } from 'react-router-dom'
//Context
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'

function Cards() {
  const { datas } = useContext(DatasContext)
  console.log(datas)
  return (
    <ul className="cardsContent">
      {datas !== null &&
        datas.map((data) => {
          return (
            <Link
              className="cardsContent__card"
              to={`/host/${data.id}`}
              key={`${data.id}-${data.title}`}
            >
              <span className="cardsContent__gradient"></span>
              <figure className="cardsContent__imgContent">
                <img
                  className="cardsContent__imgContent__img"
                  src={`${data.pictures[0]}`}
                  alt={`${data.title}`}
                />
                <figcaption className="cardsContent__imgContent__title">
                  {data.title}
                </figcaption>
              </figure>
            </Link>
          )
        })}
    </ul>
  )
}

export default Cards
