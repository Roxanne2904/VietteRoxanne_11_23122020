import { useParams } from 'react-router-dom'
//--
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//styled
// import { StyledUlStars } from '../../Styled/Components/Stars/index'
// import { StyledLiFullStars } from '../../Styled/Components/Stars/index'
// import { StyledLiEmptyStars } from '../../Styled/Components/Stars/index'
//propTypes
import PropTypes from 'prop-types'

function Stars(props) {
  const { id } = useParams()
  let { rating } = props

  const range = [1, 2, 3, 4, 5]
  return (
    <ul className="ulStars">
      {range.map((nb) =>
        rating >= nb ? (
          <li className="ulStars__filledStars" key={`${id}-${nb}-full`}>
            <FontAwesomeIcon icon={faStar} />
          </li>
        ) : (
          <li className="ulStars__emptyStars" key={`${id}-${nb}-empty`}>
            <FontAwesomeIcon icon={faStar} />
          </li>
        )
      )}
    </ul>
  )
}
Stars.propTypes = {
  rating: PropTypes.number,
}
export default Stars
