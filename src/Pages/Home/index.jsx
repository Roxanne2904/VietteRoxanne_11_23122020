import React, { Component } from 'react'
import Banniere from '../../assets/banner.png'
//---Styled
import { StyledBanner } from '../../Styled/Home/index'
import { StyledBannerImg } from '../../Styled/Home/index'
import { StyleBlackLayer } from '../../Styled/Home/index'
import { StyledBannerTxt } from '../../Styled/Home/index'
import { StyledRentalCover } from '../../Styled/Home/index'
import { StyledRentals } from '../../Styled/Home/index'
//router-dom
// import { Navigate } from 'react-router-dom'
//Context
import { DatasContext } from '../../Utils/Context/index'

class Home extends Component {
  render() {
    return (
      <DatasContext.Consumer>
        {(datas) => (
          <div>
            <StyledBanner>
              <StyledBannerImg
                src={Banniere}
                alt="la bannière"
                className="banner_img"
              />
              <StyleBlackLayer className="banner_blackLayer"></StyleBlackLayer>
              <StyledBannerTxt className="banner_txt">
                Chez vous, partout et ailleurs
              </StyledBannerTxt>
            </StyledBanner>
            <StyledRentalCover>
              {datas !== null &&
                datas.map((data) => {
                  return (
                    <StyledRentals key={`${data.id}-${data.title}`}>
                      <span>{data.title}</span>
                    </StyledRentals>
                  )
                })}
            </StyledRentalCover>
          </div>
        )}
      </DatasContext.Consumer>
    )
  }
}

export default Home
