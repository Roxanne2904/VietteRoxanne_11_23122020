import { useParams } from 'react-router-dom'
import { useState } from 'react'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
//Styled
//Host page
import { StyledList } from '../../Styled/Components/Lists/index'
import { StyledListTitleContain } from '../../Styled/Components/Lists/index'
import { StyledListTitle } from '../../Styled/Components/Lists/index'
import { StyledListIcone } from '../../Styled/Components/Lists/index'
import { StyledListUL } from '../../Styled/Components/Lists/index'
import { StyledListLi } from '../../Styled/Components/Lists/index'
import { StyledListParagraphe } from '../../Styled/Components/Lists/index'
//About page
import { StyledAboutList } from '../../Styled/Components/Lists/index'
import { StyledAboutListParagraphe } from '../../Styled/Components/Lists/index'
import { StyledAboutListTitleContain } from '../../Styled/Components/Lists/index'

function Lists(props) {
  const { id } = useParams()
  const { contain, title, page } = props
  const [isOpen, setIsOpen] = useState('close')
  const [isUp, setIsDown] = useState(faChevronUp)

  const handleTheOpenList = () => {
    isUp === faChevronUp ? setIsDown(faChevronDown) : setIsDown(faChevronUp)
    isOpen === 'close' ? setIsOpen('open') : setIsOpen('close')
  }

  return page !== 'about' ? (
    <StyledList>
      <StyledListTitleContain>
        <StyledListTitle>{title}</StyledListTitle>
        <StyledListIcone onClick={() => handleTheOpenList()}>
          {contain !== null ? (
            <FontAwesomeIcon icon={isUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </StyledListIcone>
      </StyledListTitleContain>

      {typeof contain !== 'object' ? (
        <StyledListParagraphe className={`${isOpen}`}>
          {contain}
        </StyledListParagraphe>
      ) : (
        <StyledListUL className={`${isOpen}`}>
          {contain.map((elmnt, index) => (
            <StyledListLi key={`${id}-${elmnt}-${index}`}>{elmnt}</StyledListLi>
          ))}
        </StyledListUL>
      )}
    </StyledList>
  ) : (
    <StyledAboutList>
      <StyledAboutListTitleContain>
        <StyledListTitle>{title}</StyledListTitle>
        <StyledListIcone onClick={() => handleTheOpenList()}>
          <FontAwesomeIcon icon={isUp} />
        </StyledListIcone>
      </StyledAboutListTitleContain>

      {typeof contain !== 'object' ? (
        <StyledAboutListParagraphe className={`${isOpen}`}>
          {contain}
        </StyledAboutListParagraphe>
      ) : (
        <StyledListUL className={`${isOpen}`}>
          {contain.map((elmnt, index) => (
            <StyledListLi key={`${id}-${elmnt}-${index}`}>{elmnt}</StyledListLi>
          ))}
        </StyledListUL>
      )}
    </StyledAboutList>
  )
}

export default Lists

// typeof theme !== 'object' ? (
//   <StyledListParagraphe>{theme}</StyledListParagraphe>
// ) : (
//   <StyledListUL>
//     {theme.map((elmnt, index) => (
//       <StyledListLi key={`${id}-${elmnt}-${index}`}>{elmnt}</StyledListLi>
//     ))}
//   </StyledListUL>
// )
