import { StyledCardsCover } from '../../Styled/Components/Cards/index'
import { StyledCards } from '../../Styled/Components/Cards/index'
import { StyledCardsTitle } from '../../Styled/Components/Cards/index'
import { StyledCardsGradient } from '../../Styled/Components/Cards/index'
import { StyledCardsImgContain } from '../../Styled/Components/Cards/index'
import { StyledCardsImg } from '../../Styled/Components/Cards/index'
//Context
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'

function Cards() {
  const { datas } = useContext(DatasContext)
  console.log(datas)
  return (
    <StyledCardsCover>
      {datas !== null &&
        datas.map((data) => {
          return (
            <StyledCards
              to={`/host/${data.id}`}
              key={`${data.id}-${data.title}`}
            >
              <StyledCardsGradient></StyledCardsGradient>
              <StyledCardsImgContain>
                <StyledCardsImg
                  src={`${data.pictures[0]}`}
                  alt={`${data.title}`}
                />
                <StyledCardsTitle>{data.title}</StyledCardsTitle>
              </StyledCardsImgContain>
            </StyledCards>
          )
        })}
    </StyledCardsCover>
  )
}

export default Cards
