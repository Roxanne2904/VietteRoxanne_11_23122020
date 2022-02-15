import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext, useState, useEffect } from 'react'
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Gallery(props) {
  const { id } = useParams()
  const { datas } = useContext(DatasContext)
  let { hostDatas } = props

  hostDatas = datas !== null && datas.filter((data) => data.id.includes(id))
  const hostPictures = hostDatas[0].pictures
  const [img, updateImg] = useState(0)

  //handleClicks
  const handleOnClickLeft = () => {
    img <= 0 ? updateImg(hostPictures.length - 1) : updateImg(img - 1)
  }
  const handleOnClickRight = () => {
    img < hostPictures.length - 1 ? updateImg(img + 1) : updateImg(0)
  }

  //handleArrowKeydown
  useEffect(() => {
    const handleArrowKeyDown = (e) => {
      const { keyCode } = e

      if (keyCode === 39) {
        img < hostPictures.length - 1 ? updateImg(img + 1) : updateImg(0)
        console.log(img)
      }
      if (keyCode === 37) {
        img <= 0 ? updateImg(hostPictures.length - 1) : updateImg(img - 1)
        console.log(img)
      }
    }

    window.addEventListener('keydown', handleArrowKeyDown)

    return () => window.removeEventListener('keydown', handleArrowKeyDown)
  }, [img, hostPictures.length])
  //----------------------------------

  return hostPictures.length !== 1 ? (
    <div className="gallery">
      <button
        className="gallery__arrowLeft"
        onClick={() => handleOnClickLeft()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <figure className="gallery__imgContent">
        <img
          className="gallery__imgContent__img"
          src={`${hostDatas[0].pictures[img]}`}
          alt={`${hostDatas[0].title}`}
        />
      </figure>
      <button
        className="gallery__arrowRight"
        onClick={() => handleOnClickRight()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  ) : (
    <div className="gallery">
      <figure className="gallery__imgContent">
        <img
          className="gallery__imgContent__img"
          src={`${hostDatas[0].pictures[img]}`}
          alt={`${hostDatas[0].title}`}
        />
      </figure>
    </div>
  )
}

export default Gallery
