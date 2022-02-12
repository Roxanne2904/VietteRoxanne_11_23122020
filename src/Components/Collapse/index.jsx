import { useParams } from 'react-router-dom'
import { useState } from 'react'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
//Styled
//Host page
// import { StyledList } from '../../Styled/Components/Lists/index'
// import { StyledListTitleContain } from '../../Styled/Components/Lists/index'
// import { StyledListTitle } from '../../Styled/Components/Lists/index'
// import { StyledListIcone } from '../../Styled/Components/Lists/index'
// import { StyledListUL } from '../../Styled/Components/Lists/index'
// import { StyledListLi } from '../../Styled/Components/Lists/index'
// import { StyledListParagraphe } from '../../Styled/Components/Lists/index'
//propTypes
import PropTypes from 'prop-types'

function Collapse(props) {
  const { id } = useParams()
  const { content, title, page } = props
  const [isOpen, setIsOpen] = useState('close')
  const [isUp, setIsDown] = useState(faChevronUp)

  const handleTheOpenList = () => {
    isUp === faChevronUp ? setIsDown(faChevronDown) : setIsDown(faChevronUp)
    isOpen === 'close' ? setIsOpen('open') : setIsOpen('close')
  }

  return page !== 'about' ? (
    <div className="collapse">
      <div className="collapse__titleContent">
        <h3 className="collapse__titleContent__title">{title}</h3>
        <span
          className="collapse__titleContent__icone"
          onClick={() => handleTheOpenList()}
        >
          {content !== null ? (
            <FontAwesomeIcon icon={isUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </div>

      {typeof content !== 'object' ? (
        <p className={`collapse__paragraph ${isOpen}`}>{content}</p>
      ) : (
        <ul className={`collapse__ul ${isOpen}`}>
          {content.map((elmnt, index) => (
            <li className="collapse__ul__li" key={`${id}-${elmnt}-${index}`}>
              {elmnt}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <div className="collapse collapse--about" about="true">
      <div
        className="collapse__titleContent collapse__titleContent--about"
        about="true"
      >
        <h3 className="collapse__titleContent__title">{title}</h3>
        <span
          className="collapse__titleContent__icone"
          onClick={() => handleTheOpenList()}
        >
          <FontAwesomeIcon icon={isUp} />
        </span>
      </div>

      {typeof content !== 'object' ? (
        <p
          className={`collapse__paragraph collapse__paragraph--about ${isOpen}`}
          about="true"
        >
          {content}
        </p>
      ) : (
        <ul className={`collapse__ul ${isOpen}`}>
          {content.map((elmnt, index) => (
            <li className="collapse__ul__li" key={`${id}-${elmnt}-${index}`}>
              {elmnt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}
export default Collapse
