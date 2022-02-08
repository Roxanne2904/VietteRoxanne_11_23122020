import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext, useState, useEffect } from 'react'

//styled
import { StyledHostImgContainer } from '../../Styled/Components/Carousel/index'
import { StyledHostImg } from '../../Styled/Components/Carousel/index'
import { StyledCarousel } from '../../Styled/Components/Carousel/index'
import { StyledCarouselArrowLeft } from '../../Styled/Components/Carousel/index'
import { StyledCarouselArrowRight } from '../../Styled/Components/Carousel/index'
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carousel(props) {
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
    <StyledCarousel>
      <StyledCarouselArrowLeft onClick={() => handleOnClickLeft()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </StyledCarouselArrowLeft>
      <StyledHostImgContainer>
        <StyledHostImg
          src={`${hostDatas[0].pictures[img]}`}
          alt={`${hostDatas[0].title}`}
        />
      </StyledHostImgContainer>
      <StyledCarouselArrowRight onClick={() => handleOnClickRight()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </StyledCarouselArrowRight>
    </StyledCarousel>
  ) : (
    <StyledCarousel>
      <StyledHostImgContainer>
        <StyledHostImg
          src={`${hostDatas[0].pictures[img]}`}
          alt={`${hostDatas[0].title}`}
        />
      </StyledHostImgContainer>
    </StyledCarousel>
  )
}

export default Carousel
