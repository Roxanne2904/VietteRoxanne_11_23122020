//styled
import { StyledBanner } from '../../Styled/Components/Banner/index'
import { StyledBannerImg } from '../../Styled/Components/Banner/index'
import { StyledBlackLayer } from '../../Styled/Components/Banner/index'
import { StyledBannerTxt } from '../../Styled/Components/Banner/index'
import { StyledBannertxt01 } from '../../Styled/Components/Banner/index'

function Banner(props) {
  const { img } = props
  const isBanner = img.split('banner')[1]
  return isBanner !== '_about.png' ? (
    <StyledBanner>
      <StyledBannerImg src={img} alt="la bannière" />
      <StyledBlackLayer></StyledBlackLayer>
      <StyledBannerTxt>
        <StyledBannertxt01>Chez vous, </StyledBannertxt01>
        <span>partout et ailleurs</span>
      </StyledBannerTxt>
    </StyledBanner>
  ) : (
    <StyledBanner about="true">
      <StyledBannerImg about="true" src={img} alt="la bannière" />
      <StyledBlackLayer about="true"></StyledBlackLayer>
    </StyledBanner>
  )
}

export default Banner
