import { useParams } from 'react-router-dom'
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
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

  return (
    <StyledCarousel>
      <StyledCarouselArrowLeft>
        <FontAwesomeIcon icon={faChevronLeft} />
      </StyledCarouselArrowLeft>
      <StyledHostImgContainer>
        <StyledHostImg
          src={`${hostDatas[0].pictures[0]}`}
          alt={`${hostDatas[0].title}`}
        />
      </StyledHostImgContainer>
      <StyledCarouselArrowRight>
        <FontAwesomeIcon icon={faChevronRight} />
      </StyledCarouselArrowRight>
    </StyledCarousel>
  )
}

export default Carousel
